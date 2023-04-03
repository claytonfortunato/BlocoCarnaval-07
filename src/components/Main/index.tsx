import { useContext } from "react";

import { Blocos } from "../../data/blocos";
import { SearchBlocosContext } from "../../context/SearchBlocosContext";

import location from "../../assets/icon/location.png";

import Card from "../Card";

import * as C from "./style";

const Main = () => {
  const { blocosFilter } = useContext(SearchBlocosContext);

  return (
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
  );
};

export default Main;
