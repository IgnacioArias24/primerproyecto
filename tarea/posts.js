// const {URL_API} = require('./config');

const obtenerTodosLosPosteos = async () =>{
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts
}

console.log(obtenerTodosLosPosteos())