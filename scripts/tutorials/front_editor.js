const closeBtn = document.querySelector('[data-close]')
const frontEditor = document.getElementById('front-editor')
const frontEditorBtn = document.getElementById('front-editor-btn')

closeBtn.addEventListener('click', () => {
  frontEditor.style.display = 'none'
})

frontEditorBtn.addEventListener('click', () => {
  frontEditor.style.display = 'none'
})