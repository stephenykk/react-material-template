export function isMobile() {
  const mobileRe = /Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/i

  const agent = navigator.userAgent

  return mobileRe.test(agent)
}

export function isPC() {
  return !isMobile()
}
