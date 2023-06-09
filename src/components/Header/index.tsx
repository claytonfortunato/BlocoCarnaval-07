import { useState } from "react";

import ilustra01 from "../../assets/ilustra-01.svg";
import ilustra02 from "../../assets/ilustra-02.svg";
import location from "../../assets/icon/location.png";
import search from "../../assets/icon/Vector.png";
import arrow from "../../assets/icon/arrow-down.png";

import * as C from "./style";

const Header = () => {
  const [nameBloco, setNameBloco] = useState("");
  const [city, setCity] = useState("");

  return (
    <C.Container>
      <img src={ilustra01} alt="" className="ImageOne" />
      <C.Content>
        <C.Box>
          <p>find your block</p>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023.
          </h1>
        </C.Box>
      </C.Content>
      <C.ContentSearch>
        <C.Input>
          <img src={search} alt="icon search" />
          <input
            type="text"
            placeholder="Pesquisar cidade"
            value={nameBloco}
            onChange={(e) => setNameBloco(e.target.value)}
          />
        </C.Input>
        <C.ContainerSelect>
          <img src={location} alt="icon location" />
          <select
            name="select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Selecione uma cidade</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Florianópolis">Florianópolis</option>
            <option value="Curitiba">Curitiba</option>
            <option value="Salvador">Salvador</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Porto Alegre">Porto Alegre</option>
          </select>
          <img src={arrow} alt="" />
        </C.ContainerSelect>
        <C.Button>Buscar agora</C.Button>
      </C.ContentSearch>
      <img src={ilustra02} alt="" className="ImageTwo" />
    </C.Container>
  );
};

export default Header;
