import location from "../../assets/icon/location.png";

import * as C from "./style";

type Props = {
  Image: string;
  title: string;
  description: string;
  city: string;
  abbre: string;
};

const Card = ({ Image, title, description, city, abbre }: Props) => {
  return (
    <C.Container>
      <img src={Image} alt="carnival block image" />
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
        <div>
          <img src={location} alt="icon search" />
          <span>
            {city} - {abbre}
          </span>
        </div>
      </div>
    </C.Container>
  );
};

export default Card;
