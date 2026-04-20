## Descripción
Est tarea fue realizada utilizando React en una app llamada Visual Studio Code. La aplicación permite cambiar entre modo claro y modo oscuro mediante un botón, utilizando el hook useState.

## Tecnologías utilizadas
- React
- JavaScript
- CSS

## Funcionalidades
- Cambio entre modo claro y oscuro usando un boton rosado
- Uso del hook useState
- Manejo de eventos con onClick
- Separación en componentes

## Componentes principales
### `App.jsx`
Es el componente principal de la aplicación.  
Su función es:
- manejar el estado del tema (`modoOscuro`)
- contiene la lógica del botón
### `TarjetaTema.jsx`
Es el componente secundario.Parte de la rubrica de evaluación
Su función es:
- mostrar el contenido visual de la tarjeta
- mostrar el botón
- recibir por props el estado y la función para cambiar el tema
## Flujo de la aplicación
1. La aplicación inicia en modo claro
2. El componente `App.jsx` guarda el estado usando `useState`.
3. Ese estado se envía al componente `TarjetaTema`.
4. Cuando el usuario hace clic en el botón, se ejecuta la función `cambiarModo`.
5. El estado cambia y la clase del contenedor también cambia.
6. Gracias a eso, se actualizan los estilos visuales de la aplicación.

## Decisiones de diseño
- Elegí una interfaz simple para ir familiarizandome con los conceptos y facilitar la comprensión de lo que me estaban solicitando. Tiene un fondo, una tarjeta con un título, un texto y un boton cuyo código extraje de ejemplo de w3 school y edite el color en el css a un rosado por gusto personal.
-Use colores opuestos, el modo claro un fondo blanco y el oscuro en gris medio, fui probando en el css color por color con background
- Se separó la tarjeta en un componente aparte para cumplir con la estructura de componentes pedida en la pauta.
- Se utilizó CSS externo para mantener más ordenado el código y separar la lógica de la presentación, además de ser un requisito solicitado en la pauta.

## Instalación y ejecución de la tarea:
1.Clonar o descargar el repositorio.
2.Abrir la carpeta del proyecto en Visual Studio Code.
3.Instalar las dependencias con el siguiente comando:
npm install
Ejecutar el proyecto con:
npm run dev
Abrir en el navegador la dirección que sale ahí que en mi tarea fue:
http://localhost:5173
