const clock = document.querySelector("h1#clock")

function updateTime() {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")
    const sec = String(date.getSeconds()).padStart(2, "0")
    clock.innerHTML = `${hour} : ${min} : ${sec}`
}

updateTime()
setInterval(updateTime, 1000)