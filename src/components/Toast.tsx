import { forwardRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import classnames from 'classnames'
import styles from './Toast.module.scss'
import SvgIcon from './SvgIcon'

export type ToastProps = {
  delaySeconds?: number
  msg: any
  type?: 'warn' | 'success' | 'error'
  onClose?: Fn
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (props: ToastProps, ref) => {
    const { type = 'success', delaySeconds = 2 } = props
    const [isEnter, setEnter] = useState(false)

    const { onClose } = props

    useEffect(() => {
      setTimeout(() => setEnter(true))

      setTimeout(() => {
        onClose?.()
        setEnter(false)
      }, delaySeconds * 1000)
    }, [onClose, delaySeconds])

    const toastClass = classnames({
      [styles.toast]: true,
      [styles[`toast-${type}`]]: true,
    })

    const conClass = classnames({
      [styles['toast-con']]: true,
      [styles.enter]: isEnter,
    })

    return (
      props.msg && (
        <div ref={ref} className={toastClass} data-type={type}>
          <div className={conClass}>
            <span className="icon-wrap">
              {type === 'success' ? (
                <SvgIcon name="success" />
              ) : (
                <SvgIcon name="info" className={'icon-' + type} />
              )}
            </span>
            {props.msg}
          </div>
        </div>
      )
    )
  },
)

// eslint-disable-next-line react-refresh/only-export-components
export const showToast = (function getShowToast() {
  let isShowing = false
  const queue = [] as Array<ToastProps>

  return function openToast(options: ToastProps) {
    if (isShowing) {
      queue.push(options)
      return
    }

    let div = document.createElement('div')
    div.className = 'toast-wrapper'
    document.body.append(div)
    const toastRoot = ReactDOM.createRoot(div)

    const onClose = () => {
      toastRoot.unmount()
      document.body.removeChild(div)
      div = null as any
      isShowing = false

      options.onClose?.()

      // only one toast
      if (queue.length) {
        openToast(queue.shift()!)
      }
    }

    toastRoot.render(<Toast {...options} onClose={onClose} />)
    isShowing = true
  }
})()
