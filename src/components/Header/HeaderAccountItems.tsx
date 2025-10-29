import favoriteIcon from "../../assets/interface/Favorite.svg";
import notificationIcon from "../../assets/interface/Notification.svg";
import HeaderAccountBlock from "./HeaderAccountBlock";
import "../../styles/Header.css";
const HeaderAccountItems = () => {
  return (
    <div className="header-account-items-wrapper">
      <div className="header-account-items-icons-container">
        <button className="icons-container__button">
          <img src={favoriteIcon} alt="" />
        </button>
        <button className="icons-container__button">
          <img src={notificationIcon} alt="" />
        </button>
      </div>
      <HeaderAccountBlock />
    </div>
  );
};

export default HeaderAccountItems;
