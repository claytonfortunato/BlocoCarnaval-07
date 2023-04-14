import { useState } from "react";

import Card from "../Card";

import * as C from "./style";
import { CarnivalGroup } from "../../@types/types";

export const CarnivalGroupList: CarnivalGroup[] = [
  {
    title: "O Python do vovô não sobe mais",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-01.png",
    city: "São Paulo",
    abbreviation: "SP",
  },
  {
    title: "Todo mundo Null",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-02.svg",
    city: "Florianópolis",
    abbreviation: "SC",
  },
  {
    title: "Hoje dou exception",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-03.svg",
    city: "Curitiba",
    abbreviation: "PR",
  },
  {
    title: "Manda Node",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-04.svg",
    city: "Salvador",
    abbreviation: "BA",
  },
  {
    title: "Só no back-end",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-05.svg",
    city: "São Paulo",
    abbreviation: "SP",
  },
  {
    title: "Esse anel não é de Ruby",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-06.svg",
    city: "São Paulo",
    abbreviation: "SP",
  },
  {
    title: "Pimenta no C# dos outros é refresco",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-07.svg",
    city: "Rio de Janeiro",
    abbreviation: "RJ",
  },
  {
    title: "EnCACHE aqui",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-08.svg",
    city: "Porto Alegre",
    abbreviation: "RS",
  },
  {
    title: "Não valho nada mas JAVA li",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/img/bloco-09.svg",
    city: "São Paulo",
    abbreviation: "SP",
  },
];

const Main = () => {
  const [groups, setGroups] = useState<CarnivalGroup[]>(CarnivalGroupList);

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
          {groups.map((item, index) => (
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
