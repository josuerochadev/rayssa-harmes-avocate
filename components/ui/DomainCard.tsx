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
      <div className="card p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-green-mint p-3 rounded-lg group-hover:bg-green-primary group-hover:text-white transition-colors">
              <Icon className="h-6 w-6 text-green-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-slab font-semibold text-xl text-primary group-hover:text-green-accent transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="text-gray-600 flex-grow leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="flex items-center text-primary group-hover:text-green-accent transition-colors font-medium">
            <span>En savoir plus</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}