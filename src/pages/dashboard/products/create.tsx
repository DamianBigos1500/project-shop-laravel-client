import AdminForm from '@/components/admin/AdminForm';
import AdminDetails from '@/components/admin/AdminDetails';
import AdminLayout from '@/layouts/AdminLayout';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import AuthSubmitButton from '@/components/UI/Button/SubmitButton';
import { onSubmitType } from '@/types/onSubmitType';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';
import { onChangeType } from '@/types/onChangeType';
import { categoryType } from '@/types/categoryType';
import { categoriesAdminService } from 'src/services/admin/categoriesAdmin.service';

export default function create() {
  const nameRef = useRef<any>('');
  const categoryRef = useRef<any>(0);
  const productCodeRef = useRef<any>('');
  const shortDescRef = useRef<any>('');
  const longDescRef = useRef<any>('');
  const regularPriceRef = useRef<any>(0);
  const discountPriceRef = useRef<any>(0);
  const quantityRef = useRef<any>(0);
  const isAvailableRef = useRef<any>(true);
  const [selectedImages, setSelectedImages] = useState<string[] | []>([]);
  const [categories, setCategories] = useState<categoryType[] | []>([]);
  const [errors, setErrors] = useState<any>([]);

  const addImage = (e: onChangeType) => {
    setSelectedImages(Array.from(e.target.files));
  };

  const onSubmit = async (e: onSubmitType) => {
    e.preventDefault();

    const formData = new FormData();

    let payload = JSON.stringify({
      name: nameRef.current.value,
      category_id: categoryRef.current.value,
      product_code: productCodeRef.current.value,
      short_description: shortDescRef.current.value,
      long_description: longDescRef.current.value,
      regular_price: regularPriceRef.current.value,
      discount_price: discountPriceRef.current.value,
      quantity: quantityRef.current.value,
      is_available: isAvailableRef.current.checked,
    });

    formData.append('payload', payload);

    for (let i = 0; i < selectedImages.length; i++) {
      formData.append(`images[${i}]`, selectedImages[i]);
    }
    try {
      await productsAdminService.createProducts(formData);
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  console.log(errors);

  useEffect(() => {
    async function getData() {
      try {
        const categoriesRes =
          await categoriesAdminService.getCategoriesChildren();
        setCategories(categoriesRes.data.categories);
      } catch (error) {}
    }
    getData();
  }, []);

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
                  className="outline-none rounded-full border px-4 py-2 border-gray-400 w-full"
                  defaultValue={0}
                  ref={categoryRef}
                >
                  <option value={0}>-----</option>
                  {categories.map((category: categoryType) => {
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

              <AdminForm.FormGroup id={'is_availabel'} label={'Is Available'}>
                <AdminForm.Input
                  id={'is_availabel'}
                  placeholder={'Is Available'}
                  type="checkbox"
                  ref={isAvailableRef}
                  defaultChecked={isAvailableRef.current}
                />
              </AdminForm.FormGroup>

              <AdminForm.FormGroup id={'images'} label={'Quantity'}>
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
