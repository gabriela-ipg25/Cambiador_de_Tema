function TarjetaTema({ modoOscuro, cambiarModo }) {
    return (
      <section className="tarjeta">
        <h1>Cambio de tema</h1>
  
        <p>
          Esta aplicación permite cambiar entre modo claro y oscuro utilizando
          React y useState.
        </p>
  
        <button onClick={cambiarModo}>
          Cambiar a {modoOscuro ? "modo claro" : "modo oscuro"}
        </button>
      </section>
    );
  }
  
  export default TarjetaTema;