export type PageInfo = {
  url: string
  referrer: string
}

export const getPageInfo = (): PageInfo => {
  return {
    url: window.location.href,
    referrer: document.referrer,
  }
}
