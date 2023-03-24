import PaypalButton from '@/components/PaypalButton';
import { InputCheckout } from '@/components/UI/Input/InputCheckout';
import useAuthContext from '@/context/useAuthContext';
import useCartContext from '@/context/useCartContext';
import useOrder from '@/hooks/useOrder';
import GuestLayout from '@/layouts/GuestLayout';
import { onSubmitType } from '@/types/onSubmitType';
import Head from 'next/head';
import React, { useState } from 'react';

export default function index() {
  const { user } = useAuthContext();
  const {
    emailRef,
    firstNameRef,
    lastNameRef,
    telephoneRef,
    streetRef,
    addressRef,
    cityRef,
    zipCodeRef,
    countryRef,
    createOrder,
    setOrderToPaypal,
    setOrderToCash,
    errors,
  } = useOrder();

  const [paymentMethod, setPaymentMethod] = useState<number | null>(null);

  const { cartTotalSum } = useCartContext();

  console.log(errors);

  const submitForm = async (e: onSubmitType) => {
    e.preventDefault();
    if (paymentMethod === 0) {
      const newOrder = await createOrder();
      if (newOrder) {
        await setOrderToCash(newOrder.id);
      }
    }

    // create order

    // redirect to order
  };

  return (
    <>
      <Head>
        <title>Order</title>
      </Head>
      <GuestLayout>
        <div className="mx-7xl">
          <div className="mt-10 mb-6 font-semibold text-xl">Order:</div>
          <form
            className="flex md:flex-row flex-col rounded-xl bg-white shadow-xl"
            onSubmit={submitForm}
          >
            <div className="flex-1 p-8">
              <div className="flex flex-col gap-4">
                <h2 className="w-full py-4 font-semibold text-2xl ">
                  Delivery address:
                </h2>

                <InputCheckout
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  defaultValue={user?.email}
                  errors={errors}
                />

                <div className="flex gap-10 ">
                  <InputCheckout
                    ref={firstNameRef}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="First name *"
                    defaultValue={user?.name}
                    errors={errors}
                  />

                  <InputCheckout
                    ref={lastNameRef}
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Last name *"
                    defaultValue={user?.surname}
                    errors={errors}
                  />
                </div>

                <InputCheckout
                  ref={telephoneRef}
                  id="telephone"
                  name="telephone"
                  type="text"
                  placeholder="Telephone *"
                  defaultValue={user?.phone_number}
                  errors={errors}
                />

                <InputCheckout
                  ref={streetRef}
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Street *"
                  defaultValue={user?.street}
                  errors={errors}
                />

                <InputCheckout
                  ref={addressRef}
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address *"
                  defaultValue={user?.address}
                  errors={errors}
                />

                <InputCheckout
                  ref={cityRef}
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Delivery address *"
                  defaultValue={user?.city}
                  errors={errors}
                />

                <InputCheckout
                  ref={zipCodeRef}
                  id="zip_code"
                  name="zip_code"
                  type="text"
                  placeholder="ZIP code *"
                  defaultValue={user?.zip_code}
                  errors={errors}
                />
              </div>
            </div>

            <div className="p-8 md:w-[24rem]">
              <div className="text-xl mb-8">
                <span className="font-semibold mr-2">Total:</span>$
                {cartTotalSum}
              </div>

              <div className="flex flex-col gap-4">
                <span
                  className={`cursor-pointer w-full rounded-full h-12 bg-slate-100 border-2 flex justify-center items-center ${
                    paymentMethod === 0 ? 'border-red-500' : 'border-gray-200'
                  }`}
                  onClick={() => {
                    setPaymentMethod(0);
                  }}
                >
                  Cash on delivery
                </span>

                <PaypalButton
                  createOrderData={createOrder}
                  setOrderDataPaypal={setOrderToPaypal}
                  totalValue={10}
                />
                <button
                  type="submit"
                  className="mt-2 cursor-pointer w-full rounded-md text-white hover:bg-gray-700 h-14 bg-gray-800 border-2 flex justify-center items-center"
                >
                  <span>Click to proceed order</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </GuestLayout>
    </>
  );
}
