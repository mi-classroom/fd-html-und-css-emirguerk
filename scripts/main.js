document.querySelector('[data-js-menu-button]').addEventListener('click', () => {
    document.querySelector('[data-js-header-nav]').classList.add('is-active')
})

document.querySelector('nav [data-js-close-button]').addEventListener('click', () => {
    document.querySelector('[data-js-header-nav]').classList.remove('is-active')
})
