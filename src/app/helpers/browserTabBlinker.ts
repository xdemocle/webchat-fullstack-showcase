export default message => {
  let timeoutId
  const oldTitle = document.title

  const blink = () => {
    document.title = document.title === message ? oldTitle : message
  }

  const clear = () => {
    clearInterval(timeoutId)
    document.title = oldTitle
    window.onmousemove = null
    timeoutId = null
  }

  if (!timeoutId) {
    timeoutId = setInterval(blink, 1000)
    // stop changing title on moving the mouse
    window.onmousemove = clear
  }
}
