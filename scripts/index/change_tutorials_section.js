const sections = document.querySelectorAll('[data-tutorials-section]')
const sectionBtns = document.querySelectorAll('#tutorials-section-btn')
const backgrounds = document.querySelectorAll('[data-tutorials-bg]')
const subtitles = document.querySelectorAll('#tutorial-subtitle')
const lines = document.getElementsByClassName('line')

const description = document.getElementById('description');
const hash = document.getElementById('hash');
const stopwatch = document.getElementById('stopwatch');
const snake = document.getElementById('snake');
const calculator = document.getElementById('calculator');

//             blue       red        purple     orange     green
let colors = ["#0033CE", "#FF0000", "#9200B7", "#FF6B00", "#26B04B"]

let coords = [
    [0,200], [700,0], [1200,500], [500,800]
];

const canvasTutorials = document.getElementById('tutorials-bg-lights')
const TutorialsSize = document.getElementById('tutorials')
const ctxTutorials = canvasTutorials.getContext('2d')

function draw(circleColor) {
  canvasTutorials.width = TutorialsSize.clientWidth
  canvasTutorials.height = TutorialsSize.clientHeight

  if(canvasTutorials.getContext) {
    ctxTutorials.filter = "blur(124px)";
    ctxTutorials.fillStyle = circleColor

    ctxTutorials.beginPath();
    for(let i = 0; i < coords.length; i++){
      ctxTutorials.moveTo(coords[i][0], coords[i][1]);
      ctxTutorials.arc(coords[i][0], coords[i][1], 200, 0, Math.PI * 2, true);
    }
    ctxTutorials.fill();
  } 
}
draw("rgba(0, 51, 206, 0.20)")

for(let i = 0; i < sectionBtns.length; i++) {
  sectionBtns[i].addEventListener('click', () => {

    for(let j = 0; j < sections.length; j++) {
      sections[j].classList.add('hide')
      sectionBtns[j].classList.add('unclicked')
      backgrounds[j].style.opacity = "0"
    }

    if(sectionBtns[i] == sectionBtns[0]) {
      description.classList.remove('hide')
      sectionBtns[i].classList.remove('unclicked')
      sectionBtns[i].style.backgroundColor = colors[i]
      backgrounds[i].style.opacity = "100%"
      subtitles[i].style.color = colors[i]
      
      for(let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = colors[0]
      }

      ctxTutorials.clearRect(0, 0, canvasTutorials.width, canvasTutorials.height)
      draw("rgba(0, 51, 206, 0.20)")

    } else if(sectionBtns[i] == sectionBtns[1]) {
      hash.classList.remove('hide')
      sectionBtns[i].classList.remove('unclicked')
      sectionBtns[i].style.backgroundColor = colors[i]
      backgrounds[i].style.opacity = "100%"
      subtitles[i].style.color = colors[i]

      for(let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = colors[1]
      }

      ctxTutorials.clearRect(0, 0, canvasTutorials.width, canvasTutorials.height)
      draw("rgba(255, 0, 0, 0.20)")

    } else if(sectionBtns[i] == sectionBtns[2]) {
      stopwatch.classList.remove('hide')
      sectionBtns[i].classList.remove('unclicked')
      sectionBtns[i].style.backgroundColor = "#9200B7"
      backgrounds[i].style.opacity = "100%"
      subtitles[i].style.color = colors[i]

      for(let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = colors[2]
      }

      ctxTutorials.clearRect(0, 0, canvasTutorials.width, canvasTutorials.height)
      draw("rgba(146, 0, 183, 0.20)")

    } else if(sectionBtns[i] == sectionBtns[3]) {
      snake.classList.remove('hide')
      sectionBtns[i].classList.remove('unclicked')
      sectionBtns[i].style.backgroundColor = "#FF6B00"
      backgrounds[i].style.opacity = "100%"
      subtitles[i].style.color = colors[i]

      for(let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = colors[3]
      }

      ctxTutorials.clearRect(0, 0, canvasTutorials.width, canvasTutorials.height)
      draw("rgba(255, 107, 0, 0.20)")

    } else if(sectionBtns[i] == sectionBtns[4]) {
      calculator.classList.remove('hide')
      sectionBtns[i].classList.remove('unclicked')
      sectionBtns[i].style.backgroundColor = "#00FF44"
      backgrounds[i].style.opacity = "100%"
      subtitles[i].style.color = colors[i]

      for(let j = 0; j < lines.length; j++) {
        lines[j].style.backgroundColor = colors[4]
      }

      ctxTutorials.clearRect(0, 0, canvasTutorials.width, canvasTutorials.height)
      draw("rgba(0, 255, 68, 0.20")
    }

  })
}