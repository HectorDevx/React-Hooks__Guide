import React, { Component } from "react";

class EventNative extends Component {
  // Prevenir el comportamiento natual de un evento. Evento Sintético de React
  manejador = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* Cuando vamos al enlace normalmente, se crea un evento nativo del DOM */}
        <a href="https://google.com" onClick={this.manejador}>
          GOOGLE
        </a>
      </div>
    );
  }
}

export default EventNative;
