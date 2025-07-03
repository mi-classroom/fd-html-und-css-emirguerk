function fetchNumberInfos(){
    const url = 'https://gist.githubusercontent.com/vschaefer/46e180980323be8024994d51bd239e68/raw/af14fcefec9e4df00bed1f5ad284aafae7213903/specs.json'
    const numberInfosContainer = document.querySelector('.number-info-container')

    try{
        const promise = fetch(url);
        const promiseJson = promise.then((promiseJsonData) => promiseJsonData.json())
        promiseJson.then((promiseData) => {
            promiseData.results.forEach((data, index) => {
                const {icon, name, count} = data
                numberInfosContainer.innerHTML += `
                        <figure style="grid-column: span 2; grid-row: span ${index == 0 ? 2 : 0};">
                            <div><span class="icon">${icon}</span></div>
                            <figcaption>
                                <dt>${new Intl.NumberFormat("de-DE").format(count)}</dt>
                                <dd>${name}</dd>
                            </figcaption>
                        </figure>
                `
                
            })
            
        })
    } catch(error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNumberInfos()
})