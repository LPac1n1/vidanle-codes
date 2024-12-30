const login = document.getElementById("login")
const cadastro = document.getElementById("cadastro")
const loginscene = document.getElementById("loginscene")
const checkbox = document.getElementById("check")
const checkbox2 = document.getElementById("check2")
const cad = document.getElementById("cad")
const passwordInput = document.getElementById("senha")
const passwordInput1 = document.getElementById("conf")
const passwordInput2 = document.getElementById("senha2")

const body = document.getElementById('body')
const registerContent = document.getElementById('register-section')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')
const closeBtn = document.getElementById('close-btn')

loginBtn.onclick = () => {
  body.style.overflow = 'hidden'
  registerContent.classList.remove('hide')
  cadastro.classList.add('hide')
  loginscene.classList.remove('hide')
}

registerBtn.onclick = () => {
  body.style.overflow = 'hidden'
  registerContent.classList.remove('hide')
  cadastro.classList.remove('hide')
  loginscene.classList.add('hide')
}

closeBtn.onclick = () => {
  body.style.overflow = 'scroll'
  registerContent.classList.add('hide')
}

login.addEventListener("click", ()=>{
  cadastro.classList.add('hide')
  loginscene.classList.remove("hide")
} )


checkbox.addEventListener('change',
function(){
  passwordInput.type = checkbox.checked ? 'text' : 'password';
})

checkbox.addEventListener('change',
function(){
  passwordInput1.type = checkbox.checked ? 'text' : 'password';
})


checkbox2.addEventListener('change',
function(){
  passwordInput2.type = checkbox2.checked ? 'text' : 'password';
})


cad.addEventListener("click", ()=>{
  cadastro.classList.remove('hide')
  loginscene.classList.add("hide")
} )

const makeRegisterBtn = document.getElementById('make-register-btn')
const makeLoginBtn = document.getElementById('make-login-btn')

makeRegisterBtn.onclick = () => {
  body.style.overflow = 'scroll'
  registerContent.classList.add('hide')
}
makeLoginBtn.onclick = () => {
  body.style.overflow = 'scroll'
  registerContent.classList.add('hide')
}