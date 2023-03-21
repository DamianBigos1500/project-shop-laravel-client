import React from 'react';

export default function useUserAdmin() {
  const createNewProduct = async (selectedImages: any) => {
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
  return <div>useUserAdmin</div>;
}
