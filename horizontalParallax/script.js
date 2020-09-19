// Horizontal Parallax
const hrParallax = (element, distance, xSpeed, ySpeed=0) => {
  const item = document.querySelector(element)
  
  item.style.transform = `translate(${distance*xSpeed}px,${distance*ySpeed}px)`
}

document.addEventListener('scroll', () => {
  hrParallax('.cl1', window.scrollY, 0.4, 0.5)
  hrParallax('.cl2', window.scrollY, 0.7, 0.6)
  hrParallax('.cl3', window.scrollY, 0.3, 0.3)
  hrParallax('.cl4', window.scrollY, 0.6, 0.5)
  hrParallax('.cl5', window.scrollY, 0.4, 0.3)
  hrParallax('.pl', window.scrollY, 2, -0.5)
})

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