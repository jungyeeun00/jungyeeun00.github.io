const API_KEY = "5287968adace99aa40cba5ee0d91cfc5"

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        
        weather.innerHTML = `${data.name}`
        city.innerHTML = `${data.main.temp}°C, ${data.weather[0].main}`
    })
}

function onGeoErr() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)