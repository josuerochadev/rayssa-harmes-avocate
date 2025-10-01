import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface DomainCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  className?: string
}

export default function DomainCard({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  className = '' 
}: DomainCardProps) {
  return (
    <Link href={href} className={`group ${className}`}>
      <div className="card p-8 h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-accent-light/20 p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-slab font-semibold text-xl text-primary group-hover:text-primary-dark transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-neutral-600 flex-grow leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex items-center text-primary group-hover:text-accent transition-colors font-medium">
            <span>En savoir plus</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}