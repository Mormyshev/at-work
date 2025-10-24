import avatar from '../../assets/avatar.png'
const HeaderAccountBlock = () => {
    return ( 
        <div className="flex flex-row ml-[20px]">
            <img src={avatar} alt="avatar" className='w-[20px] h-[20px] rounded-full'/>
            <div className="text-primary-2 ml-[10px]">Ivan1234</div>
        </div>
    )
}
export default HeaderAccountBlock;