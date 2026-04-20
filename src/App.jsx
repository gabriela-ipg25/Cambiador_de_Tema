import { useState } from "react";
import "./App.css";
import TarjetaTema from "./components/TarjetaTema";

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <main className={modoOscuro ? "app oscuro" : "app claro"}>
      <TarjetaTema 
        modoOscuro={modoOscuro}
        cambiarModo={cambiarModo}
      />
    </main>
  );
}

export default App;