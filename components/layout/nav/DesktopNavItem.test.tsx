import { render, screen } from '@/test/utils'
import { describe, it, expect, vi } from 'vitest'
import DesktopNavItem from './DesktopNavItem'
import type { NavigationItem } from '@/data/navigation'

describe('DesktopNavItem', () => {
  const mockIsActive = vi.fn()

  it('should render navigation item without children', () => {
    const item: NavigationItem = {
      name: 'Accueil',
      href: '/',
    }

    render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })

  it('should apply active styles when link is active', () => {
    const item: NavigationItem = {
      name: 'Accueil',
      href: '/',
    }

    mockIsActive.mockReturnValue(true)

    render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('text-primary')
  })

  it('should apply inactive styles when link is not active', () => {
    const item: NavigationItem = {
      name: 'Contact',
      href: '/contact',
    }

    mockIsActive.mockReturnValue(false)

    render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('text-neutral-700')
  })

  it('should render chevron icon when item has children', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
        { name: 'Famille', href: '/domaines/famille' },
      ],
    }

    const { container } = render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    // Check for chevron icon (lucide-react ChevronDown)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should render dropdown menu with children', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
        { name: 'Famille', href: '/domaines/famille' },
      ],
    }

    render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    expect(screen.getByText('Contrats')).toBeInTheDocument()
    expect(screen.getByText('Famille')).toBeInTheDocument()
  })

  it('should render all child links with correct hrefs', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
        { name: 'Famille', href: '/domaines/famille' },
        { name: 'Travail', href: '/domaines/travail' },
      ],
    }

    render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4) // Parent + 3 children

    expect(screen.getByText('Contrats').closest('a')).toHaveAttribute('href', '/domaines/contrats')
    expect(screen.getByText('Famille').closest('a')).toHaveAttribute('href', '/domaines/famille')
    expect(screen.getByText('Travail').closest('a')).toHaveAttribute('href', '/domaines/travail')
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

    mockIsActive.mockImplementation((href: string) => href === '/domaines/contrats')

    render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    const contratsLink = screen.getByText('Contrats').closest('a')
    const familleLink = screen.getByText('Famille').closest('a')

    expect(contratsLink).toHaveClass('text-primary')
    expect(familleLink).toHaveClass('text-neutral-700')
  })

  it('should have dropdown menu initially invisible', () => {
    const item: NavigationItem = {
      name: 'Domaines',
      href: '/domaines',
      children: [
        { name: 'Contrats', href: '/domaines/contrats' },
      ],
    }

    const { container } = render(<DesktopNavItem item={item} isActive={mockIsActive} />)

    const dropdown = container.querySelector('.absolute')
    expect(dropdown).toHaveClass('invisible')
    expect(dropdown).toHaveClass('opacity-0')
  })
})
