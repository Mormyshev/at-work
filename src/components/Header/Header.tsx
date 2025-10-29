import HeaderAccountItems from "./HeaderAccountItems";
import HeaderLogo from "./HeaderLogo";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <HeaderLogo />
        <div className="header-account-items">
          <HeaderAccountItems />
        </div>
      </div>
    </div>
  );
};
export default Header;
