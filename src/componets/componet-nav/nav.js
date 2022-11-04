import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
export class Nav extends LitElement{
    constructor(){
        super();
    }
    render(){
        return html`
        <link rel="stylesheet" href="../componets/componet-nav/nav.css">
        <nav>
        <div class="container-nav__icon">
        <img src="../../assets/icons/Minus.png" alt="">
        </div>
        <div class="container-nav__text">
            <div class="nav-contaier">
                <img src="../../assets/icons/Subtract.png" alt="">
                <p>Sharing knowledge</p>
            </div>
        </div>
    </nav>
        `;
    }
}
customElements.define('componet-nav',Nav)