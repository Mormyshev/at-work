import HomeActiveBlock from "../components/HomeActiveBlock/HomeActiveBlock";
import HomeArchiveBlock from "../components/HomeArchiveBlock/HomeArchiveBlock";
import { useUsers } from "../hooks/useUsers";
import { useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const { users, loading, fetchUsers, isDataLoaded } = useUsers();

  // Загружаем данные только если store пуст
  useEffect(() => {
    if (!isDataLoaded() && !loading) {
      fetchUsers();
    }
  }, [isDataLoaded, loading, fetchUsers]);

  if (loading) {
    return <div className="home-loading-wrapper">Загрузка...</div>;
  }

  return (
    users && (
      <div className="home-wrapper">
        {users.filter((item) => item.status === "active").length > 0 && (
          <HomeActiveBlock
            dataCards={users.filter((item) => item.status === "active")}
          />
        )}
        {users.filter((item) => item.status === "archive").length > 0 && (
          <HomeArchiveBlock
            dataCards={users.filter((item) => item.status === "archive")}
          />
        )}
      </div>
    )
  );
};

export default Home;
