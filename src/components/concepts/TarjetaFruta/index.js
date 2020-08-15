import React, { Component } from "react";
import "./TarjetaFruta.css";

// Ejemplo del estado en un componente.
class TarjetaFruta extends Component {
  constructor() {
    super();

    // Añadimos el Bind para apuntar el this a la clase y no a la función.
    const METHODS = ["agregar", "quitar", "limpiar"];

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this);
    });

    //Definimos el estado.
    this.state = {
      cantidad: 0,
    };
  }

  // Métodos que utilizamos para incrementar, decrementar y reiniciar la cantidad.
  agregar() {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  }

  quitar() {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  }

  limpiar() {
    this.setState({
      cantidad: 0,
    });
  }

  // Componente
  render() {
    const hasItems = this.state.cantidad > 0;
    const clases = `TarjetaFruta ${hasItems ? "TarjetaFruta-activa" : ""}`;

    return (
      <div className={clases}>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr />
        <p>$ {this.state.price}</p>
        <p>Total: $ {this.props.price * this.state.cantidad}</p>
      </div>
    );
  }
}

export default TarjetaFruta;
