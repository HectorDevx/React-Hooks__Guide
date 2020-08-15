import React, { Component } from "react";
import TarjetaFruta from "../../concepts/TarjetaFruta";

class State extends Component {
  render() {
    return (
      <div>
        <TarjetaFruta name="Sandia" price="3" />
        <TarjetaFruta name="Platano" price="5" />
      </div>
    );
  }
}

export default State;
