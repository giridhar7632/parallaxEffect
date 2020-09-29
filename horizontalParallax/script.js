// Parallax on mouse move
const mmParallax = (element, xDistance, yDistance, speed) => {
  let x = (window.innerWidth - xDistance*speed)/100
  let y = (window.innerHeight - yDistance*speed)/100
  
  element.style.transform = `translate(${-x}px,${y}px)`
}
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.letter').forEach(letter => {
    const speed = letter.getAttribute('data-speed')
    
    mmParallax(letter, e.pageX, e.pageY, speed)
    
  })
})