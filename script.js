//const contentPrincipal = document.querySelector('.contentPrincipal')
const left = document.querySelector('.left')
const right = document.querySelector('.right')


left.addEventListener('mouseenter', () => {
    left.classList.add('hover-change');
    right.classList.remove('hover-change'); // Asegúrate de que el otro lado no esté expandido
});

right.addEventListener('mouseenter', () => {
    right.classList.add('hover-change');
    left.classList.remove('hover-change'); // Asegúrate de que el otro lado no esté expandido
});

left.addEventListener('mouseleave', () => {
    left.classList.remove('hover-change');
});

right.addEventListener('mouseleave', () => {
    right.classList.remove('hover-change');
});