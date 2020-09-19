document.addEventListener('mousemove', e => {
  document.querySelectorAll('.letter').forEach(letter => {
    const speed = letter.getAttribute('data-speed')
    let x = (window.innerWidth - e.pageX*speed)/100
    let y = (window.innerHeight - e.pageY*speed)/100
    let z = (window.innerWidth - e.pageX*speed)/100
    letter.style.transform = `translate3d(${-x}px,${y}px, ${z}px)`
  });
})