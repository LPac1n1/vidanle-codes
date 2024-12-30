const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let interval

function start() {
  canvas.width = document.getElementById('page-title').clientWidth
  canvas.height = document.getElementById('page-title').clientHeight

  const numbers = "01"
  const fontSize = 20
  const columns = canvas.width / fontSize

  const f = []
  for(let x = 0; x < columns; x++) {
    f[x] = 0
  }

  const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.1)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = "#0033CE"
    context.font = fontSize + 'px Arial'

    for(let x = 0; x < columns; x++) {
      const randomText = numbers.charAt(Math.floor(Math.random() * numbers.length))

      context.fillText(randomText, x * fontSize, f[x] * fontSize)

      if(f[x] * fontSize > canvas.height && Math.random() > 0.975) {
        f[x] = 0
      }

      f[x]++
    } 
  }

  interval = setInterval(draw, 35)
}

function stop() {
  clearInterval(interval)
}

start()

window.addEventListener('resize', () => {
  stop()
  start()
})