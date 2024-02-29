import ReactDOM from 'react-dom/client'
import SvgIcon from './SvgIcon'
import type { SvgIconProps } from './SvgIcon'

export function Loading(
  options: Omit<SvgIconProps, 'name'> & { isCenter?: boolean },
) {
  options = Object.assign(
    {
      stroke: '#646cff',
      size: 35,
      className: options?.isCenter ? 'center-both' : '',
    },
    options ?? {},
  )

  return <SvgIcon {...options} name="loading" />
}

// eslint-disable-next-line react-refresh/only-export-components
export const showLoading = (function getShowLoading() {
  let isShowing = false
  let closeLoading: Fn

  return function openLoading(options: SvgIconProps = {} as SvgIconProps) {
    // only one loading
    if (isShowing) {
      return closeLoading
    }

    let div = document.createElement('div')
    div.className = 'loading-wrapper'
    document.body.append(div)
    const loadingRoot = ReactDOM.createRoot(div)

    const hideLoading = () => {
      loadingRoot.unmount()
      document.body.removeChild(div)
      div = null as any
      isShowing = false
    }

    loadingRoot.render(<Loading {...options} />)
    isShowing = true

    closeLoading = hideLoading
    return hideLoading
  }
})()
