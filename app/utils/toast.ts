import { showToast } from '@/components/Toast'
import type { ToastProps } from '@/components/Toast'

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Options = Omit<ToastProps, 'type'>

export const toast = {
  success(msg: any, onClose?: Fn, delaySeconds?: number) {
    return showToast({ msg, delaySeconds, onClose, type: 'success' })
  },
  error(msg: any, onClose?: Fn, delaySeconds?: number) {
    return showToast({ msg, delaySeconds, onClose, type: 'error' })
  },
  warn(msg: any, onClose?: Fn, delaySeconds?: number) {
    return showToast({ msg, delaySeconds, onClose, type: 'warn' })
  },
}
