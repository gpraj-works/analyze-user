export type PerformanceMetrics = {
  pageLoadTime: number
}

export const getPerformanceMetrics = (): PerformanceMetrics => {
  const [navigation] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
  if (navigation) {
    return {
      pageLoadTime: navigation.loadEventEnd - navigation.startTime,
    }
  }
  const { timing } = performance
  return {
    pageLoadTime: timing.loadEventEnd - timing.navigationStart,
  }
}
