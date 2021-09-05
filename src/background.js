const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"]

const chosenImg = imgs[Math.floor(Math.random()*imgs.length)]

const srcUrl = `img/${chosenImg}`

document.body.style.backgroundImage = `url(${srcUrl})`
document.body.style.backgroundSize = `100%`
document.body.style.backgroundRepeat = 'no-repeat'