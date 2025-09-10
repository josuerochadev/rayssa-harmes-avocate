import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  caseType: string
  location: string
  className?: string
}

export default function TestimonialCard({
  quote,
  author,
  caseType,
  location,
  className = ''
}: TestimonialCardProps) {
  return (
    <div className={`card p-6 relative animate-on-scroll ${className}`}>
      <div className="absolute top-4 right-4">
        <Quote className="h-8 w-8 text-secondary" />
      </div>
      
      <blockquote className="mb-6">
        <p className="text-gray-700 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      
      <footer className="border-t border-gray-100 pt-4">
        <div className="flex flex-col space-y-1">
          <cite className="font-medium text-primary not-italic">
            {author}
          </cite>
          <div className="text-sm text-gray-600">
            {caseType} • {location}
          </div>
        </div>
      </footer>
    </div>
  )
}