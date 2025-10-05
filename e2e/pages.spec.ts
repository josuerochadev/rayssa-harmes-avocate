import { test, expect } from '@playwright/test'

test.describe('Pages Content E2E', () => {
  test('should display homepage with hero section', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Check for main heading
    await expect(page.locator('h1').first()).toBeVisible()

    // Check for CTA button
    await expect(page.getByRole('link', { name: /prendre rdv/i }).first()).toBeVisible()

    // Check for domain cards in main content (not in header dropdown)
    await expect(page.locator('#main-content').getByText(/droit des contrats/i).first()).toBeVisible()
    await expect(page.locator('#main-content').getByText(/droit de la famille/i).first()).toBeVisible()
  })

  test('should display about page with lawyer information', async ({ page }) => {
    await page.goto('/a-propos', { waitUntil: 'load' })

    await expect(page.locator('h1')).toContainText(/à propos/i)

    // Check for professional information sections (use first to avoid strict mode violation)
    await expect(page.getByText(/parcours/i).first()).toBeVisible()
  })

  test('should display testimonials page', async ({ page }) => {
    await page.goto('/témoignages', { waitUntil: 'load' })

    await expect(page.locator('h1')).toContainText(/témoignages/i)

    // Check for testimonial cards
    const testimonials = page.locator('[class*="testimonial"], [class*="card"]')
    await expect(testimonials.first()).toBeVisible()
  })

  test('should display honoraires page with pricing information', async ({ page }) => {
    await page.goto('/honoraires', { waitUntil: 'load' })

    await expect(page.locator('h1')).toContainText(/honoraires/i)

    // Check for pricing information
    await expect(page.getByText(/consultation/i)).toBeVisible()
  })

  test('should display contact page with form and contact info', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'load' })

    await expect(page.locator('h1')).toContainText(/contact/i)

    // Check for contact form
    await expect(page.getByRole('button', { name: /envoyer/i })).toBeVisible()

    // Check for contact information (use first to avoid strict mode violation)
    await expect(page.getByText(/\+33 7 45 04 83 95/i).first()).toBeVisible()
    await expect(page.getByText(/harmes\.avocat@gmail\.com/i).first()).toBeVisible()
  })

  test('should display domain page with relevant information', async ({ page }) => {
    await page.goto('/domaines/famille', { waitUntil: 'load' })

    // Check for domain title
    await expect(page.locator('h1')).toContainText(/droit de la famille/i)

    // Check for cases handled section (use first to avoid strict mode violation)
    await expect(page.getByText(/cas traités|divorce|séparation/i).first()).toBeVisible()

    // Check for CTA to contact
    await expect(page.getByRole('link', { name: /contact/i }).first()).toBeVisible()
  })

  test('should display legal notices page', async ({ page }) => {
    await page.goto('/mentions-legales', { waitUntil: 'load' })

    await expect(page.locator('h1')).toContainText(/mentions légales/i)

    // Check for required legal information (use first to avoid strict mode violation)
    await expect(page.getByText(/éditeur/i).first()).toBeVisible()
  })

  test('should display privacy policy page', async ({ page }) => {
    await page.goto('/politique-confidentialite', { waitUntil: 'load' })

    await expect(page.locator('h1')).toContainText(/politique de confidentialité/i)

    // Check for GDPR-related content (use first to avoid strict mode violation)
    await expect(page.getByText(/données personnelles|rgpd/i).first()).toBeVisible()
  })

  test('should have proper meta tags on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toBeTruthy()
    expect(metaDescription?.length).toBeGreaterThan(50)

    // Check title
    const title = await page.title()
    expect(title).toContain('Strasbourg')
  })

  test('should have proper meta tags on domain pages', async ({ page }) => {
    await page.goto('/domaines/famille', { waitUntil: 'load' })

    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toBeTruthy()

    const title = await page.title()
    expect(title).toContain('Famille')
  })

  test('should load all domain pages without errors', async ({ page }) => {
    const domains = [
      '/domaines/contrats',
      '/domaines/famille',
      '/domaines/etrangers',
      '/domaines/travail',
      '/domaines/immobilier',
    ]

    for (const domain of domains) {
      const response = await page.goto(domain, { waitUntil: 'load' })
      expect(response?.status()).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  test('should display process steps on domain pages', async ({ page }) => {
    await page.goto('/domaines/contrats', { waitUntil: 'load' })

    // Check for process/steps section (the actual text is "Procédure type")
    await expect(page.getByText(/procédure type|cas traités/i).first()).toBeVisible()
  })

  test('should have working internal links in content', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    // Find and click a domain card link
    await page.getByRole('link', { name: /droit des contrats/i }).first().click()

    // Should navigate to domain page
    await expect(page).toHaveURL(/\/domaines\/contrats/)
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should display breadcrumbs on nested pages', async ({ page }) => {
    await page.goto('/domaines/famille', { waitUntil: 'load' })

    // Check if there's navigation context (breadcrumbs or back links)
    const hasNavContext = await page.locator('nav, [class*="breadcrumb"]').count()
    expect(hasNavContext).toBeGreaterThan(0)
  })

  test('should be mobile responsive on all main pages', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const pages = ['/', '/a-propos', '/contact', '/honoraires', '/domaines/famille']

    for (const pagePath of pages) {
      await page.goto(pagePath, { waitUntil: 'load' })

      // Check that main content is visible
      await expect(page.locator('h1')).toBeVisible()

      // Check that mobile menu button is visible
      await expect(page.getByRole('button', { name: /menu|ouvrir/i })).toBeVisible()
    }
  })

  test('should have accessible images with alt text', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' })

    const images = await page.locator('img').all()

    for (const img of images) {
      const alt = await img.getAttribute('alt')
      // Alt can be empty for decorative images, but attribute should exist
      expect(alt).not.toBeNull()
    }
  })

  test('should load without console errors', async ({ page }) => {
    const errors: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/', { waitUntil: 'load' })

    // Filter out known acceptable errors (like network errors in dev and CSP warnings in development)
    const criticalErrors = errors.filter(
      (error) =>
        !error.includes('favicon') &&
        !error.includes('FORMSPREE') &&
        !error.includes('Content Security Policy') &&
        !error.includes('Refused to apply inline style')
    )

    expect(criticalErrors).toHaveLength(0)
  })
})
