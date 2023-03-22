import useCartContext from '@/context/useCartContext';
import { onChangeType } from '@/types/onChangeType';
import Router from 'next/router';
import { useRef, useState } from 'react';
import { orderService } from 'src/services/order.service';

export default function useOrder() {
  const { getData } = useCartContext();
  const emailRef = useRef<HTMLInputElement>();
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const telephoneRef = useRef<HTMLInputElement>();
  const deliveryAddressRef = useRef<HTMLInputElement>();
  const townRef = useRef<HTMLInputElement>();
  const zipCodeRef = useRef<HTMLInputElement>();
  const countryRef = useRef<HTMLInputElement>();
  const [errors, setErrors] = useState(null);

  const getFormData = () => {
    return {
      email: emailRef?.current?.value,
      name: firstNameRef?.current?.value,
      surname: lastNameRef?.current?.value,
      telephone: telephoneRef?.current?.value,
      address: deliveryAddressRef?.current?.value,
      town: townRef?.current?.value,
      zip_code: zipCodeRef?.current?.value,
      country: countryRef?.current?.value,
    };
  };

  const createOrder = async () => {
    let formData = getFormData();

    try {
      const orderRes = await orderService.createOrder(formData);
      return orderRes.data.order;
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
    getData();
  };

  const setOrderToPaypal = async (orderId: any) => {
    try {
      await orderService.setOrderPaypal(orderId);
      Router.replace('/profile');
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const setOrderToCash = async (orderId: any) => {
    try {
      await orderService.setOrderCash(orderId);
      Router.replace('/profile');
    } catch (error: any) {
      if (error) {
        if (error?.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  return {
    emailRef,
    firstNameRef,
    lastNameRef,
    telephoneRef,
    deliveryAddressRef,
    townRef,
    zipCodeRef,
    countryRef,
    createOrder,
    setOrderToPaypal,
  };
}
