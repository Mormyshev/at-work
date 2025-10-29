import CardBlock from "../CardBlock/CardBlock";
import type { User } from "../../types/user";
import "../../styles/Home.css";

type HomeArchiveBlockProps = {
  dataCards: User[];
};

const HomeArchiveBlock = ({ dataCards }: HomeArchiveBlockProps) => {
  return (
    <div className="home-block-wrapper home-block-wrapper_archive">
      <h1 className="home-block-wrapper__title">Архивные</h1>
      <div className="home-block-wrapper__content">
        {dataCards
          ?.filter((item) => item.status === "archive")
          .map((item, index) => (
            <CardBlock key={index} itemCard={item} />
          ))}
      </div>
    </div>
  );
};

export default HomeArchiveBlock;
