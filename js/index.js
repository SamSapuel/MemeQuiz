let woo, landing
window.onload = function () {

    woo = new Audio()
    woo.src = 'sound/woo.mp3'

    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);

    let headerIcon = document.getElementsByClassName('quiz#1')
    headerIcon.addEventListener('click', () => {
        woo.volume = 1
        woo.play()
    })

    landing = document.getElementById('main_section')

}

window.addEventListener('load', () => {
    console.log(navigator.onLine)

    window.addEventListener('online', () => {
        console.log("We are online!")
    })

    window.addEventListener('We are offline!', () => {
        console.log(false)
    })
})

function hasNetwork(status) {
    const element = document.querySelector('.landing')

    if (status) {
        element.classList.add()
    }
}

