import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Header extends LitElement{
    constructor(){
        super();
    }
    render(){
        return html`
        <script src="https://kit.fontawesome.com/5727e4232e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../componets/componet-header/header.css">
        <header class="container-header">
        <p class="container-header__p"> <span class="gft"> GFT </span>
            <img src="../../assets/icons/flecha_derecha.png" alt="">
                Sharing knowledge
        </p>
        </header>
        `;
    }
}
customElements.define('componet-header',Header);