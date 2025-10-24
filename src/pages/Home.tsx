import HomeActiveBlock from "../components/HomeActiveBlock/HomeActiveBlock";
import HomeArchiveBlock from "../components/HomeArchiveBlock/HomeArchiveBlock";
import { useUsers } from "../hooks/useUsers";
import { useEffect } from "react";

const Home = () => {
    const {users, loading, fetchUsers, isDataLoaded} = useUsers();
    
    // Загружаем данные только если store пуст
    useEffect(() => {
        if (!isDataLoaded() && !loading) {
            fetchUsers();
        }
    }, [isDataLoaded, loading, fetchUsers]);
    
    if (loading) {
        return <div className="flex justify-center items-center h-64 text-primary-1 text-[24px]">Загрузка...</div>;
    }
    
    return (
        users && <div className="flex flex-col mx-auto max-w-[1140px] mb-16">
            {users.filter(item => item.status === 'active').length > 0 && (
                <HomeActiveBlock dataCards={users.filter(item => item.status === 'active')}/>
            )}
            {users.filter(item => item.status === 'archive').length > 0 && (
                <HomeArchiveBlock dataCards={users.filter(item => item.status === 'archive')}/>
            )}
        </div>
    )
}

export default Home;