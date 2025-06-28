const searchButton = document.querySelector('[data-js-search-button]');
const searchFormElement = document.querySelector('.search-form');

searchButton.addEventListener('click', () => {
    searchFormElement.classList.add('is-active');
})

searchFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = event.target[1].value.trim();
    console.log(`Search: ${inputValue}`);
    searchFormElement.classList.remove('is-active');
})

const closeSearchFormElementButton = searchFormElement.firstElementChild;

closeSearchFormElementButton.addEventListener('click', () => {
    searchFormElement.classList.remove('is-active');
})
