import AdminForm from '@/components/admin/AdminForm';
import AdminDetails from '@/components/admin/AdminDetails';
import AdminLayout from '@/layouts/AdminLayout';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';
import AuthSubmitButton from '@/components/UI/Button/SubmitButton';
import useGetDataById from '@/hooks/admin/useGetDataById';
import { categoryType } from '@/types/categoryType';
import { onSubmitType } from '@/types/onSubmitType';
import useCategoryContext from '@/context/useCategoryContext';
import useProductAdmin from '@/hooks/admin/useProductAdmin';

export default function edit({ productId }: any) {
  const { getCategoriesChildren } = useCategoryContext();
  const {
    nameRef,
    categoryRef,
    productCodeRef,
    shortDescRef,
    longDescRef,
    regularPriceRef,
    discountPriceRef,
    quantityRef,
    isAvailableRef,
    updateProduct,
    addImage,
    deleteImage,
    images,
  } = useProductAdmin(productId);

  const { data: product, loading } = useGetDataById(
    'product',
    productsAdminService.showProduct,
    productId
  );

  const onSubmit = async (e: onSubmitType) => {
    e.preventDefault();
    updateProduct(productId);
  };

  return (
    <>
      <Head>
        <title>Create Product - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <AdminDetails>Product:</AdminDetails>

          {!loading && product && (
            <AdminForm.Wraper>
              <form onSubmit={onSubmit}>
                <AdminForm.FormGroup id={'name'} label={'Name'}>
                  <AdminForm.Input
                    id={'name'}
                    placeholder={'Name'}
                    defaultValue={product.name}
                    ref={nameRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'category'} label={'Category'}>
                  <select
                    id="category"
                    name="category"
                    className="outline-none rounded-full border px-4 py-2 border-gray-400 w-full"
                    defaultValue={product.category.id}
                    ref={categoryRef}
                  >
                    <option value={0}>-----</option>
                    {getCategoriesChildren().map((category: categoryType) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      );
                    })}
                  </select>
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'product_code'} label={'Product Code'}>
                  <AdminForm.Input
                    id={'product_code'}
                    placeholder={'Product Code'}
                    defaultValue={product.product_code}
                    ref={productCodeRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup
                  id={'short_description'}
                  label={'Short Description'}
                >
                  <AdminForm.TextArea
                    id={'short_description'}
                    placeholder={'Short Description'}
                    rows={4}
                    defaultValue={product.short_description}
                    ref={shortDescRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup
                  id={'long_description'}
                  label={'Long Description'}
                >
                  <AdminForm.TextArea
                    id={'long_description'}
                    placeholder={'Long Description'}
                    rows={4}
                    defaultValue={product.long_description}
                    ref={longDescRef}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup
                  id={'regular_price'}
                  label={'Regular Price'}
                >
                  <AdminForm.Input
                    id={'regular_price'}
                    placeholder={'Regular Price'}
                    ref={regularPriceRef}
                    type="number"
                    min="0"
                    step=".01"
                    defaultValue={product.regular_price}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup
                  id={'discount_price'}
                  label={'Discount Price'}
                >
                  <AdminForm.Input
                    id={'discount_price'}
                    placeholder={'Discount Price'}
                    ref={discountPriceRef}
                    type="number"
                    min="0"
                    step=".01"
                    defaultValue={product.discount_price}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'quantity'} label={'Quantity'}>
                  <AdminForm.Input
                    id={'quantity'}
                    placeholder={'Quantity'}
                    type="number"
                    ref={quantityRef}
                    defaultValue={product.quantity}
                  />
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'is_availabel'} label={'Is Available'}>
                  <div>
                    <AdminForm.Input
                      id={'is_available'}
                      placeholder={'Is Available'}
                      type="checkbox"
                      ref={isAvailableRef}
                      defaultChecked={product.is_available}
                    />
                  </div>
                </AdminForm.FormGroup>

                <AdminForm.FormGroup id={'images'} label={'Quantity'}>
                  <AdminForm.Input
                    id={'images'}
                    name={'images'}
                    placeholder={'Images'}
                    type="file"
                    onChange={addImage}
                  />
                </AdminForm.FormGroup>

                {images && (
                  <AdminForm.UpdateImages
                    images={images}
                    deleteImage={deleteImage}
                  ></AdminForm.UpdateImages>
                )}

                <div className="mt-10">
                  <AuthSubmitButton>Update Product</AuthSubmitButton>
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
    props: { productId: context?.params?.id },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
