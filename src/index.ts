import { getBrowserInfo, BrowserInfo } from "./analytes/browser"
import { getDeviceInfo, DeviceInfo } from "./analytes/device"
import { getNetworkInfo, getUserIP, NetworkInfo } from "./analytes/network"
import { getUserPreferences, getGeolocation, UserPreferences, GeolocationResult } from "./analytes/user"
import { getPageInfo, PageInfo } from "./analytes/page"
import { getPerformanceMetrics, PerformanceMetrics } from "./analytes/performance"
import { trackClipboardEvents, trackWindowState } from "./analytes/events"

export type UserAnalysis = {
  browser: BrowserInfo
  device: DeviceInfo
  network: NetworkInfo
  ip: string
  user: UserPreferences
  location: GeolocationResult
  page: PageInfo
  performance: PerformanceMetrics
}

export const userAnalyzes = async (): Promise<UserAnalysis> => {
  return {
    browser: getBrowserInfo(),
    device: getDeviceInfo(),
    network: getNetworkInfo(),
    ip: await getUserIP(),
    user: getUserPreferences(),
    location: await getGeolocation(),
    page: getPageInfo(),
    performance: getPerformanceMetrics(),
  }
}

export const initEventTracking = (): void => {
  trackClipboardEvents()
  trackWindowState()
}