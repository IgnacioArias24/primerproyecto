const {URL_API} = require('./config');

const obtenerTodosLosPosteos = async () =>{
    const response  = await fetch(URL_API + '/posts');
    const posts = await response.json();
    console.log(posts)
    return posts
}


const obtenerPosteoPorId = async (id_post) =>{
    const response = await fetch(URL_API + `/posts/${id_post}`);
    const post = await response.json();
    console.log(post)
    return post
}

const obtenerComentariosDePosteoPorId = async (id_post) =>{
    const response = await fetch(URL_API + `/comments/${id_post}`);
    const comentarios = await response.json();
    console.log(comentarios)
    return comentarios
}


const obtenerListadoDeEmailsDeLosComentarios = async (id_post) =>{
   const comentarios = await obtenerComentariosDePosteoPorId(id_post)
   const emails = comentarios.map(comentario => comentario.email)
   console.log(emails)
}

// obtenerTodosLosPosteos()
// obtenerPosteoPorId(5)
// obtenerComentariosDePosteoPorId(4)
obtenerListadoDeEmailsDeLosComentarios(1)