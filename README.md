

# Aplicación del tiempo

## Descripción

 Se trata de una aplicación web desarrollada con React que permite a los usuarios obtener información meteorológica actualizada en tiempo real de cualquier ciudad del mundo. La aplicación consume la API externa de [OpenWeatherMap](https://home.openweathermap.org) para proporcionar datos precisos sobre la temperatura, humedad, presión atmosférica, condiciones del cielo, y más.

## Características

- **Búsqueda de ciudades:** Los usuarios pueden buscar la información del clima de cualquier ciudad simplemente ingresando su nombre.
- **Datos en tiempo real:** La aplicación muestra la información meteorológica actualizada al instante utilizando la API de OpenWeatherMap.
- **Interfaz amigable:** Un diseño limpio y responsivo que asegura una experiencia de usuario óptima en dispositivos móviles y de escritorio.

## Tecnologías utilizadas

- **React:** Librería de JavaScript utilizado para construir la interfaz de usuario.
- **API de OpenWeatherMap:** Fuente de datos meteorológicos externos.
- **CSS:** Para el diseño y la disposición de los elementos en la aplicación.
- **Fetch:** Para la realización de peticiones HTTP a la API.

## Configuración e instalación
---
![Vista previa clima app](/src/assets/clima-app.png)
---

## Configuración e instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git@github.com:JGallegoG/aplicacion-clima-react.git

2. Instala las dependencias:
    ```bash
    npm install


3. Configura tu clave API de OpenWeatherMap:

    Crea una cuenta en OpenWeatherMap y obtén una clave API.

    Crea un archivo .env en la raíz del proyecto y añade tu clave API:

        REACT_APP_WEATHER_API_KEY=tu_clave_api


4. Inicia la aplicación en modo de desarrollo:
    ```bash
    npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

