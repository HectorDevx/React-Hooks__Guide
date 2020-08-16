import React, { Component } from "react";
import "./styles.css";

// Componente Hijo
class Hijo extends Component {
  // Método personalizado para el evento del botón.
  manejadorClick = () => {
    this.props.onSaluda("Héctor");
  };

  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        <button onClick={this.manejadorClick}>Saludar</button>
      </div>
    );
  }
}

// Componente Padre
class EventosPersonalizados extends Component {
  state = {
    name: "",
  };

  // Método para actualizar el estado.
  manejador = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="box red">
        {/* Pasa como props un evento personalizado. */}
        <Hijo onSaluda={this.manejador} />
        <h1>Nombre: {this.state.name}</h1>
      </div>
    );
  }
}

export default EventosPersonalizados;
