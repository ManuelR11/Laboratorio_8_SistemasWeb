import React from "react";
import "./indice.css";

export default function Indice(props) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header>
      <div id="indice">Juego de Cartas</div>
      <div id="Try">Intentos: {props.count}</div>
      <button onClick={handleRefresh}>Actualizar</button>
    </header>
  );
}




/*import React from "react";
import "./indice.css";

export default function Indice(props) {
  return (
    <header>
      <div id="indice">Juego de Cartas</div>
      <div id="Try">Intentos: {props.count}</div>
    </header>
  );
}*/