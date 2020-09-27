document.addEventListener('scroll', () => {
  let bg = document.getElementById('bg')
  let moon = document.getElementById('moon')
  let mountain = document.getElementById('mountain')
  let road = document.getElementById('road')
  let text = document.getElementById('text')

  const distance = window.scrollY
  bg.style.transform = `translateY(${distance*0.5}px)`
  moon.style.transform = `translateX(${-distance*0.5}px)`
  mountain.style.transform = `translateY(${-distance*0.2}px)`
  road.style.transform = `translateY(${distance*0.15}px)`
  text.style.transform = `translateY(${distance*0.8}px)` 
})