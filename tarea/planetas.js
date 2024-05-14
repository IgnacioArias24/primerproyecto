const URL_API = 'https://swapi.dev/api'

class CustomError{
    constructor (mensaje, nombre, codigo){
        this.mensaje = mensaje,
        this.nombre = nombre,
        this.codigo = codigo
    }
}
const Error={
    PLANETA_NO_ENCONTRADO : new CustomError('Error, planeta no encontrado', `${nombre}`, 2),
    ERROR_INTERNO_DEL_SERVIDOR : new CustomError('Error interno del servidor',`${nombre}`,1)
}

const buscarPlanetaPorIdPlaneta = async (id_planeta) =>{
    try{
        const response = await fetch( URL_API + `planets/${id_planeta}`);
        if(response.ok){
            throw Error.ERROR_INTERNO_DEL_SERVIDOR
        }
        if(response === 404){
            throw Error.PLANETA_NO_ENCONTRADO
        }
        const planeta = await response.json();
        console.log(planeta)
    }
    catch(error){
        console.log(error)
    }
}

buscarPlanetaPorIdPlaneta(1)
