export type UserPreferences = {
  language: string
  cookieEnabled: boolean
  darkMode: boolean
  reducedMotion: boolean
}

export const getUserPreferences = (): UserPreferences => {
  return {
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  }
}

export type GeolocationResult = GeolocationPosition | "Geolocation not supported" | "Geolocation denied"

export const getGeolocation = (): Promise<GeolocationResult> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve("Geolocation not supported")
    navigator.geolocation.getCurrentPosition(resolve, () =>
      resolve("Geolocation denied")
    )
  })
}
