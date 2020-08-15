import React, { Fragment } from "react";

import State from "./components/containers/State";
import Contador from "./components/containers/Contador";

export const App = () => {
  return (
    <Fragment>
      <State />
      <Contador />
    </Fragment>
  );
};
