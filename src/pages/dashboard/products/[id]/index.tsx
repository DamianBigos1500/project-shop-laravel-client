import AdminDetails from '@/components/admin/AdminDetails';
import useGetDataById from '@/hooks/admin/useGetDataById';
import AdminLayout from '@/layouts/AdminLayout';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';

export default function index({ productId }: any) {
  const { data: product, loading } = useGetDataById(
    'product',
    productsAdminService.showProduct,
    productId
  );

  return (
    <>
      <Head>
        <title>Product {productId} - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <AdminDetails>
            <span className="text-black text-3xl py-4 font-semibold">
              Product:
            </span>
            <Link
              href={`/dashboard/products/${productId}/edit`}
              className="text-white bg-blue-500 p-2"
            >
              edit
            </Link>
          </AdminDetails>

          {!loading && product && (
            <AdminDetails.Wraper>
              <AdminDetails.Data label={'Product Id'} data={product.id} />
              <AdminDetails.Data label={'Product Name'} data={product.name} />
              <AdminDetails.Data
                label={'Product Code'}
                data={product.product_code}
              />
              <AdminDetails.Data
                label={'Regular Price'}
                data={product.regular_price}
              />
              <AdminDetails.Data
                label={'Discount Price'}
                data={product.discount_price}
              />

              <AdminDetails.Data
                label={'Short Description'}
                data={product.short_description}
              />
              <AdminDetails.Data
                label={'Long Description'}
                data={product.long_description}
              />
              <AdminDetails.Data
                label={'Category Name'}
                data={product?.category?.title}
              />
              <AdminDetails.Data
                label={'Category Id'}
                data={product?.category?.id}
              />
              <AdminDetails.MultipleImages images={product?.images} />
            </AdminDetails.Wraper>
          )}
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
