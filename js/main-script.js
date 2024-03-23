let backgroundMusic = new Audio ("./audio/melodyloops-preview-vibe-of-success-2m30s.mp3")

let tlacitkoPlay = document.querySelector(".play")
tlacitkoPlay.addEventListener("click", () => {
    backgroundMusic.loop = true
    backgroundMusic.play()
})

let tlacitkoPause = document.querySelector(".pause")
tlacitkoPause.addEventListener("click", () => {
    backgroundMusic.pause()
})
