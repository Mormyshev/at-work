import avatar from "../../assets/avatar.png";
import "../../styles/Edit.css";

const EditLeftPanel = () => {
  return (
    <div className="edit-pannel-wrapper">
      <img src={avatar} alt="avatar" className="edit-pannel-image" />
      <div className="edit-pannel-button-wrapper">
        <button
          type="button"
          className="edit-pannel-button edit-pannel-button::after"
        >
          Данные профиля
        </button>
        <button
          type="button"
          className="edit-pannel-button-gray edit-pannel-button-gray::after edit-pannel-button-gray:hover"
        >
          Рабочее пространство
        </button>
        <button
          type="button"
          className="edit-pannel-button-gray edit-pannel-button-gray::after edit-pannel-button-gray:hover"
        >
          Приватность
        </button>
        <button
          type="button"
          className="edit-pannel-button-gray edit-pannel-button-gray::after edit-pannel-button-gray:hover"
        >
          Безопасность
        </button>
      </div>
    </div>
  );
};

export default EditLeftPanel;
