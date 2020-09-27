document.addEventListener('scroll', () => {
  const distance = window.scrollY
  const layer1=document.getElementById('layer1')
  layer1.style.width = (100 + distance/5)+'%'

  const layer2=document.getElementById('layer2')
  layer2.style.width = (100 + distance/5)+'%'
  layer2.style.left = distance/50+'%'

  const text=document.getElementById('text')
  text.style.top = -distance/20+'%'

})
