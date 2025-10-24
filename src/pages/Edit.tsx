import backIcon from '../assets/interface/Backarrow.svg'
import { Link, useParams } from 'react-router';
import { useUsers } from '../hooks/useUsers';
import { useEffect } from 'react';
import EditForm from '../components/EditForm/EditForm';
import type { User, UserFormData } from '../types/user';
import EditLeftPanel from '../components/EditLeftPanel/EditLeftPanel';


const Edit = () => {
    const { id } = useParams<{ id: string }>();
    const { users, loading, error, fetchUsers, updateUser, isDataLoaded } = useUsers();
    
    const currentUser = users.find(user => user.id === parseInt(id || '0'));
    
    if (loading) {
        return (
            <div className='flex flex-col mx-auto max-w-[1140px]'>
                <div className='flex justify-center items-center h-64'>
                    <span className='text-lg'>Загрузка...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex flex-col mx-auto max-w-[1140px]'>
                <div className='flex justify-center items-center h-64'>
                    <span className='text-lg text-red-500'>Ошибка: {error}</span>
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
            <div className='flex flex-col mx-auto max-w-[1140px]'>
                <div className='flex justify-center items-center h-64'>
                    <span className='text-lg'>Загрузка данных...</span>
                </div>
            </div>
        );
    }

    if (!currentUser && !loading && isDataLoaded()) {
        return (
            <div className='flex flex-col mx-auto max-w-[1140px]'>
                <div className='flex justify-center items-center h-64'>
                    <span className='text-lg text-red-500'>Пользователь не найден</span>
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col mx-auto max-w-[1140px] px-4'>
            <Link to={'/'} className='flex flex-row items-center mt-4'>
                <img src={backIcon} alt="backIcon" className='w-[28px] h-[28px] color-primary-2' />
                <span className='text-primary-2 pl-[5px] text-[20px] font-semibold'>Назад</span>
            </Link>
            <div className='grid md:grid-cols-[0.95fr_2fr] grid-cols-1 gap-10 my-[45px]'>
                <EditLeftPanel />
                <EditForm currentUser={currentUser as User} updateUser={(id, data) => updateUser(id, data as Partial<UserFormData>)} />
            </div>
        </div>
    )
}
export default Edit;