import React, { Component } from "react";

class PersistenciaEventos extends Component {
  // Declaramos el estado.
  state = {
    color: "blue",
  };

  // Método para manejar el cambio de color del value del input.
  handleChange = (event) => {
    const color = event.target.value;
    this.setState((state) => ({
      color,
    }));
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {/* Accedemos al estado para cambiar el color del estilo en línea. */}
        <h1 style={{ color: this.state.color }}>
          Soy de Color: {this.state.color}
        </h1>
      </div>
    );
  }
}

export const ConservarEventos = () => (
  <div>
    <h2> Persistencia de Eventos </h2>
    <PersistenciaEventos />
  </div>
);
