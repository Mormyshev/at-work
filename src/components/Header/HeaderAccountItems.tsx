import favoriteIcon from '../../assets/interface/Favorite.svg'
import notificationIcon from '../../assets/interface/Notification.svg'
import HeaderAccountBlock from './HeaderAccountBlock';
const HeaderAccountItems = () => {
    return (
        <div className='flex flex-row'>
            <div className='md:block hidden'>
            <button className='bg-transparent border-none outline-none focus:outline-none p-0'>
                <img src={favoriteIcon} alt="" />
            </button>
            <button className='bg-transparent border-none outline-none focus:outline-none p-0'>
                <img src={notificationIcon} alt="" />
            </button>
            </div>
            <HeaderAccountBlock/>
        </div>
    )
}

export default HeaderAccountItems;