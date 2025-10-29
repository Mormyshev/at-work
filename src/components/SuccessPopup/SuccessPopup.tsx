import { useEffect } from "react";
import statusIcon from "../../assets/interface/StatusIcon.svg";
import "../../styles/SuccessPopup.css";
interface SuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
  message?: string;
}

const SuccessPopup = ({ isVisible, onClose }: SuccessPopupProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="wrapper-sspp">
      <div className="close" onClick={onClose} />

      <div className="wrapper-btn">
        <button onClick={onClose} className="btn-sspp btn-sspp:hover">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="img-wrapper">
          <img src={statusIcon} alt="statusIcon" className="" />
        </div>
        <div className="info-wrapper">
          <h3 className="info-title">Изменения сохранены!</h3>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
