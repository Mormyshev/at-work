import avatar from "../../assets/avatar.png";
import pointMoreIcon from "../../assets/interface/Solid.svg";
import { useState, useRef, useEffect } from "react";
import type { User } from "../../types/user";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "../../styles/CardBlock.css";

const CardBlock = ({ itemCard }: { itemCard: User }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="card-block-wrapper" ref={dropdownRef}>
      {itemCard.status === "archive" ? (
        <img
          src={avatar}
          alt="Аватар"
          className="card-block-avatar card-block-avatar__archive"
        />
      ) : (
        <img src={avatar} alt="Аватар" className="card-block-avatar" />
      )}
      <div className="custom-flex-container">
        <div className="name-wrapper">
          {itemCard.status === "archive" ? (
            <span className="text-archive">{itemCard.name}</span>
          ) : (
            <span className="text">{itemCard.name}</span>
          )}
          <button
            className="button-dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={pointMoreIcon} alt="moreIcon" className="icon-size" />
          </button>
          {/* Дропдаун меню */}
          {isDropdownOpen && (
            <DropdownMenu
              id={itemCard.id}
              status={itemCard.status as "active" | "archive" | "hidden"}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          )}
        </div>
        <span className="custom-error">
          {itemCard.company?.name || "Компания не указана"}
        </span>
        <span className="custom-error-city">
          {itemCard.address?.city || "Город не указан"}
        </span>
      </div>
    </div>
  );
};

export default CardBlock;
