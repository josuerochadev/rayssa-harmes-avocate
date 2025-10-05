import { test, expect } from '@playwright/test'

test.describe('Navigation E2E', () => {
  test('should navigate to all main pages from header', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Test Accueil link
    await page.getByRole('link', { name: 'Accueil' }).first().click()
    await expect(page).toHaveURL('/')

    // Test À propos link
    await page.getByRole('link', { name: 'À propos' }).first().click()
    await expect(page).toHaveURL('/a-propos')

    // Test Témoignages link
    await page.goto('/', { waitUntil: 'load' })
    await page.getByRole('link', { name: 'Témoignages' }).first().click()
    await expect(page).toHaveURL('/temoignages')

    // Test Honoraires link
    await page.goto('/', { waitUntil: 'load' })
    await page.getByRole('link', { name: 'Honoraires' }).first().click()
    await expect(page).toHaveURL('/honoraires')

    // Test Contact link
    await page.goto('/', { waitUntil: 'load' })
    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL('/contact')
  })

  test('should navigate to domain pages from dropdown menu', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Hover over Domaines d'intervention
    await page.getByRole('link', { name: /domaines d'intervention/i }).first().hover()

    // Click on Droit des contrats
    await page.getByRole('link', { name: /droit des contrats/i }).first().click()
    await expect(page).toHaveURL('/domaines/contrats')

    // Go back and test another domain
    await page.goto('/', { waitUntil: 'load' })
    await page.getByRole('link', { name: /domaines d'intervention/i }).first().hover()
    await page.getByRole('link', { name: /droit de la famille/i }).first().click()
    await expect(page).toHaveURL('/domaines/famille')
  })

  test('should show active link highlighting', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Check if Accueil is highlighted
    const accueilLink = page.getByRole('link', { name: 'Accueil' }).first()
    await expect(accueilLink).toHaveClass(/text-primary/)
  })

  test('should display "Prendre RDV" button on all pages', async ({ page }) => {
    const pages = ['/', '/a-propos', '/contact', '/honoraires']

    for (const pagePath of pages) {
      await page.goto(pagePath, { waitUntil: 'load' })
      // Use first() to avoid strict mode violation when multiple "Prendre RDV" buttons exist
      await expect(page.getByRole('link', { name: /prendre rdv/i }).first()).toBeVisible()
    }
  })

  test('should have working phone and email links in header', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Check phone link
    const phoneLink = page.getByRole('link', { name: /\+33 7 45 04 83 95/i }).first()
    await expect(phoneLink).toHaveAttribute('href', 'tel:+33745048395')

    // Check email link (desktop version)
    const emailLink = page.getByRole('link', { name: /harmes\.avocat@gmail\.com/i }).first()
    await expect(emailLink).toHaveAttribute('href', 'mailto:harmes.avocat@gmail.com')
  })

  test('should navigate using mobile menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/', { waitUntil: 'load' })

    // Open mobile menu
    await page.getByRole('button', { name: /ouvrir le menu/i }).click()

    // Wait for menu to be visible - use dialog role from the container
    const mobileMenu = page.getByRole('dialog', { name: /menu de navigation/i })
    await expect(mobileMenu).toBeVisible()

    // Click on Contact link in the mobile menu
    await mobileMenu.getByRole('link', { name: 'Contact' }).click()

    // Should navigate and close menu
    await expect(page).toHaveURL('/contact')
  })

  test('should close mobile menu when clicking backdrop', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/', { waitUntil: 'load' })

    // Open mobile menu
    await page.getByRole('button', { name: /ouvrir le menu/i }).click()

    const mobileMenu = page.getByRole('dialog', { name: /menu de navigation/i })
    await expect(mobileMenu).toBeVisible()

    // Click backdrop (the overlay behind the menu)
    await page.locator('div[class*="bg-black"][class*="bg-opacity"]').click({ position: { x: 10, y: 10 } })

    // Menu should be closed
    await expect(mobileMenu).not.toBeVisible()
  })

  test('should display language badges in header', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Check for language badges in the header specifically
    await expect(page.getByRole('banner').getByText('Langues :')).toBeVisible()
    // Check for one of the language codes in the header
    await expect(page.getByRole('banner').locator('text=/FR|PT|EN|ES/').first()).toBeVisible()
  })

  test('should have sticky header that stays on top when scrolling', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    const header = page.locator('header')
    await expect(header).toHaveClass(/sticky/)
    await expect(header).toHaveClass(/top-0/)

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500))

    // Header should still be visible
    await expect(header).toBeVisible()
  })

  test('should navigate to all domain pages', async ({ page }) => {
    const domains = [
      { path: '/domaines/contrats', name: 'Droit des Contrats' },
      { path: '/domaines/famille', name: 'Droit de la Famille' },
      { path: '/domaines/etrangers', name: 'Droit des Étrangers' },
      { path: '/domaines/travail', name: 'Droit du Travail' },
      { path: '/domaines/immobilier', name: 'Droit Immobilier' },
    ]

    for (const domain of domains) {
      await page.goto(domain.path, { waitUntil: 'load' })
      await expect(page).toHaveURL(domain.path)
      // H1 contains "Avocat en [Domain Name]" so we check for the domain name with case insensitive
      await expect(page.locator('h1')).toContainText(new RegExp(domain.name, 'i'))
    }
  })

  test('should have working footer links', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Test mentions légales link
    await page.getByRole('link', { name: /mentions légales/i }).click()
    await expect(page).toHaveURL('/mentions-legales')

    // Test politique de confidentialité link
    await page.goto('/', { waitUntil: 'load' })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.getByRole('link', { name: /politique de confidentialité/i }).click()
    await expect(page).toHaveURL('/politique-confidentialite')
  })

  test('should display contact information in footer', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Check for phone and email in footer
    await expect(page.getByText(/\+33 7 45 04 83 95/i).last()).toBeVisible()
    await expect(page.getByText(/harmes\.avocat@gmail\.com/i).last()).toBeVisible()
  })
})
