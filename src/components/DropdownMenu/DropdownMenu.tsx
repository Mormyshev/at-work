import { Link } from "react-router";
import { useUserStore } from "../../stores/userStore";
import '../../styles/DropdownMenu.css'

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
        <div className="my-dropdown">
            <div className="py-1">
                {status === 'active' && (
                    <Link to={`/edit/${id}`}>
                        <button 
                            className="my-button"
                            onClick={() => {setIsDropdownOpen(false);}}
                        >
                            Редактировать
                        </button>
                    </Link>
                )}
                {status === 'active' ? (
                <button 
                    className="my-button my-button-active"
                    onClick={handleArchive}
                >
                    Архивировать
                </button>
                ) : (
                    <button 
                        className="my-button"
                        onClick={handleUnarchive}
                    >
                        Активировать
                    </button>
                )}
                {status === 'active' && (
                    <button 
                        className="my-button my-button-active"
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