import avatar from "../../assets/avatar.png";
import "../../styles/Header.css";
const HeaderAccountBlock = () => {
  return (
    <div className="header-account-block">
      <img
        src={avatar}
        alt="avatar"
        className="header-account-block__avatar-img"
      />
      <div className="text-primary-2 ml-[10px]">Ivan1234</div>
    </div>
  );
};
export default HeaderAccountBlock;
