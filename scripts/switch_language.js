const html = document.querySelectorAll('#html')
const css = document.querySelectorAll('#css')
const js = document.querySelectorAll('#js')

const htmlBtn = document.querySelectorAll('#html-btn')
const cssBtn = document.querySelectorAll('#css-btn')
const jsBtn = document.querySelectorAll('#js-btn')

for(let i = 0; i < htmlBtn.length; i++) {
  htmlBtn[i].addEventListener('click', () => {
    html[i].classList.remove('hide')
    css[i].classList.add('hide')
    js[i].classList.add('hide')
  
    htmlBtn[i].classList.add('seeing')
    cssBtn[i].classList.remove('seeing')
    jsBtn[i].classList.remove('seeing')
  })
}

for(let i = 0; i < cssBtn.length; i++) {
  cssBtn[i].addEventListener('click', () => {
    html[i].classList.add('hide')
    css[i].classList.remove('hide')
    js[i].classList.add('hide')
  
    htmlBtn[i].classList.remove('seeing')
    cssBtn[i].classList.add('seeing')
    jsBtn[i].classList.remove('seeing')
  })
}

for(let i = 0; i < jsBtn.length; i++) {
  jsBtn[i].addEventListener('click', () => {
    html[i].classList.add('hide')
    css[i].classList.add('hide')
    js[i].classList.remove('hide')
  
    htmlBtn[i].classList.remove('seeing')
    cssBtn[i].classList.remove('seeing')
    jsBtn[i].classList.add('seeing')
  })
}

