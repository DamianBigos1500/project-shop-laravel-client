import AdminForm from '@/components/admin/AdminForm';
import AdminDetails from '@/components/admin/AdminDetails';
import AdminLayout from '@/layouts/AdminLayout';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import AuthSubmitButton from '@/components/UI/Button/SubmitButton';
import { onChangeType } from '@/types/onChangeType';
import { categoryType } from '@/types/categoryType';
import useCategoryContext from '@/context/useCategoryContext';
import useProductAdmin from '@/hooks/admin/useProductAdmin';
import { onSubmitType } from '@/types/onSubmitType';

export default function create() {
  const { getCategoriesChildren } = useCategoryContext();
  const [selectedImages, setSelectedImages] = useState<string[] | []>([]);

  const addImage = (e: onChangeType) => {
    setSelectedImages((prev: any) => [...prev, ...Array.from(e.target.files)]);
  };
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
    createNewProduct,
  } = useProductAdmin(null);

  const onSubmit = (e: onSubmitType) => {
    e.preventDefault();

    createNewProduct(selectedImages);
  };

  return (
    <>
      <Head>
        <title>Create Product - Admin Dashboard </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <AdminDetails>Product:</AdminDetails>

          <AdminForm.Wraper>
            <form onSubmit={onSubmit}>
              <AdminForm.FormGroup id={'name'} label={'Name'}>
                <AdminForm.Input
                  id={'name'}
                  placeholder={'Name'}
                  ref={nameRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'category'} label={'Category'}>
                <select
                  id="category"
                  name="category"
                  className="outline-none rounded-full border px-4 py-2 bg-white border-gray-400 w-full"
                  defaultValue={0}
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
                  ref={longDescRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'regular_price'} label={'Regular Price'}>
                <AdminForm.Input
                  id={'regular_price'}
                  placeholder={'Regular Price'}
                  ref={regularPriceRef}
                  type="number"
                  min="0"
                  step=".01"
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
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'quantity'} label={'Quantity'}>
                <AdminForm.Input
                  id={'quantity'}
                  placeholder={'Quantity'}
                  type="number"
                  ref={quantityRef}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'is_available'} label={'Is Available'}>
                <div>
                  <AdminForm.Input
                    id={'is_availabel'}
                    placeholder={'Is Available'}
                    type="checkbox"
                    ref={isAvailableRef}
                    defaultChecked={isAvailableRef.current}
                  />
                </div>
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'images'} label={'Add Image'}>
                <AdminForm.Input
                  id={'images'}
                  name={'images'}
                  placeholder={'Images'}
                  type="file"
                  onChange={addImage}
                  multiple
                />
              </AdminForm.FormGroup>

              <AdminForm.MultipleImages
                images={selectedImages}
                setImages={setSelectedImages}
              />
              <div className="mt-10">
                <AuthSubmitButton>Create new Product</AuthSubmitButton>
              </div>
            </form>
          </AdminForm.Wraper>
        </div>
      </AdminLayout>
    </>
  );
}
