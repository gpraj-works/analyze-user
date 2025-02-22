export type BrowserInfo = {
  name: string
  version: string
}

export const getBrowserInfo = (): BrowserInfo => {
  const userAgent = navigator.userAgent
  let name = "Unknown"
  let version = "Unknown"

  if (/edg/i.test(userAgent)) {
    name = "Edge"
    version = userAgent.match(/edg\/(\d+)/i)?.[1] || "Unknown"
  } else if (/chrome/i.test(userAgent) && !/opr|brave/i.test(userAgent)) {
    name = "Chrome"
    version = userAgent.match(/chrome\/(\d+)/i)?.[1] || "Unknown"
  } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
    name = "Safari"
    version = userAgent.match(/version\/(\d+)/i)?.[1] || "Unknown"
  } else if (/firefox/i.test(userAgent)) {
    name = "Firefox"
    version = userAgent.match(/firefox\/(\d+)/i)?.[1] || "Unknown"
  } else if (/opr|opera/i.test(userAgent)) {
    name = "Opera"
    version = userAgent.match(/(?:opr|opera)\/(\d+)/i)?.[1] || "Unknown"
  }

  return { name, version }
}
