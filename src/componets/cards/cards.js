// import {LitElement, css, html} from 'lit';
import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
export class Cards extends LitElement{
    constructor(){
        super();
        this.heart = 'container-like';
        this.like = 1;
        this.icon = 'blue';
    }
    static properties ={
        heart:{},
        like:{}
    }
    render() {
        if(this.heart=='love'){
        this.icon = 'white';
        }
        return html`
        <link rel="stylesheet" href="../componets/cards/cards-styles.css">
                <article class="container-cards">
                <header>
                    <div class="container-info__perfil">
                        <img class="info-perfil__img" src="../../assets/img/perfil.png" alt="">
                        <div class="info-perfil-texto">
                            <h2 class="info-perfil__name">Itzel Segura</h2>
                            <p class="info-perfil__date">October 17, 2022</p>
                        </div>
                        <div class="${this.heart}">
                            <div class="icon-like-img ${this.icon}"></div>
                            <h1 class="counter-like_num">${this.like}</h1>
                        </div>
                    </div>
                </header>
                <div class="container-text">
                    <h2 class="container-text__h2">Title here, title here title here</h2>
                    <p class="container-text__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...</p>
                </div>
                <footer class="container-footer">
                    <p>QA</p>
                    <p>Implementations</p>
                    <p>Welcome</p>
                </footer>
            </article>
        `;
    }
}
customElements.define('article-cards',Cards);