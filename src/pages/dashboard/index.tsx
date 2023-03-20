import React from 'react';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout';
import { protectedAdminRoute } from '@/utils/protectedRoutes/protectedAdminRoute';

function dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - </title>
      </Head>
      <AdminLayout>Dashboard</AdminLayout>
    </>
  );
}
export default protectedAdminRoute(dashboard);
