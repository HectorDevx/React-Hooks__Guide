import React, { Component } from "react";

// Recibimos las props del componente. Desestructurando la referencia a las props.
const Title = ({ uiColor, children }) => {
  const styles = {
    padding: "0.3em",
    color: "white",
    // De las props sacamos el UI color.
    background: uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };

  // La propiedad children hace referencia a los elementos hijos de componente.
  console.log(children);

  // Retornamos los estilos y los elementos hijos.
  return <h1 style={styles}>{children}</h1>;
};

// Componente de clase que llama al componente funcional.
class PropChildren extends Component {
  state = {
    uiColor: "red",
  };

  render() {
    // Desestructuramos la referencia al estado.
    const { uiColor } = this.state;
    return (
      <div>
        {/* Se le da por props los estilos y se envía el children también como props.  */}
        <Title uiColor={uiColor}>
          Super <em>Pro</em>
        </Title>
      </div>
    );
  }
}

export default PropChildren;
