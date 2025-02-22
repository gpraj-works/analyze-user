export const trackClipboardEvents = (): void => {
  document.addEventListener("copy", () => console.log("User copied content"))
  document.addEventListener("paste", () => console.log("User pasted content"))
}

export const trackWindowState = (): void => {
  document.addEventListener("visibilitychange", () => {
    console.log(`Tab is now ${document.hidden ? "hidden" : "visible"}`)
  })

  window.addEventListener("resize", () => {
    console.log("Window resized", window.innerWidth, window.innerHeight)
  })
}
