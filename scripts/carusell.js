const carusellElement = document.querySelector('.slides-show-carusell')
const caruselImageContainer = document.querySelector('[data-js-img-container]')
const caruselCaption = document.querySelector('[data-js-caption]')
const carusellElementButtons = document.querySelectorAll('.carusell-button-container')
const activeCaruselNavs = document.querySelectorAll('[data-js-active-carusell]')

const contentData = [
    {
        img: "./assets/images/lucas-cranarch-slide-1.jpg",
        imgAltText: "lucas-cranarch-slide",
        title: "Lucas Cranach",
        content: "Lucas Cranach der Ältere verkörpert die Ideale eines Mannes im Zeitalter der Renaissance, der neben seiner Tätigkeit als Maler, Grafiker und  Buchdrucker auch als Politiker und Unternehmer tätig war."
    },
    {
        img: "./assets/images/lucas-cranarch-slide-2.jpg",
        imgAltText: "lucas-cranarch-slide",
        title: "Kritischer Katalog der Luther-Bildnisse (1519 - 1530)",
        content: "Ein von der Leibniz-Gemeinschaft gefördertes Forschungsprojekt, eine Kooperation des Germanischen Nationalmuseums in Nürnberg mit der Friedrich-Alexander-Universität Erlangen-Nürnberg und der TH Köln, hinterfragt die Authentizität der Luther-Bildnisse."
    },
    {
        img: "./assets/images/lucas-cranarch-slide-3.jpg",
        imgAltText: "lucas-cranarch-slide",
        title: "Interdisziplinär und inter­institutionell",
        content: "Das Cranach Digital Archive zeigt, dass Kooperation eine Horizonterweiterung in der Erfassung und Interpretation von Kunstwerken ermöglicht."
    }
]

let currentDataIndex = 0;
setCurrentContent(currentDataIndex)

carusellElementButtons[0].addEventListener('click',() => {
    carusellElement.classList.add('blur')
    removeLastCurrentNav(currentDataIndex)

    currentDataIndex === 2
    ? currentDataIndex = 0
    : currentDataIndex += 1

    setTimeout(() => {
        setCurrentContent(currentDataIndex)
        setCurrentNav(currentDataIndex)
        carusellElement.classList.remove('blur')
    }, 500)
})

carusellElementButtons[1].addEventListener('click',() => {
    carusellElement.classList.add('blur')
    removeLastCurrentNav(currentDataIndex)

    currentDataIndex === 0
    ? currentDataIndex = 2
    : currentDataIndex -= 1

     setTimeout(() => {
        setCurrentContent(currentDataIndex)
        setCurrentNav(currentDataIndex)
        carusellElement.classList.remove('blur')
    }, 500)
})

function setCurrentContent(index){
    caruselImageContainer.innerHTML = getCurrentImageHtmlElement(index)
    caruselCaption.innerHTML = getCurrentCaptionHtmlElement(index)
}

function getCurrentImageHtmlElement(index) {
    switch(index){
        case 0:
            return `
                <img src="${contentData[2].img}" alt="${contentData[2].imgAltText}">
                <img src="${contentData[1].img}" alt="${contentData[1].imgAltText}">
                <img src="${contentData[0].img}" alt="${contentData[0].imgAltText}">
            `
        case 1:
            return `
                <img src="${contentData[0].img}" alt="${contentData[0].imgAltText}">
                <img src="${contentData[2].img}" alt="${contentData[2].imgAltText}">
                <img src="${contentData[1].img}" alt="${contentData[1].imgAltText}">
            `

        case 2:
            return `
                <img src="${contentData[1].img}" alt="${contentData[1].imgAltText}">
                <img src="${contentData[0].img}" alt="${contentData[0].imgAltText}">
                <img src="${contentData[2].img}" alt="${contentData[2].imgAltText}">
            `
    }
}

function getCurrentCaptionHtmlElement(index) {
    return `
            <h2>${contentData[index].title}</h2>
            <p>${contentData[index].content}</p>
            <a href="">mehr erfahren</a>
        `
}

function setCurrentNav(index){
    activeCaruselNavs[index].setAttribute('id', 'active-carusell')
}

function removeLastCurrentNav(index){
    activeCaruselNavs[index].removeAttribute('id')
}
