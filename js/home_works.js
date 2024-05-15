const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp = /^[a-z0-9._]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'адрес эл.почты сохронен'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'адрес эл.почты не правильный'
        gmailResult.style.color = 'red'
    }
}





const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (positionX < maxParentWidth && positionY <= 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX >=maxParentWidth && positionY < maxParentHeight ){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if (positionY >= maxParentHeight && positionX > 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX >= 0 && positionY > 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()



const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')

let addition = 0
let interval;
let isWorking = false
startButton.addEventListener('click', () => {
    if (!isWorking){
        isWorking = true
        const timer = setInterval(() => {
            addition++
            seconds.innerText = addition
        }, 1000)
        stopButton.addEventListener('click', () => {
            if (isWorking) {
                isWorking = false
                clearInterval(timer)
            }
        })
        resetButton.addEventListener( 'click', () => {
            if (isWorking) {
                isWorking = false
                clearInterval(timer)
            }
            addition = 0
            seconds.innerText = addition
        })
    }
})





