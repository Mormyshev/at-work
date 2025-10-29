import '../../styles/button.css'
export const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      className="btn btn:hover btn:disabled"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
