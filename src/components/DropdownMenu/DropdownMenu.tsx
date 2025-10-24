import { Link } from "react-router";
import { useUserStore } from "../../stores/userStore";

const DropdownMenu = ({ id, status, setIsDropdownOpen }: { id: number, status: 'active' | 'archive' | 'hidden', setIsDropdownOpen: (isDropdownOpen: boolean) => void }) => {
    const handleArchive = () => {
        useUserStore.getState().changeUserStatus(id, 'archive');
        setIsDropdownOpen(false)
    }

    const handleUnarchive = () => {
        useUserStore.getState().changeUserStatus(id, 'active');
        setIsDropdownOpen(false)
    }

    const handleHide = () => {
        useUserStore.getState().changeUserStatus(id, 'hidden');
        setIsDropdownOpen(false)
    }   

    return (
        <div className="absolute right-[-20px] lg:right-0 top-full bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px] lg:min-w-[200px]">
            <div className="py-1">
                {status === 'active' && (
                    <Link to={`/edit/${id}`}>
                        <button 
                            className="block w-full text-left px-4 py-3 text-sm text-primary-1 hover:text-primary-accent"
                            onClick={() => {setIsDropdownOpen(false);}}
                        >
                            Редактировать
                        </button>
                    </Link>
                )}
                {status === 'active' ? (
                <button 
                    className="block w-full text-left px-4 py-3 mt-1 text-sm text-primary-1 hover:text-primary-accent"
                    onClick={handleArchive}
                >
                    Архивировать
                </button>
                ) : (
                    <button 
                        className="block w-full text-left px-4 py-3 text-sm text-primary-1 hover:text-primary-accent"
                        onClick={handleUnarchive}
                    >
                        Активировать
                    </button>
                )}
                {status === 'active' && (
                    <button 
                        className="block w-full text-left px-4 py-3 mt-1 text-sm text-primary-1 hover:text-primary-accent"
                        onClick={handleHide}
                    >
                        Скрыть
                    </button>
                )}
            </div>
        </div>
    )
}

export default DropdownMenu;