const scoreText = document.getElementById("scoreText")
const playBtn = document.getElementById("playBtn")
const player = document.getElementById("player")
const cube = document.getElementById("cube")

let score = 0

function jump() {
    if (!player.classList.contains("jumping")) {
       player.classList.add("jumping")
       setTimeout(function(){
        player.classList.remove("jumping")
       }, 500) 
    }
}

document.addEventListener("click", jump)
document.addEventListener("keydown", function(input){
    if (input.code === "Space") {
        jump()
    }
})


function colliding() {
    const playerRect = player.getBoundingClientRect()
    const cubeRect = cube.getBoundingClientRect()

    return (
        playerRect.left < cubeRect.right &&
        playerRect.right > cubeRect.left &&
        playerRect.top < cubeRect.bottom &&
        playerRect.bottom > cubeRect.top
    )
}

function gameLoop() {
    if (colliding()) {
        player.style.animation = "none"
        cube.style.animation = "none"
        scoreText.innerText = "GAME OVER! Score: " + score
        return
    }
    score++
    scoreText.innerText = "Score: " + score
    requestAnimationFrame(gameLoop)
}

playBtn.addEventListener("click", function(){
    playBtn.style.visibility = "hidden"
    cube.classList.add("sliding")
    gameLoop()
})
