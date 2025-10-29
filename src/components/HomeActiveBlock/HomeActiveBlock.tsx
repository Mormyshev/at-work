import CardBlock from "../CardBlock/CardBlock";
import "../../styles/Home.css";
import type { User } from "../../types/user";

type HomeActiveBlockProps = {
  dataCards: User[];
};

const HomeActiveBlock = ({ dataCards }: HomeActiveBlockProps) => {
  return (
    <div className="home-block-wrapper">
      <h1 className="home-block-wrapper__title">Активные</h1>
      <div className="home-block-wrapper__content">
        {dataCards
          ?.filter((item) => item.status === "active")
          .map((item, index) => (
            <CardBlock key={index} itemCard={item} />
          ))}
      </div>
    </div>
  );
};

export default HomeActiveBlock;
