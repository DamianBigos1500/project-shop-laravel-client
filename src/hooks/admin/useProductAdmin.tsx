import { onChangeType } from '@/types/onChangeType';
import { useRef, useState } from 'react';
import { productImagesAdminService } from 'src/services/admin/productImagesAdmin.service';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';
import useGetDataById from './useGetDataById';
import Router from 'next/router';

export default function useProductAdmin(productId: any) {
  const nameRef = useRef<any>('');
  const categoryRef = useRef<any>(0);
  const productCodeRef = useRef<any>('');
  const shortDescRef = useRef<any>('');
  const longDescRef = useRef<any>('');
  const regularPriceRef = useRef<any>(0);
  const discountPriceRef = useRef<any>(0);
  const quantityRef = useRef<any>(0);
  const isAvailableRef = useRef<any>(true);
  const [errors, setErrors] = useState<any>([]);

  const { data: images, setData: setImages } = useGetDataById(
    'images',
    productImagesAdminService.getProductImages,
    productId
  );

  const getFormData = () => {
    return {
      name: nameRef.current.value,
      category_id: categoryRef.current.value,
      product_code: productCodeRef.current.value,
      short_description: shortDescRef.current.value,
      long_description: longDescRef.current.value,
      regular_price: regularPriceRef.current.value,
      discount_price: discountPriceRef.current.value,
      quantity: quantityRef.current.value,
      is_available: isAvailableRef.current.checked,
    };
  };

  const createNewProduct = async (selectedImages: any) => {
    const formData = new FormData();
    const payload = JSON.stringify(getFormData());

    formData.append('payload', payload);

    for (let i = 0; i < selectedImages.length; i++) {
      formData.append(`images[${i}]`, selectedImages[i]);
    }
    try {
      await productsAdminService.createProducts(formData);
      Router.push('/dashboard/products');
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const updateProduct = async (productId: any) => {
    const formData = getFormData();

    try {
      await productsAdminService.updateProducts(productId, formData);
      Router.push('/dashboard/products');
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const addImage = async (e: onChangeType) => {
    const formData = new FormData();

    formData.append('image', e.target.files[0]);
    formData.append('product_id', productId);

    try {
      const addImageRes = await productImagesAdminService.addProductImage(
        formData
      );

      setImages((prev: any) => [...prev, addImageRes.data.image]);
    } catch (error) {}
  };

  const deleteImage = async (imageId: number) => {
    try {
      await productImagesAdminService.removeProductImage(imageId);
      setImages((prev: any) =>
        prev.filter((image: any) => image.id != imageId)
      );
    } catch (error) {}
  };

  return {
    createNewProduct,
    updateProduct,
    nameRef,
    categoryRef,
    productCodeRef,
    shortDescRef,
    longDescRef,
    regularPriceRef,
    discountPriceRef,
    quantityRef,
    isAvailableRef,
    images,
    addImage,
    deleteImage,
  };
}
