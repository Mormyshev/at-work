import { useForm } from 'react-hook-form'
import type { User, UserFormData } from '../../types/user';
import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SuccessPopup from '../SuccessPopup/SuccessPopup';

const schema = z.object({
    name: z.string().min(2, { message: "Имя должно быть не менее 2 символов" }).max(64, { message: "Имя должно быть не более 64 символов" }),
    nickname: z.string().min(2, { message: "Никнейм должен быть не менее 2 символов" }).max(64, { message: "Никнейм должен быть не более 64 символов" }),
    email: z.string().email({ message: "Некорректный email адрес" }),
    city: z.string().min(2, { message: "Город должен быть не менее 2 символов" }).max(64, { message: "Город должен быть не более 64 символов" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,11}$/, { message: "Неверный формат телефона" }),
    company: z.string().min(2, { message: "Название компании должно быть не менее 2 символов" }).max(64, { message: "Название компании должно быть не более 64 символов" }),
});

type FormData = z.infer<typeof schema>;

const EditForm = ({ currentUser, updateUser }: { currentUser: User, updateUser: (id: number, data: Partial<UserFormData>) => void }) => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    
    const { register, handleSubmit, formState: { errors }, reset,} = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            nickname: "",
            email: "",
            city: "",
            phone: "",
            company: ""
        }
    });
    

    useEffect(() => {
        if (currentUser) {
            reset({
                name: currentUser.name,
                nickname: currentUser.username || "",
                email: currentUser.email,
                city: currentUser.address?.city || "",
                phone: currentUser.phone || "",
                company: currentUser.company?.name || ""
            });
        }
    }, [currentUser, reset]);

    const onSubmit = (data: UserFormData) => {
        console.log('🚀 onSubmit вызван с данными:', data);
        console.log('👤 currentUser:', currentUser);
        
        if (currentUser) {
            console.log('📝 Вызываем updateUser с:', {
                id: currentUser.id,
                data: data
            });
            
            updateUser(currentUser.id, data as Partial<UserFormData>);
            console.log('✅ updateUser вызван');
            setShowSuccessPopup(true);
        } else {
            console.error('❌ currentUser не найден!');
        }
    };

    const handleClosePopup = () => {
        setShowSuccessPopup(false);
    };

   
    return (
        <div className='flex flex-col w-full bg-primary-6 rounded-[16px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full  mr-auto p-10 rounded-lg'>
                <h2 className='text-[24px] font-semibold mb-6 text-gray-800 text-left pb-4 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-primary-4'>Данные профиля</h2>
                <div className='space-y-4'>
                    <div>
                        <label className='block text-[18px] font-semibold text-primary-1 mb-2 text-left'>Имя</label>
                        <input 
                            {...register("name")}
                            type="text" 
                            className='flex w-full max-w-[420px] mr-auto px-3 py-2 text-primary-1 border border-2 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.name && <span className="flex text-red-500 text-sm mr-auto">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className='block text-[18px] font-semibold text-primary-1 mb-2 text-left'>Никнейм</label>
                        <input 
                            {...register("nickname")}
                            type="text" 
                            className='flex w-full max-w-[420px] mr-auto px-3 py-2 text-primary-1 border border-2 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.nickname && <span className="flex text-red-500 text-sm mr-auto">{errors.nickname.message}</span>}
                    </div>
                    <div>
                        <label className='block text-[18px] font-semibold text-primary-1 mb-2 text-left'>Почта</label>
                        <input 
                            {...register("email")}
                            type="email" 
                            className='flex w-full max-w-[420px] mr-auto px-3 py-2 text-primary-1 border border-2 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.email && <span className="flex text-red-500 text-sm mr-auto">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className='block text-[18px] font-semibold text-primary-1 mb-2 text-left'>Город</label>
                        <input 
                            {...register("city")}
                            type="text" 
                            className='flex w-full max-w-[420px] mr-auto px-3 py-2 text-primary-1 border border-2 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.city && <span className="flex text-red-500 text-sm mr-auto">{errors.city.message}</span>}
                    </div>
                    <div>
                        <label className='block text-[18px] font-semibold text-primary-1 mb-2 text-left'>Телефон</label>
                        <input 
                            {...register("phone")}
                            type="tel" 
                            className='flex w-full max-w-[420px] rounded-[50px] mr-auto px-3 py-2 text-primary-1 border border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.phone && <span className="flex text-red-500 text-sm mr-auto">{errors.phone.message}</span>}
                    </div>
                    <div>
                        <label className='block text-[18px] font-semibold text-primary-1 mb-2 text-left'>Название компании</label>
                        <input 
                            {...register("company")}
                            type="text" 
                            className='flex w-full max-w-[420px] mr-auto px-3 py-2 text-primary-1 border border-2 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.company && <span className="flex text-red-500 text-sm mr-auto">{errors.company.message}</span>}
                    </div>
                </div>
                <div className='flex justify-end'>
                <Button onClick={handleSubmit(onSubmit)} disabled={false}>Сохранить</Button>
                </div>
            </form> 
            <SuccessPopup 
                isVisible={showSuccessPopup}
                onClose={handleClosePopup}
                message="Данные профиля успешно сохранены!"
            />
        </div>
    )
}

export default EditForm;