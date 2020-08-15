import React, { Component } from "react";

class Contador extends Component {
  // Declaramos el estado con un objeto.
  state = {
    video: {
      title: "Super video",
      likes: 0,
    },
  };

  // Método que muta el estado.
  add = () => {
    this.setState((state) => ({
      video: {
        // Operador spread.
        ...state.video,
        likes: this.state.video.likes + 1,
      },
    }));
  };

  // Componente
  render() {
    return (
      <div>
        <h3>{this.state.video.title}</h3>
        <button onClick={this.add}>Likes: ({this.state.video.likes})</button>;
      </div>
    );
  }
}

export default Contador;
