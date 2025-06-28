const menuButton = document.querySelector('[data-js-navigation-button]');
const naviagationElement = document.querySelector('.navigation-container')

menuButton.addEventListener('click', () => {
    naviagationElement.classList.add('is-active')
})

const closeNaviagationElementButton = naviagationElement.firstElementChild

closeNaviagationElementButton.addEventListener('click', () => {
    naviagationElement.classList.remove('is-active')
})