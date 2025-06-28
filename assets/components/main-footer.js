class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer-container">
        <div>
            <img src="../assets/images/cda-logo.svg" alt="cda-logo">
        </div>

        <div>
            <h3>Allgemeines</h3>
            <ul>
                <li><a href="">Impressum</a></li>
                <li><a href="">Leitfaden</a></li>
                <li><a href="">Nutzungsbedingungen</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </div>
        <div>
            <h3>Entdecken</h3>
            <ul>
                <li><a href="">Lucas Cranach</a></li>
                <li><a href="">Luther</a></li>
                <li><a href="">Über uns</a></li>
                <li><a href="">Aktuelles</a></li>
                <li><a href="">Partner</a></li>
                <li><a href="">Forschung</a></li>
            </ul>
        </div>

        <div>
            <h3>Kontakt</h3>
            <p>Haben Sie Fragen oder Anregungen? Kontaktieren Sie uns ganz einfach über folgenden Link:</p>
            <a href="">Zum Kontaktformular</a>
        </div>

        <div>
            <p>Stiftung Museum Kunstpalast, Düsseldorf / Technische Hochschule Köln, 2025</p>
        </div>
    </footer>
        `
    }
}
customElements.define('main-footer', MainFooter)