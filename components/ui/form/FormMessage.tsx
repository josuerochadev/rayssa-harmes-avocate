interface FormMessageProps {
  type: 'success' | 'error'
  title: string
  message: string | React.ReactNode
}

export default function FormMessage({ type, title, message }: FormMessageProps) {
  const styles = {
    success: {
      container: 'bg-green-50 border border-green-200',
      title: 'text-green-800',
      message: 'text-green-700',
      icon: '✅',
    },
    error: {
      container: 'bg-red-50 border border-red-200',
      title: 'text-red-800',
      message: 'text-red-700',
      icon: '❌',
    },
  }

  const style = styles[type]

  return (
    <div className={`${style.container} rounded-button p-4`}>
      <p className={`${style.title} font-medium mb-${type === 'success' ? '1' : '2'}`}>
        {style.icon} {title}
      </p>
      <p className={`${style.message} text-sm`}>{message}</p>
    </div>
  )
}
