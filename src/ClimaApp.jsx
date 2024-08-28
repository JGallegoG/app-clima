import { useState } from "react"


export const ClimaApp = () => {

    //url para peticion

    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'CREATE YOU API_KEY'
    const kelvin = 273

    //Controlar de estado de las ciudades y del clima

    const [ciudad, setCiudad] = useState('')

    const [dataClima, setDataClima] = useState(null);

    //Método para el cambio de ciudad
    
    const handdleCiudad = (e) => {
        setCiudad(e.target.value)
        console.log(e.target.value)
    }

    // Controlar el formulario

    const onSubmit = (e) => {
        e.preventDefault()
        // realizamos la llamada a clima
        if(ciudad == '') return
        getClima()
        setCiudad('')

    }

    // boton borrar búsqueda
    const borrarCiudad = () =>{
        setDataClima(null)
    }

    //llamada a la api 
    const getClima = async () => {
        try {
            const response = await fetch(`${url}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error('Se ha producido un error en la consulta del clima', error)
        }

    }


  return (
    <section className="container">
        <h1 className="titulo">¿QUÉ TIEMPO HACE AHORA EN ...?</h1>
        <h3 className="txt">Introduce el nombre de una ciudad.</h3>
            <form className="form" onSubmit={onSubmit}>
                <input
                type="text" 
                placeholder="Nombre de la ciudad"
                value={ciudad}
                onChange={handdleCiudad}
                />
                <button className="btn" type="submit">Buscar</button>
                <button className="btn btn_res" onClick={borrarCiudad}>Reset</button>

            </form>

            {
                dataClima && (
                    <div className="container_info">
                        <h2 className="titulo">{dataClima.name}</h2>
                        <h4 className="temp">{parseInt(dataClima.main.temp - kelvin)}º</h4>
                        <h4 className="desc">Nubosidad: {dataClima.weather[0].description}</h4>
                        <h4 className="max-min">Max: {parseInt(dataClima.main.temp_max - kelvin)}º Min: {parseInt(dataClima.main.temp_min - kelvin)}º</h4>
                        <h4 className="pres">Pres-atm: {dataClima.main.pressure} Milibares </h4>
                        <h4 className="hum">Humedad: {dataClima.main.humidity} %</h4>
                        <h4 className="lat">Latitud: {dataClima.coord.lat} Longitud: {dataClima.coord.lon}</h4>
                        <h4 className="wind">Velocidad del viento: {dataClima.wind.speed} m/s</h4>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />

                    </div>
                )
            }

    </section>
    
  )
}
