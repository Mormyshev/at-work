import { useForm } from "react-hook-form";
import type { User, UserFormData } from "../../types/user";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SuccessPopup from "../SuccessPopup/SuccessPopup";
import "../../styles/Edit.css";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно быть не менее 2 символов" })
    .max(64, { message: "Имя должно быть не более 64 символов" }),
  nickname: z
    .string()
    .min(2, { message: "Никнейм должен быть не менее 2 символов" })
    .max(64, { message: "Никнейм должен быть не более 64 символов" }),
  email: z.string().email({ message: "Некорректный email адрес" }),
  city: z
    .string()
    .min(2, { message: "Город должен быть не менее 2 символов" })
    .max(64, { message: "Город должен быть не более 64 символов" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,11}$/, { message: "Неверный формат телефона" }),
  company: z
    .string()
    .min(2, { message: "Название компании должно быть не менее 2 символов" })
    .max(64, { message: "Название компании должно быть не более 64 символов" }),
});

type FormData = z.infer<typeof schema>;

interface EditFormProps {
  currentUser: User;
  updateUser: (id: number, data: Partial<UserFormData>) => void;
}

const EditForm = ({ currentUser, updateUser }: EditFormProps) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      nickname: "",
      email: "",
      city: "",
      phone: "",
      company: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        nickname: currentUser.username || "",
        email: currentUser.email,
        city: currentUser.address?.city || "",
        phone: currentUser.phone || "",
        company: currentUser.company?.name || "",
      });
    }
  }, [currentUser, reset]);

  const onSubmit = (data: UserFormData) => {
    if (currentUser) {
      updateUser(currentUser.id, data as Partial<UserFormData>);
      setShowSuccessPopup(true);
    } else {
      console.error("Пользователь не найден!");
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="edit-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form-title form-title::after">Данные профиля</h2>
        <div className="form-srapper-input">
          <div>
            <label className="label">Имя</label>
            <input
              {...register("name")}
              type="text"
              className="input input:focus"
            />
            {errors.name && (
              <span className="err-text-form">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label className="label">Никнейм</label>
            <input
              {...register("nickname")}
              type="text"
              className="input input:focus"
            />
            {errors.nickname && (
              <span className="err-text-form">{errors.nickname.message}</span>
            )}
          </div>
          <div>
            <label className="label">Почта</label>
            <input
              {...register("email")}
              type="email"
              className="input input:focus"
            />
            {errors.email && (
              <span className="err-text-form">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="label">Город</label>
            <input
              {...register("city")}
              type="text"
              className="input input:focus"
            />
            {errors.city && (
              <span className="err-text-form">{errors.city.message}</span>
            )}
          </div>
          <div>
            <label className="label">Телефон</label>
            <input
              {...register("phone")}
              type="tel"
              className="input input:focus"
            />
            {errors.phone && (
              <span className="err-text-form">{errors.phone.message}</span>
            )}
          </div>
          <div>
            <label className="label">Название компании</label>
            <input
              {...register("company")}
              type="text"
              className="input input:focus"
            />
            {errors.company && (
              <span className="err-text-form">{errors.company.message}</span>
            )}
          </div>
        </div>
        <div className="save-btn">
          <Button onClick={handleSubmit(onSubmit)} disabled={false}>
            Сохранить
          </Button>
        </div>
      </form>
      <SuccessPopup
        isVisible={showSuccessPopup}
        onClose={handleClosePopup}
        message="Данные профиля успешно сохранены!"
      />
    </div>
  );
};

export default EditForm;
