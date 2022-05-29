let yesSir, personCard

window.onload = function () {
    yesSir = new Audio()
    yesSir.src = 'sound/oh-yes-sir.mp3'

    personCard = document.getElementById('card_view')
    personCard.addEventListener('click', () =>
        yesSir.play()
    )
}

// Fetch Api. Load and show current weather in Astana

function geoChange(pos) {
    posLat = pos["coords"]["latitude"];
    posLong = pos["coords"]["longitude"];
    console.log(posLat);
    console.log(posLong);
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+posLat+"&lon="+posLong+"&appid=dfbb827f92b086f77e80a13de30ca008")
    .then(content => content.json())
    .then(data => {
        $("#weather").text("Weather in your city: " + data["main"]["temp"] + "°F.")
    })
    .catch(err => console.log(err))
}




