const { URL_API } = require('./config');
const { ERRORES } = require('./errores');

const obtenerTodosLosUsuarios = async () => {
    const response = await fetch(URL_API + '/users');
    const usuarios = await response.json();
    console.log(usuarios)
    return usuarios;
}

const obtenerUsuarioPorId = async (id_usuario) => {
    try{
        const response = await fetch ( URL_API + `/users/${id_usuario}`);
        if(response.ok){
            throw ERRORES.FALLO_CRITICO_SERVIDOR
        }
        if(response.status === 404){
            console.error( 'Error: Usuario no encontrado')
            throw ERRORES.USUARIO_NO_ENCONTRADO
        }
        if(response.status === 500){
            throw ERRORES.ERROR_INTERNO_SERVIDOR
        }
        else {
        const usuario = await response.json();
        console.log(usuario)
        return usuario;
        }     
    }
    catch(error){
        console.log(error)
        // throw error
    }
};

obtenerUsuarioPorId(1)

const prueba = (condicion) =>{
    if(condicion){
        console.log('todo esta bien')
    }
    else{
        throw {message:'nada esta bien', code: 1}
    }
}

const verificarEdad = async (edad) =>{
    try{
        if(edad >= 18 && edad <= 60){
            console.log('edad correcta')
            const usuario = await obtenerUsuarioPorId(100)
        }
        else{
            throw {message: 'Edad invalida', code: 2}
        }
    }
    catch(error){
        throw error
    }
}


const ejecutarFunciones = async () => {
    try{
        prueba(true)
        verificarEdad(30)
        console.log('Hola desde un try')
    }
    catch(objeto_error){
        console.error('Error: CODE ' + objeto_error.code + ' ' + objeto_error.message)
    }
}

