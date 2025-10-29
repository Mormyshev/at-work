import backIcon from "../assets/interface/Backarrow.svg";
import { Link, useParams } from "react-router";
import { useUsers } from "../hooks/useUsers";
import { useEffect } from "react";
import EditForm from "../components/EditForm/EditForm";
import type { User, UserFormData } from "../types/user";
import EditLeftPanel from "../components/EditLeftPanel/EditLeftPanel";
import "../styles/Edit.css";

const Edit = () => {
  const { id } = useParams<{ id: string }>();
  const { users, loading, error, fetchUsers, updateUser, isDataLoaded } =
    useUsers();

  const currentUser = users.find((user) => user.id === parseInt(id || "0"));

  if (loading) {
    return (
      <div className=".err-wrapper">
        <div className="state">
          <span className="state-text">Загрузка...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-wrapper">
        <div className="state">
          <span className="state-text-err">Ошибка: {error}</span>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (!isDataLoaded() && !loading) {
      fetchUsers();
    }
  }, [isDataLoaded, loading, fetchUsers]);

  if (!isDataLoaded() && loading) {
    return (
      <div className="state-wrapper">
        <div className="state">
          <span className="state-text">Загрузка данных...</span>
        </div>
      </div>
    );
  }

  if (!currentUser && !loading && isDataLoaded()) {
    return (
      <div className="state-wrapper">
        <div className="state">
          <span className="state-text-err">Пользователь не найден</span>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-wrapper">
      <Link to={"/"} className="back-btn">
        <img src={backIcon} alt="backIcon" className="bach-btn-img" />
        <span className="bach-btn-text">Назад</span>
      </Link>
      <div className="edit-content">
        <EditLeftPanel />
        <EditForm
          currentUser={currentUser as User}
          updateUser={(id, data) =>
            updateUser(id, data as Partial<UserFormData>)
          }
        />
      </div>
    </div>
  );
};
export default Edit;
