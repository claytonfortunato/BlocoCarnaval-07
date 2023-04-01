import ilustra01 from "../../assets/ilustra-01.svg";
import ilustra02 from "../../assets/ilustra-02.svg";

import * as C from "./style";

const Header = () => {
  return (
    <C.Container>
      <img src={ilustra01} alt="" className="ImageOne" />
      <img src={ilustra02} alt="" className="ImageTwo" />
    </C.Container>
  );
};

export default Header;
