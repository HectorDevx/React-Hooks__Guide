import React, { Component } from "react";

const Saludo = (props) => {
  // Renderizado condicional con un if ternario
  return (
    <div>
      {/* Renderiza el nombre si la propiedad Existe */}
      <div>{props.name && <strong>{props.name}</strong>}</div>

      {props.saluda ? (
        <h1>Hola, tu eres genial</h1>
      ) : (
        <p>Ups, no hay saludos para ti!</p>
      )}
    </div>
  );

  // Renderizado condicional con un if
  // if (props.saluda) {
  //   return <h1>Hola, tu eres genial</h1>;
  // }
  // return <p>Ups, no hay saludos para ti!</p>;
};

class RenderizadoCondicional extends Component {
  render() {
    return (
      <div>
        <Saludo saluda={false} name="Héctor" />
      </div>
    );
  }
}

export default RenderizadoCondicional;
