import AdminForm from '@/components/admin/AdminForm';
import AdminDetails from '@/components/admin/AdminDetails';
import AdminLayout from '@/layouts/AdminLayout';
import { productType } from '@/types/productType';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';

export default function edit({ productId }: any) {
  const productNameRef = useRef<any>('');

  const [product, setProduct] = useState<productType | null>(null);

  async function getData() {
    try {
      const res = await productsAdminService.showProduct(productId);
      setProduct(res.data.product);
    } catch (error) {}
  }
  console.log(product);

  useEffect(() => {
    if (!product) {
      getData();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Product {productId} - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <AdminDetails>Product:</AdminDetails>

          {product && <AdminDetails.Wraper>asd</AdminDetails.Wraper>}
        </div>
      </AdminLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { productId: context?.params?.id },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
