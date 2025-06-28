class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header-container">
        <div>
            <a href="/"><img src="../assets/images/cda-logo.svg" alt="cda-logo"></a>
        </div>
        <div>
            <button type="button" class="icon-button" data-js-search-button>
                <span class="icon">search</span>
            </button>
            <button type="button" class="icon-button" data-js-navigation-button>
                <span class="icon">menu</span>
            </button>
        </div>

        <form action="/" class="search-form">
            <div>
                <button type="button" class="icon-button">
                    <span class="icon">close</span>
                </button>
            </div>
            <div class="search-form-input-container">
                <label for="search"></label>
                <input type="text" id="search" placeholder="Suchwort eingeben">

                <button type="submit" class="icon-button"><span class="icon">search</span>Search</button>
            </div>
        </form>

        <nav class="navigation-container">
            <div>
                <button type="button" class="icon-button">
                    <span class="icon">close</span>
                </button>
            </div>
            <ul>
                <li>
                    <a href="">Archiv</a>
                    <ul>
                        <li><a href="">Alle Werke</a></li>
                        <li><a href="">Gemälde</a></li>
                        <li><a href="">Archivalien</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Personen</a>
                    <ul>
                        <li><a href="">Lucas Cranach</a></li>
                        <li><a href="">Martin Luther</a></li>
                        <li><a href="">Über uns</a></li>
                        <li><a href="">Partner</a></li>
                    </ul>
                </li>
                <li><a href="">Forschung</a></li>
                <li><a href="">Aktuelles</a></li>
            </ul>
        </nav>
    </header>
    `;
  }
}
customElements.define('main-header', MainHeader);