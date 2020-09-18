document.addEventListener('mousemove', e => {
  document.querySelectorAll('.letter').forEach(letter => {
    let x = (window.innerWidth - e.pageX*10)/100
    let y = (window.innerHeight - e.pageY*10)/100
    letter.style.transform = `translate(${x}px,${y}px)`
  });
})