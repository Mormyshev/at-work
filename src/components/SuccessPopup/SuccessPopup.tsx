import { useEffect } from 'react';
import statusIcon from '../../assets/interface/StatusIcon.svg';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl flex flex-col items-center justify-center h-[250px] w-[350px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
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

        <div className="flex items-center justify-center mb-4">
           <img src={statusIcon} alt="statusIcon" className="" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-primary-2 mb-2">
            Изменения сохранены!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
