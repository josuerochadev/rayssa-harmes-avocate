/**
 * Type declarations for jest-axe
 *
 * jest-axe does not provide official TypeScript definitions,
 * so we declare the types manually for our usage.
 */

declare module 'jest-axe' {
  import type { AxeResults, RunOptions, Spec } from 'axe-core'

  /**
   * Runs axe accessibility tests on a given HTML element or document
   * @param html - The HTML element or document to test
   * @param options - Optional axe configuration options
   * @returns Promise resolving to axe test results
   */
  export function axe(
    html: Element | Document | string,
    options?: RunOptions
  ): Promise<AxeResults>

  /**
   * Configures axe with custom rules or options
   * @param spec - Axe configuration specification
   */
  export function configureAxe(spec?: Spec): typeof axe

  /**
   * Jest matcher to check for accessibility violations
   * Extends Jest/Vitest expect with .toHaveNoViolations()
   */
  export const toHaveNoViolations: {
    toHaveNoViolations(results: AxeResults): {
      pass: boolean
      message: () => string
    }
  }

  /**
   * Vitest/Jest expect extensions
   */
  export interface JestAxeMatchers {
    /**
     * Check if there are no accessibility violations
     * @param results - The axe test results to validate
     */
    toHaveNoViolations(): void
  }
}

/**
 * Extend Vitest's Assertion interface to include jest-axe matchers
 */
declare module 'vitest' {
  interface Assertion {
    toHaveNoViolations(): void
  }

  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void
  }
}
