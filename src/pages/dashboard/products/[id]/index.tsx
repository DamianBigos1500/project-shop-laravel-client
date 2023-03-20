import AdminDetails from '@/components/admin/AdminDetails';
import AdminLayout from '@/layouts/AdminLayout';
import { productType } from '@/types/productType';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';

export default function index({ productId }: any) {
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

          {product && (
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
