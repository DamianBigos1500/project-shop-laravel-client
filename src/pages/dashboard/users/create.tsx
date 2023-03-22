import AdminForm from '@/components/admin/AdminForm';
import AdminDetails from '@/components/admin/AdminDetails';
import AdminLayout from '@/layouts/AdminLayout';
import Head from 'next/head';
import React from 'react';
import AuthSubmitButton from '@/components/UI/Button/SubmitButton';
import { onSubmitType } from '@/types/onSubmitType';
import useUserAdmin from '@/hooks/admin/useUserAdmin';

export default function create() {
  const {
    nameRef,
    emailRef,
    surnameRef,
    phoneNumberRef,
    roleRef,
    passwordRef,
    passwordCfRef,
    selectedImage,
    createNewUser,
    onFileChange,
  } = useUserAdmin(null);

  const onSubmit = (e: onSubmitType) => {
    e.preventDefault();
    createNewUser();
  };

  return (
    <>
      <Head>
        <title>Create User - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <AdminDetails>Product:</AdminDetails>

          <AdminForm.Wraper>
            <form onSubmit={onSubmit}>
              <AdminForm.FormGroup id={'name'} label={'Name'}>
                <AdminForm.Input
                  id={'name'}
                  placeholder={'Name'}
                  ref={nameRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'surname'} label={'Surname'}>
                <AdminForm.Input
                  id={'surname'}
                  placeholder={'surname'}
                  ref={surnameRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'email'} label={'Email'}>
                <AdminForm.Input
                  id={'email'}
                  type="email"
                  placeholder={'Name'}
                  ref={emailRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'phone'} label={'Phone Number'}>
                <AdminForm.Input
                  id={'phone'}
                  type="phone"
                  placeholder={'Phone Number'}
                  ref={phoneNumberRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'role'} label={'Role'}>
                <AdminForm.Input
                  id={'role'}
                  type="role"
                  placeholder={'Role'}
                  ref={roleRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'password'} label={'Password'}>
                <AdminForm.Input
                  id={'password'}
                  type="password"
                  placeholder={'Password'}
                  ref={passwordRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup
                id={'password_confirmation'}
                label={'Confirm Password'}
              >
                <AdminForm.Input
                  id={'password_confirmation'}
                  type="password_confirmation"
                  placeholder={'Confirm Password'}
                  ref={passwordCfRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup
                id={'images'}
                label={'Click to change image'}
              >
                <AdminForm.Input
                  id={'profile_image'}
                  name={'profile_image'}
                  placeholder={'profile_image'}
                  type="file"
                  onChange={onFileChange}
                />
              </AdminForm.FormGroup>

              {selectedImage && (
                <AdminDetails.Image
                  imageSrc={URL.createObjectURL(selectedImage)}
                  label={''}
                />
              )}

              <div className="mt-10">
                <AuthSubmitButton>Create new Product</AuthSubmitButton>
              </div>
            </form>
          </AdminForm.Wraper>
        </div>
      </AdminLayout>
    </>
  );
}
