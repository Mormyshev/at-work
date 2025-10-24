import avatar from '../../assets/avatar.png'

const EditLeftPanel = () => {
    return (
        <div className='flex flex-col sm:flex-row md:flex-col p-6 sm:p-10 md:p-4 lg:p-10 bg-primary-6 rounded-[16px] '>
            <img src={avatar} alt="avatar" className='w-full rounded-[8px] h-[160px] sm:h-[180px] sm:w-[160px] md:w-[280px] md:h-[485px] rounded-[8px] object-cover object-center flex-shrink-0' />
            <div className='w-full max-w-sm mx-auto sm:pl-6'>
                <button type="button" className='w-full font-medium text-primary-1 text-left mt-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-primary-4'>Данные профиля</button>
                <button type="button" className='w-full font-medium text-primary-3 text-left mt-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-primary-4 hover:text-primary-accent'>Рабочее пространство</button>
                <button type="button" className='w-full font-medium text-primary-3 text-left mt-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-primary-4 hover:text-primary-accent'>Приватность</button>
                <button type="button" className='w-full font-medium text-primary-3 text-left mt-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-primary-4 hover:text-primary-accent'>Безопасность</button>
            </div>
        </div>
    )
}

export default EditLeftPanel;