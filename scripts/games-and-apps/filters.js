const filters = document.getElementsByClassName('form-check-label')
const radios = document.getElementsByClassName('form-check-input')

const cards = document.getElementsByClassName('card')
const games = document.querySelectorAll('[data-game]')
const apps = document.querySelectorAll('[data-app]')
const boardGames = document.querySelectorAll('[data-board-game]')
const cardGames = document.querySelectorAll('[data-cards-game]')

for(let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('click', () => {
    if(filters[i].innerHTML == "Mostrar tudo") {
      for(let j = 0; j < games.length; j++) {
        games[j].style.display = 'block'
      }
      for(let j = 0; j < apps.length; j++) {
        apps[j].style.display = 'block'
      }
      for(let j = 0; j < boardGames.length; j++) {
        boardGames[j].style.display = 'block'
      }
      for(let j = 0; j < cardGames.length; j++) {
        cardGames[j].style.display = 'block'
      }

      canvas.height = content.clientHeight
      draw()
    }

    else if(filters[i].innerHTML == "Jogo") {
      for(let j = 0; j < games.length; j++) {
        games[j].style.display = 'block'
      }
      for(let j = 0; j < apps.length; j++) {
        apps[j].style.display = 'none'
      }
      for(let j = 0; j < boardGames.length; j++) {
        boardGames[j].style.display = 'none'
      }
      for(let j = 0; j < cardGames.length; j++) {
        cardGames[j].style.display = 'none'
      }

      canvas.height = content.clientHeight
      draw()
    } 
    
    else if(filters[i].innerHTML == "Aplicação") {
      for(let j = 0; j < apps.length; j++) {
        apps[j].style.display = 'block'
      }
      for(let j = 0; j < games.length; j++) {
        games[j].style.display = 'none'
      }
      for(let j = 0; j < boardGames.length; j++) {
        boardGames[j].style.display = 'none'
      }
      for(let j = 0; j < cardGames.length; j++) {
        cardGames[j].style.display = 'none'
      }

      canvas.height = content.clientHeight
      draw()
    } 
    
    else if(filters[i].innerHTML == "Jogo de tabuleiro") {
      for(let j = 0; j < boardGames.length; j++) {
        boardGames[j].style.display = 'block'
      }
      for(let j = 0; j < games.length; j++) {
        games[j].style.display = 'none'
      }
      for(let j = 0; j < apps.length; j++) {
        apps[j].style.display = 'none'
      }
      for(let j = 0; j < cardGames.length; j++) {
        cardGames[j].style.display = 'none'
      }

      canvas.height = content.clientHeight
      draw()
    }

    else if(filters[i].innerHTML == "Jogo de cartas") {
      for(let j = 0; j < cardGames.length; j++) {
        cardGames[j].style.display = 'block'
      }
      for(let j = 0; j < boardGames.length; j++) {
        boardGames[j].style.display = 'none'
      }
      for(let j = 0; j < games.length; j++) {
        games[j].style.display = 'none'
      }
      for(let j = 0; j < apps.length; j++) {
        apps[j].style.display = 'none'
      }

      canvas.height = content.clientHeight
      draw()
    }
  })
}

