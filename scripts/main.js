// Menu Navigation
const navigationMenuButton = document.querySelector('[data-js-menu-button]');
const navigationCloseButton = document.querySelector('nav [data-js-close-button]');
const navigationMenuClassList = document.querySelector('[data-js-header-nav]').classList

navigationMenuButton.addEventListener('click', () => {
    navigationMenuClassList.add('is-active')
})

navigationCloseButton.addEventListener('click', () => {
    navigationMenuClassList.remove('is-active')
})

// Search Form
const searchFormButton = document.querySelector('[data-js-searach-button]');
const searchFormCloseButton = document.querySelector('form [data-js-close-button]');
const searchForm = document.querySelector('[data-js-header-search]');
const searchFormClassList = searchForm.classList;

searchFormButton.addEventListener('click', () => {
    searchFormClassList.add('is-active');
});

searchFormCloseButton.addEventListener('click', () => {
    searchFormClassList.remove('is-active');
});

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = event.target[1].value.trim();
    console.log(`Search: ${inputValue}`);
    searchFormClassList.remove('is-active');
});

// Page Navigation
const pageNavigationHeaders = document.querySelectorAll('[data-js-page-navigation-section] > h2');
const pageNavigation = document.querySelector('[data-js-page-navigation-nav] > ul');

pageNavigationHeaders.forEach((headerElement) => {
    const headerId = headerElement.textContent.toLocaleLowerCase().trim().replaceAll(" ", "-");
    headerElement.parentElement.setAttribute('id', `${headerId}`);
    pageNavigation.innerHTML += `
        <li class="page-navigation-container"><a class="page-navigation-item" href="#${headerId}">${headerElement.textContent}</a></li>
    `
});
