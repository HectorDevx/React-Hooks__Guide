import React, { Fragment } from "react";

import "./components/concepts/Desestructuración/desestructuración.js";

import State from "./components/containers/State";
import Contador from "./components/containers/Contador";
import { Gato } from "./components/containers/Props";
import HandleClick from "./components/concepts/HandleClick";
import Input from "./components/concepts/Input";
import EventNative from "./components/concepts/EventNative";
import { ConservarEventos } from "./components/concepts/ConservarEventos";
import EventosPersonalizados from "./components/concepts/EventosPersonalizados";
import RenderizadoCondicional from "./components/concepts/RenderizadoCondicional";
import PropChildren from "./components/concepts/PropChildren";

export const App = () => {
  const otrosDatos = {
    raza: "Americano",
    peleas: 23,
  };

  return (
    <Fragment>
      <State />
      <Contador />
      <Gato name="Garfield" age="2 años" {...otrosDatos} />
      <HandleClick />
      <Input />
      <EventNative />
      <ConservarEventos />
      <EventosPersonalizados />
      <RenderizadoCondicional />
      <PropChildren />
    </Fragment>
  );
};
