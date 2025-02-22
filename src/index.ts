import { getBrowserInfo, BrowserInfo } from "./analysis/browser"
import { getDeviceInfo, DeviceInfo } from "./analysis/device"
import { getNetworkInfo, getUserIP, NetworkInfo } from "./analysis/network"
import { getUserPreferences, getGeolocation, UserPreferences, GeolocationResult } from "./analysis/user"
import { getPageInfo, PageInfo } from "./analysis/page"
import { getPerformanceMetrics, PerformanceMetrics } from "./analysis/performance"
import { trackClipboardEvents, trackWindowState } from "./analysis/events"

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

export const userAnalysis = async (): Promise<UserAnalysis> => {
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