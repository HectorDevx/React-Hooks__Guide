import React, { Component } from "react";

export const Gato = (props) => (
  <div>
    <h1>Gato</h1>
    {/* Recibimos las props y las transformamos en un JSON */}
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
);
