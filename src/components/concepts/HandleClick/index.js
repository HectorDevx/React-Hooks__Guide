import React, { Component } from "react";

// Estilos en línea
const styles = {
  height: "200px",
  background: "gold",
  padding: "1em",
  borderSizing: "border-box",
};

class HandleClick extends Component {
  // Inicializamos estado.
  state = {
    x: 0,
    y: 0,
  };

  // Recibimos el evento y actualizamos con él el estado.
  manejador = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      // Evento donde el mouse se mueve y mostramos la posición.
      <div style={styles} onMouseMove={this.manejador}>
        <div>x: {this.state.x}</div>
        <div>y: {this.state.y}</div>
      </div>
    );
  }
}

export default HandleClick;
