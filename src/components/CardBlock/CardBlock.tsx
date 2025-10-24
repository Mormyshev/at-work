import avatar from '../../assets/avatar.png'
import pointMoreIcon from '../../assets/interface/Solid.svg'
import { useState, useRef, useEffect } from 'react';
import type { User } from '../../types/user';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const CardBlock = ({ itemCard }: { itemCard: User }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    
    return (
        <div className="bg-primary-6 rounded-[16px] flex flex-col lg:flex-row items-center p-4 w-full max-w-[162px] lg:max-w-[360px] mx-auto" ref={dropdownRef}>
            {itemCard.status === 'archive' ? (
                <img src={avatar} alt="Аватар" className='w-[130px] h-[120px] sm:w-[112px] sm:h-[112px] rounded-[8px] object-cover object-center grayscale-[100%] flex-shrink-0' />
            ) : (
                <img src={avatar} alt="Аватар" className='w-[130px] h-[120px] sm:w-[112px] sm:h-[112px] rounded-[8px] object-cover object-center flex-shrink-0' />
            )}
            <div className='flex flex-col lg:h-[112px] lg:w-[200px] h-full lg:h-auto lg:pl-4 mt-4 lg:mt-0'>
                <div className='relative mr-auto flex flex-row w-full flex-start lg:w-full'>
                    {itemCard.status === 'archive' ? (
                        <span className='max-w-[90px] lg:max-w-[100%] text-primary-accent grayscale-[100%] text-[18px] md:text-[20px] text-left pr-4'>{itemCard.name}</span>
                    ) : (
                        <span className='max-w-[90px] lg:max-w-[100%] text-primary-accent text-[18px] md:text-[20px] text-left mb-auto pr-4'>{itemCard.name}</span>
                    )}
                    <button className='bg-transparent border-none outline-none focus:outline-none p-0 ml-auto mb-auto' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={pointMoreIcon} alt="moreIcon" className='w-[24px] h-[24px] md:w-[24px] md:h-[24px]'    />
                    </button>
                     {/* Дропдаун меню */}
                     {isDropdownOpen && (
                        <DropdownMenu id={itemCard.id} status={itemCard.status as 'active' | 'archive' | 'hidden'} setIsDropdownOpen={setIsDropdownOpen} />
                    )}
                </div>
                <span className='text-primary-2 mr-auto text-left'>{itemCard.company?.name || 'Компания не указана'}</span>
                <span className='text-primary-3 mt-auto mr-auto text-left'>{itemCard.address?.city || 'Город не указан'}</span>
            </div>
        </div>
    )
}

export default CardBlock;