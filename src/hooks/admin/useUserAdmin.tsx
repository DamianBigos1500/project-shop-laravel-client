import { onChangeType } from '@/types/onChangeType';
import Router from 'next/router';
import { useRef, useState } from 'react';
import { usersAdminService } from 'src/services/admin/usersAdmin.service';

export default function useUserAdmin(
  userId: number | string | string[] | null
) {
  const nameRef = useRef<any>('');
  const surnameRef = useRef<any>('');
  const emailRef = useRef<any>('');
  const phoneNumberRef = useRef<any>('');
  const roleRef = useRef<any>('');
  const passwordRef = useRef<any>('');
  const passwordCfRef = useRef<any>('');
  const [selectedImage, setSelectedImage] = useState<null | string | any>(null);
  const [errors, setErrors] = useState([]);

  const getFarmData = () => {
    return {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      phone_number: phoneNumberRef.current.value,
      role: roleRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordCfRef.current.value,
    };
  };

  const createNewUser = async () => {
    const formData = new FormData();

    let payload = JSON.stringify(getFarmData());

    formData.append('payload', payload);
    formData.append('profile_image', selectedImage);

    try {
      await usersAdminService.createUser(formData);
      Router.push('/dashboard/users');
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const updateUser = async (selectedImage: any) => {
    const formData = new FormData();

    let payload = JSON.stringify(getFarmData());

    formData.append('payload', payload);
    formData.append('profile_image', selectedImage);

    try {
      await usersAdminService.updateUser(userId, formData);
      Router.push('/dashboard/users');
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const onFileChange = (e: onChangeType) => {
    setSelectedImage(e.target.files[0]);
  };

  return {
    nameRef,
    emailRef,
    surnameRef,
    phoneNumberRef,
    roleRef,
    passwordRef,
    passwordCfRef,
    selectedImage,
    createNewUser,
    updateUser,
    onFileChange,
  };
}
