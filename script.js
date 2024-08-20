const contentPrincipal = document.querySelector('.contentPrincipal')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

const cursorMove = () => {
    contentPrincipal.classList.toggle('hover-change')
}

left.addEventListener('mousemove', () => 
cursorMove('left')
)

right.addEventListener('mousemove', () => 
    cursorMove('right')
)