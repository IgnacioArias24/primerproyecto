const URL_API = 'https://jsonplaceholder.typicode.com/'

const obtenerTodosLosUsuarios = async () => {
    const response = await fetch(URL_API + '/users', {
        method: 'GET'
    } )
    if(response.status == 200){
        console.log('todo joya pa')
        const data = await response.json()
        console.log(data)
    }
}

obtenerTodosLosUsuarios()
