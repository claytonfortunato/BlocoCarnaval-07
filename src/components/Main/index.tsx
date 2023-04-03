import { Blocos } from "../../data/blocos";

import Card from "../Card";

import * as C from "./style";

const Main = () => {
  return (
    <C.Section>
      <C.Container>
        <C.BoxTitle>
          <h2>Blocos recomendados</h2>
          <C.BoxButton>
            <button className="button-list">Lista</button>
            <button>Mapa</button>
          </C.BoxButton>
        </C.BoxTitle>
        <C.ContainerCard>
          {Blocos.map((item, index) => (
            <Card
              key={index}
              Image={item.image}
              title={item.title}
              description={item.description}
              city={item.city}
              abbre={item.abbreviation}
            />
          ))}
        </C.ContainerCard>
      </C.Container>
    </C.Section>
  );
};

export default Main;
