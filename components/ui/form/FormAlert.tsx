import { AlertCircle } from 'lucide-react'

interface FormAlertProps {
  message: string | React.ReactNode
}

export default function FormAlert({ message }: FormAlertProps) {
  return (
    <div className="bg-accent-light/10 border border-accent rounded-button p-4">
      <div className="flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
        <p className="text-sm text-neutral-700">{message}</p>
      </div>
    </div>
  )
}
