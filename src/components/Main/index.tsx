import React from "react";

import * as C from "./style";

const Main = () => {
  return (
    <C.Container>
      <C.BoxTitle>
        <h2>Blocos recomendados</h2>
        <C.BoxButton>
          <button>Lista</button>
          <button>Mapa</button>
        </C.BoxButton>
      </C.BoxTitle>
    </C.Container>
  );
};

export default Main;
