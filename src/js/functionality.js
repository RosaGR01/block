
function toShowYourFeed(){
    let option1 = document.getElementById('yourFeed');
    let option2 = document.getElementById('globalFeed');
    option1.classList.add('active');
    option2.classList.remove('active');

    let conainer = document.getElementById('container-main');
    let template = document.getElementById('your-feed').content;
    let clone = template.content.cloneNode(true);
    conainer.appendChild(clone);
}
function toShowGlobalFeed(){
    let option1 = document.getElementById('yourFeed');
    let option2 = document.getElementById('globalFeed');
    option2.classList.add('active');
    option1.classList.remove('active');

    let conainer = document.getElementById('container-main');
    let template = document.getElementById('global-feed').content;
    let clone = template.cloneNode(true);
    conainer.appendChild(clone);

}



