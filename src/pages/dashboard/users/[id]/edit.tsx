import AuthSubmitButton from '@/components/UI/Button/SubmitButton';
import AdminDetails from '@/components/admin/AdminDetails';
import AdminForm from '@/components/admin/AdminForm';
import useGetDataById from '@/hooks/admin/useGetDataById';
import useUserAdmin from '@/hooks/admin/useUserAdmin';
import AdminLayout from '@/layouts/AdminLayout';
import { onChangeType } from '@/types/onChangeType';
import { onSubmitType } from '@/types/onSubmitType';
import { createImageUrl } from '@/utils/createImgUrl';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { usersAdminService } from 'src/services/admin/usersAdmin.service';

type pageProps = {
  userId: string | number | string[];
};

export default function index({ userId }: pageProps) {
  const {
    nameRef,
    emailRef,
    surnameRef,
    phoneNumberRef,
    roleRef,
    passwordRef,
    passwordCfRef,
    selectedImage,
    updateUser,
    onFileChange,
  } = useUserAdmin(userId);

  const { data: user, loading } = useGetDataById(
    'user',
    usersAdminService.showUser,
    userId
  );

  const onSubmit = async (e: onSubmitType) => {
    e.preventDefault();
    updateUser(selectedImage);
  };

  return (
    <>
      <Head>
        <title>User {userId} - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="md:m-10 m-0 ">
          <AdminDetails>
            <span className="text-black text-3xl py-4 font-semibold">
              User:
            </span>
          </AdminDetails>

          {!loading && user && (
            <AdminForm.Wraper>
              <form onSubmit={onSubmit} autoComplete="off">
                <AdminForm.FormGroup id={'name'} label={'Name'}>
                  <AdminForm.Input
                    id={'name'}
                    defaultValue={user.name}
                    placeholder={'Name'}
                    ref={nameRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'surname'} label={'Surname'}>
                  <AdminForm.Input
                    id={'surname'}
                    placeholder={'surname'}
                    defaultValue={user.surname}
                    ref={surnameRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'email'} label={'Email'}>
                  <AdminForm.Input
                    id={'email'}
                    type="email"
                    placeholder={'Name'}
                    defaultValue={user.email}
                    ref={emailRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'phone'} label={'Phone Number'}>
                  <AdminForm.Input
                    id={'phone'}
                    type="phone"
                    placeholder={'Phone Number'}
                    defaultValue={user.phone_number}
                    ref={phoneNumberRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'role'} label={'Role'}>
                  <AdminForm.Input
                    id={'role'}
                    type="role"
                    placeholder={'Role'}
                    defaultValue={user.role}
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
                  id={'profile_image'}
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

                <AdminDetails.Image
                  imageSrc={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : createImageUrl(user.profile_image?.filename)
                  }
                  label={''}
                />

                <div className="mt-10">
                  <AuthSubmitButton>Update User</AuthSubmitButton>
                </div>
              </form>
            </AdminForm.Wraper>
          )}
        </div>
      </AdminLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { userId: context?.params?.id },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
