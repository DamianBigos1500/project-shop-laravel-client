import AdminDetails from '@/components/admin/AdminDetails';
import useGetDataById from '@/hooks/admin/useGetDataById';
import AdminLayout from '@/layouts/AdminLayout';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { usersAdminService } from 'src/services/admin/usersAdmin.service';

type pageProps = {
  userId: string | number | string[];
};

export default function index({ userId }: pageProps) {
  const { data: user, loading } = useGetDataById(
    'user',
    usersAdminService.showUser,
    userId
  );

  return (
    <>
      <Head>
        <title>User {userId} - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <AdminDetails>
            <span className="text-black text-3xl py-4 font-semibold">
              User:
            </span>
            <Link
              href={`/dashboard/users/${userId}/edit`}
              className="text-white bg-blue-500 p-2"
            >
              edit
            </Link>
          </AdminDetails>

          {!loading && user && (
            <AdminDetails.Wraper>
              <AdminDetails.Data label={'User Id'} data={user.id} />
              {user?.profile_image && (
                <AdminDetails.Image
                  imageSrc={
                    process.env.NEXT_PUBLIC_BACKEND_IMG_URL +
                    user.profile_image?.filename
                  }
                  label={'Profile Image: '}
                />
              )}
              <AdminDetails.Data label={'Name'} data={user.name} />
              <AdminDetails.Data label={'Surname'} data={user.surname} />
              <AdminDetails.Data label={'Email'} data={user.email} />
              <AdminDetails.Data
                label={'Phone Number'}
                data={user.phone_number}
              />
              <AdminDetails.Data label={'Role'} data={user.role} />
            </AdminDetails.Wraper>
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
