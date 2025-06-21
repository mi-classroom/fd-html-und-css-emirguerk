document.querySelector('[data-js-menu-button]').addEventListener('click', () => {
    document.querySelector('[data-js-header-nav]').classList.add('is-active')
})

document.querySelector('nav [data-js-close-button]').addEventListener('click', () => {
    document.querySelector('[data-js-header-nav]').classList.remove('is-active')
})

document.querySelector('[data-js-searach-button]').addEventListener('click', () => {
    document.querySelector('[data-js-header-search]').classList.add('is-active')
})

document.querySelector('form [data-js-close-button]').addEventListener('click', () => {
    document.querySelector('[data-js-header-search]').classList.remove('is-active')
})

document.querySelector('[data-js-header-search]').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`Search: ${event.target[1].value}`)
    document.querySelector('[data-js-header-search]').classList.remove('is-active')
})
