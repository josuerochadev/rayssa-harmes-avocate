interface LanguageBadgesProps {
  variant?: 'header' | 'footer'
  className?: string
}

const languages = [
  { code: 'FR', name: 'Français' },
  { code: 'PT', name: 'Português' },
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
]

export default function LanguageBadges({ variant = 'header', className = '' }: LanguageBadgesProps) {
  const baseClasses = 'inline-flex items-center px-2 py-1 text-xs font-medium rounded transition-colors'
  
  const variantClasses = {
    header: 'bg-white/30 text-white font-semibold hover:bg-white/40',
    footer: 'bg-white/20 text-white font-semibold hover:bg-white/30',
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`text-xs font-medium ${variant === 'footer' ? 'text-white/90' : 'text-white'}`}>
        Langues :
      </span>
      {languages.map((lang) => (
        <span
          key={lang.code}
          className={`${baseClasses} ${variantClasses[variant]}`}
          title={lang.name}
        >
          {lang.code}
        </span>
      ))}
    </div>
  )
}