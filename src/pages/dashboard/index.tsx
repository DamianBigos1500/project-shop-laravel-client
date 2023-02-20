import React from 'react';
import DashboardSidebar from '../../layouts/components/AdminSidebar';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout';

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - </title>
      </Head>
      {/* <DashboardSidebar /> */}
      <AdminLayout>Dashboard</AdminLayout>
    </>
  );
}
