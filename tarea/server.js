const URL_API = 'https://jsonplaceholder.typicode.com/'

const obtenerTodosLosUsuarios = async () => {
    const response = await fetch(URL_API + '/users');
    const usuarios = await response.json();
    return usuarios;
}

obtenerTodosLosUsuarios()

const obtenerUsuarioPorId = async (id_usuario) => {
    const response = await fetch('obtenerTodosLosUsuarios$(id)', {
        method: 'GET'
    })
    if(response.id){
        const data = await response.json()
        console.log(data)
    }
}

obtenerUsuarioPorId()
