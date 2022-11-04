
let token;
// funcion para crear un nuevo usuario
async function createUser(username, email,password){
    const res = await fetch(`https://api.realworld.io/api/users`,{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                "username": username,
                "email": email,
                "password": password,
            }
        })
    });
    if(res.status >=200 && res.status < 300){
        console.log('usuario creado')
    }
    const data = await res.json()
    console.log(data);
}
//funcion para iniciar sesion
async function loginUser(email,password){
    const res = await fetch(`https://api.realworld.io/api/users/login`,{
        method :'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                "email": email,
                "password": password,
            }
        })
    })
    const data = await res.json();
    console.log(data);
    if (res.status == 200) {
        console.log('sesion iniciada');
        this.token=data.user.token;
        getArticleYourFeed(this.token);
    }
}
//funcion obtiene los articulos de las personas que sigue
async function getArticleYourFeed(token){
    console.log('your feed')
    const res= await fetch(`https://api.realworld.io/api/articles/feed?`+ new URLSearchParams({
        limit:20,
        offset:0,
    }),{
        method: 'GET',
        headers:  {
            Authorization: 'Token ' + token
                }
    })
    const data = await res.json();
    console.log(data);
}

//funcion obteien articulos globales
async function getArticleGlobally(){
    console.log('global feed')
    const res = await fetch('https://api.realworld.io/api/articles?limit=10&offset=0');
    const data = await res.json();
    console.log(data);
}
//funcion para obtener usuario
async function getUser(){
    const res = await fetch(`https://api.realworld.io/api/user`,
    {
        method: 'GET',
        headers: {
            Authorization: 'Token ' + this.token
        }
    })
    const data = await res.json();
    console.log(data);
}

async function followUser(){
    const res = await fetch(`https://api.realworld.io/api/profiles/Magda Parry/follow`,{
        method: 'POST',
        headers: {
            Authorization: 'Token ' + this.token
        }
    });
    const data = await res.json()
    console.log(data);
}
