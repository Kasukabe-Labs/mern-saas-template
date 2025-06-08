import { toast, type ExternalToast } from "sonner"

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'

interface ShowToastOptions extends Omit<ExternalToast, 'description' | 'action'> {
  description?: string | React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
}

/**
 * Show a toast notification
 * @param message - The message to display in the toast
 * @param type - The type of toast to display
 * @param options - Additional options for the toast
 * @example
 * showToast('Success!', 'success')
 * showToast('Error!', 'error', { duration: 5000 })
 * showToast('Info', 'info', { description: 'Additional information' })
 */
export const showToast = (
  message: string,
  type: ToastType = 'default',
  options: ShowToastOptions = {}
) => {
  const { description, ...rest } = options

  const toastOptions: ExternalToast = {
    ...rest,
    ...(description && { description }),
  }

  switch (type) {
    case 'success':
      return toast.success(message, toastOptions)
    case 'error':
      return toast.error(message, toastOptions)
    case 'info':
      return toast.info(message, toastOptions)
    case 'warning':
      return toast.warning(message, toastOptions)
    default:
      return toast(message, toastOptions)
  }
}

// Export the toast instance for direct usage if needed
export { toast }
