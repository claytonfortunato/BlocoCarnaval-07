import * as C from "./style";

const Main = () => {
  return (
    <C.Container>
      <C.BoxTitle>
        <h2>Blocos recomendados</h2>
        <C.BoxButton>
          <button className="button-list">Lista</button>
          <button>Mapa</button>
        </C.BoxButton>
      </C.BoxTitle>
      <div></div>
    </C.Container>
  );
};

export default Main;
