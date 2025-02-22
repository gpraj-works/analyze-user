export type DeviceInfo = {
  os: string
  screenResolution: string
  touchSupport: boolean
}

export const getDeviceInfo = (): DeviceInfo => {
  return {
    os: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
  }
}
