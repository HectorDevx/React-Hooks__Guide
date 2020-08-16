import React, { Component } from "react";

class Input extends Component {
  // Inicializamos estado
  state = {
    text: "",
    evento: "",
  };

  // Recuperamos el estado para utilizarlo en el método.
  manejador = (event) => {
    // Accedemos al valor del input.
    console.log(event.target.value);
    // Actualizamos el estado.
    this.setState({
      text: event.target.value,
      evento: event.type,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.manejador} />
        {/* Mostramos en tiempo real el valor que tipea el usuario. */}
        <h1>{this.state.text}</h1>
        <h2>{this.state.evento}</h2>
      </div>
    );
  }
}

export default Input;
