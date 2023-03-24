import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout';
import { protectedAdminRoute } from '@/utils/protectedRoutes/protectedAdminRoute';

function dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    
  }, []);

  return (
    <>
      <Head>
        <title>
          Dashboard - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <AdminLayout>
        <div className="mt-20 ">
          <div className="my-10 text-4xl font-semibold">Dashboard:</div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="category-shadow rounded-lg p-4 flex flex-col w-full">
              <span className="font-semibold">Total Orders: </span>
              <span className="h-40 text-4xl flex items-center justify-center">
                12{' '}
              </span>
            </div>

            <div className="category-shadow rounded-lg p-4 flex flex-col w-full">
              <span className="font-semibold">Total Revenue: </span>
              <span className="h-40 text-4xl flex items-center justify-center">
                $1231332
              </span>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
export default protectedAdminRoute(dashboard);
