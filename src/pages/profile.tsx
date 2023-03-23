import OrderInfo from '@/components/OrderInfo';
import ProfileInfo from '@/components/ProfileInfo';
import ProfileSidebar from '@/components/ProfileSidebar';
import useAuthContext from '@/context/useAuthContext';
import GuestLayout from '@/layouts/GuestLayout';
import { createImageUrl } from '@/utils/createImgUrl';
import { protectedLoginRoute } from '@/utils/protectedRoutes/protectedLoginRoute';
import Head from 'next/head';
import { useState } from 'react';

function profile() {
  const { user, profileImage } = useAuthContext();
  const [subsite, setSubsite] = useState(1);

  return (
    <>
      <Head>
        <title>
          Profile Page - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <GuestLayout>
        <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
          <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="bg w-full h-full object-cover object-center absolute z-0"
            />
            <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
              <img
                src={createImageUrl(profileImage?.filename)}
                className="h-24 w-24 object-cover rounded-full"
              />
              <h1 className="text-2xl font-semibold">
                {user.name} {user.surname}
              </h1>
              <h4 className="text-sm font-semibold">{user.role}</h4>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-white ">
            <ProfileSidebar setSubsite={setSubsite} />

            <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
              <div className="px-4 pt-4">
                {subsite === 1 && <ProfileInfo user={user}></ProfileInfo>}
                {subsite === 2 && <OrderInfo user={user}></OrderInfo>}
              </div>
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export default protectedLoginRoute(profile);
