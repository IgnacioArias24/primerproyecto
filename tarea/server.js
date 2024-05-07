const URL_API = 'https://jsonplaceholder.typicode.com/'

const obtenerTodosLosUsuarios = async () => {
    const response = await fetch(URL_API + '/users');
    const usuarios = await response.json();
    console.log(usuarios)
    return usuarios;
}

const obtenerUsuarioPorId = async (id_usuario) => {
    const response = await fetch ( URL_API + `/users/${id_usuario}`);
    console.log(response)
    const usuario = await response.json();
    console.log(usuario)
    return usuario;
}


// obtenerTodosLosUsuarios()
obtenerUsuarioPorId(4)