
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
    const data = await res.json()
    if (res.status == 200) {
        console.log('iniciando sesion');
        getArticleYourFeed(data.user.token)
    }
    console.log(data);
}
async function getArticleYourFeed(token){
    console.log(token);
    const res= await fetch(`https://api.realworld.io/api/articles/feed`+ new URLSearchParams({
        limit:20,
        offset:0,

    }),{
        method: 'GET',
        headers:  {
                'accept':' application/json',
                'Authorization': token
                }
    })
    const data = await res.json();
    console.log(data);
}
async function getArticleGlobally(){
    const res = await fetch('https://api.realworld.io/api/articles?limit=10&offset=0');
    const data = await res.json();
    console.log(data);
}

