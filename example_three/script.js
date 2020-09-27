const parallax = (layer, distance, speed) => {
  layer.style.transform = `translate(${distance*speed}px, ${distance*1}px);`
}
document.addEventListener('scroll', () => {
  document.querySelectorAll('.up').forEach(up => {
    parallax(up, window.scrollY, -0.7)
  })
  document.querySelectorAll('.down').forEach(down => {
    parallax(down, window.scrollY, 0.5)
  })
})
