export type NetworkInfo = {
  networkType: string
}

export const getNetworkInfo = (): NetworkInfo => {
  return {
    networkType: (navigator as any).connection?.effectiveType || "Unknown",
  }
}

export const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json")
    if (!response.ok) throw new Error("Failed to fetch IP")

    const data: { ip: string } = await response.json()
    return data.ip
  } catch {
    return "Unavailable"
  }
}
