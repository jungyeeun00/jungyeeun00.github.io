const loginForm = document.querySelector("#loginForm")
const inputName = document.querySelector("#loginForm input")
const welcome = document.querySelector("h3")
const username = document.getElementById("username")

const origin_user = localStorage.getItem("username")
if(origin_user != null){
    showName(origin_user)
}

function login(e) {
    e.preventDefault()
    const name = inputName.value
    localStorage.setItem("username", name)
    showName(name)
}

function showName(name) {
    welcome.classList.toggle("hidden")
    loginForm.classList.toggle("hidden")
    username.innerHTML = `${name}!`
}

loginForm.addEventListener("submit", login)