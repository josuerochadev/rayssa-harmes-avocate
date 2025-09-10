import { CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'

interface CaseStudyItemProps {
  title: string
  problem: string
  approach: string
  result: string
  className?: string
}

export default function CaseStudyItem({
  title,
  problem,
  approach,
  result,
  className = ''
}: CaseStudyItemProps) {
  return (
    <div className={`card p-6 animate-on-scroll ${className}`}>
      <h3 className="font-slab font-semibold text-xl text-primary mb-6">
        {title}
      </h3>
      
      <div className="space-y-6">
        {/* Problem */}
        <div className="flex items-start space-x-4">
          <div className="bg-red-50 p-2 rounded-lg flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Problématique</h4>
            <p className="text-gray-700 leading-relaxed">{problem}</p>
          </div>
        </div>
        
        {/* Approach */}
        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
            <ArrowRight className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Approche</h4>
            <p className="text-gray-700 leading-relaxed">{approach}</p>
          </div>
        </div>
        
        {/* Result */}
        <div className="flex items-start space-x-4">
          <div className="bg-green-50 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
            <p className="text-gray-700 leading-relaxed">{result}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 italic">
          <strong>Avertissement :</strong> Les résultats passés ne préjugent pas des résultats futurs. 
          Chaque situation est unique et nécessite une analyse juridique spécifique.
        </p>
      </div>
    </div>
  )
}