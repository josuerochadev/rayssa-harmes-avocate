import { render, screen } from '@/test/utils'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import MobileNavItem from './MobileNavItem'
import type { NavigationItem } from '@/data/navigation'

describe('MobileNavItem', () => {
  const mockIsActive = vi.fn()
  const mockOnClose = vi.fn()

  beforeEach(() => {
    mockIsActive.mockClear()
    mockOnClose.mockClear()
  })

  it('should render navigation item without children', () => {
    const item: NavigationItem = {
      name: 'Accueil',
      href: '/',
    }

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })

  it('should call onClose when link is clicked', async () => {
    const user = userEvent.setup()
    const item: NavigationItem = {
      name: 'Contact',
      href: '/contact',
    }

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const link = screen.getByRole('link')
    await user.click(link)

    expect(mockOnClose).toHaveBeenCalled()
  })

  it('should apply active styles when link is active', () => {
    const item: NavigationItem = {
      name: 'Accueil',
      href: '/',
    }

    mockIsActive.mockReturnValue(true)

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('text-primary')
  })

  it('should apply inactive styles when link is not active', () => {
    const item: NavigationItem = {
      name: 'Contact',
      href: '/contact',
    }

    mockIsActive.mockReturnValue(false)

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('text-neutral-700')
  })

  it('should render child items when present', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
        { name: 'Famille', href: '/domaines/famille' },
        { name: 'Travail', href: '/domaines/travail' },
      ],
    }

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    expect(screen.getByText('Domaines')).toBeInTheDocument()
    expect(screen.getByText('Contrats')).toBeInTheDocument()
    expect(screen.getByText('Famille')).toBeInTheDocument()
    expect(screen.getByText('Travail')).toBeInTheDocument()
  })

  it('should render all child links with correct hrefs', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
        { name: 'Famille', href: '/domaines/famille' },
      ],
    }

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const contratsLink = screen.getByText('Contrats').closest('a')
    const familleLink = screen.getByText('Famille').closest('a')

    expect(contratsLink).toHaveAttribute('href', '/domaines/contrats')
    expect(familleLink).toHaveAttribute('href', '/domaines/famille')
  })

  it('should call onClose when child link is clicked', async () => {
    const user = userEvent.setup()
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
      ],
    }

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const childLink = screen.getByText('Contrats')
    await user.click(childLink)

    expect(mockOnClose).toHaveBeenCalled()
  })

  it('should apply active styles to child links', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
        { name: 'Famille', href: '/domaines/famille' },
      ],
    }

    mockIsActive.mockImplementation((href: string) => href === '/domaines/famille')

    render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const contratsLink = screen.getByText('Contrats').closest('a')
    const familleLink = screen.getByText('Famille').closest('a')

    expect(contratsLink).toHaveClass('text-neutral-600')
    expect(familleLink).toHaveClass('text-primary')
  })

  it('should render children with proper indentation structure', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
      ],
    }

    const { container } = render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    const childrenContainer = container.querySelector('.ml-4')
    expect(childrenContainer).toBeInTheDocument()
    expect(childrenContainer).toHaveClass('mt-2')
    expect(childrenContainer).toHaveClass('space-y-2')
  })

  it('should handle item without children correctly', () => {
    const item: NavigationItem = {
      name: 'Simple Link',
      href: '/simple',
    }

    const { container } = render(<MobileNavItem item={item} isActive={mockIsActive} onClose={mockOnClose} />)

    // Should not have children container
    const childrenContainer = container.querySelector('.ml-4')
    expect(childrenContainer).not.toBeInTheDocument()
  })
})
