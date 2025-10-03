import { test, expect } from '@playwright/test'

test.describe('Contact Form E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact form with all fields', async ({ page }) => {
    await expect(page.getByLabel(/nom et prénom/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/téléphone/i)).toBeVisible()
    await expect(page.getByLabel(/domaine concerné/i)).toBeVisible()
    await expect(page.getByLabel(/message/i)).toBeVisible()
    await expect(page.getByRole('checkbox')).toBeVisible()
    await expect(page.getByRole('button', { name: /envoyer le message/i })).toBeVisible()
  })

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Enable consent to allow submit button
    await page.getByRole('checkbox').check()

    // Submit form
    await page.getByRole('button', { name: /envoyer le message/i }).click()

    // Check for validation errors
    await expect(page.getByText(/le nom est requis/i)).toBeVisible()
    await expect(page.getByText(/l'email est requis/i)).toBeVisible()
    await expect(page.getByText(/veuillez sélectionner un domaine/i)).toBeVisible()
    await expect(page.getByText(/le message est requis/i)).toBeVisible()
  })

  test('should validate email format', async ({ page }) => {
    await page.getByLabel(/email/i).fill('invalid-email')
    await page.getByRole('checkbox').check()
    await page.getByRole('button', { name: /envoyer le message/i }).click()

    await expect(page.getByText(/email invalide/i)).toBeVisible()
  })

  test('should validate message minimum length', async ({ page }) => {
    await page.getByLabel(/message/i).fill('Short')
    await page.getByRole('checkbox').check()
    await page.getByRole('button', { name: /envoyer le message/i }).click()

    await expect(page.getByText(/le message doit contenir au moins 10 caractères/i)).toBeVisible()
  })

  test('should require consent before enabling submit button', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /envoyer le message/i })

    // Button should be disabled without consent
    await expect(submitButton).toBeDisabled()

    // Check consent
    await page.getByRole('checkbox').check()

    // Button should now be enabled
    await expect(submitButton).toBeEnabled()
  })

  test('should clear field error when user starts typing', async ({ page }) => {
    // Submit to trigger errors
    await page.getByRole('checkbox').check()
    await page.getByRole('button', { name: /envoyer le message/i }).click()

    // Verify error is shown
    await expect(page.getByText(/le nom est requis/i)).toBeVisible()

    // Start typing
    await page.getByLabel(/nom et prénom/i).fill('John')

    // Error should be cleared
    await expect(page.getByText(/le nom est requis/i)).not.toBeVisible()
  })

  test('should display all domain options in select', async ({ page }) => {
    const select = page.getByLabel(/domaine concerné/i)

    await expect(select).toBeVisible()

    // Get all options
    const options = await select.locator('option').allTextContents()

    expect(options).toContain('Droit des contrats')
    expect(options).toContain('Droit de la famille')
    expect(options).toContain('Droit des étrangers')
    expect(options).toContain('Droit du travail')
    expect(options).toContain('Droit immobilier')
    expect(options).toContain('Autre')
  })

  test('should display security warning message', async ({ page }) => {
    await expect(page.getByText(/ne transmettez pas d'informations confidentielles/i)).toBeVisible()
  })

  test('should fill and validate complete form successfully', async ({ page }) => {
    // Fill all fields
    await page.getByLabel(/nom et prénom/i).fill('Jean Dupont')
    await page.getByLabel(/email/i).fill('jean.dupont@example.com')
    await page.getByLabel(/téléphone/i).fill('+33 6 12 34 56 78')
    await page.getByLabel(/domaine concerné/i).selectOption('contrats')
    await page.getByLabel(/message/i).fill('Je souhaite obtenir des informations sur un contrat de location.')
    await page.getByRole('checkbox').check()

    // Submit form
    await page.getByRole('button', { name: /envoyer le message/i }).click()

    // Wait for submission (this will fail if no endpoint is configured, but validates the form logic)
    // In a real scenario, you'd mock the API or test against a real endpoint
    await expect(page.getByRole('button', { name: /envoi en cours/i })).toBeVisible({ timeout: 2000 })
  })

  test('should maintain form values during validation', async ({ page }) => {
    // Fill some fields
    await page.getByLabel(/nom et prénom/i).fill('Jean Dupont')
    await page.getByLabel(/email/i).fill('invalid-email')
    await page.getByLabel(/téléphone/i).fill('+33 6 12 34 56 78')

    // Submit form
    await page.getByRole('checkbox').check()
    await page.getByRole('button', { name: /envoyer le message/i }).click()

    // Check that values are maintained
    await expect(page.getByLabel(/nom et prénom/i)).toHaveValue('Jean Dupont')
    await expect(page.getByLabel(/email/i)).toHaveValue('invalid-email')
    await expect(page.getByLabel(/téléphone/i)).toHaveValue('+33 6 12 34 56 78')
  })

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check ARIA labels and attributes
    const nameInput = page.getByLabel(/nom et prénom/i)
    await expect(nameInput).toHaveAttribute('required')

    const emailInput = page.getByLabel(/email/i)
    await expect(emailInput).toHaveAttribute('required')
    await expect(emailInput).toHaveAttribute('type', 'email')

    const phoneInput = page.getByLabel(/téléphone/i)
    await expect(phoneInput).toHaveAttribute('type', 'tel')

    const checkbox = page.getByRole('checkbox')
    await expect(checkbox).toHaveAttribute('required')
  })

  test('should be responsive on mobile', async ({ page, viewport }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Check that form is visible and usable
    await expect(page.getByLabel(/nom et prénom/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /envoyer le message/i })).toBeVisible()

    // Fill a field to ensure it's interactive
    await page.getByLabel(/nom et prénom/i).fill('Test Mobile')
    await expect(page.getByLabel(/nom et prénom/i)).toHaveValue('Test Mobile')
  })
})
