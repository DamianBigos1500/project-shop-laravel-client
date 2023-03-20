import PaypalButton from '@/components/PaypalButton';
import { InputCheckout } from '@/components/UI/Input/InputCheckout';
import useAuthContext from '@/context/useAuthContext';
import GuestLayout from '@/layouts/GuestLayout';
import { onSubmitType } from '@/types/onSubmitType';
import { useSignal } from '@preact/signals-react';
import Head from 'next/head';
import React, { useRef } from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';

export default function index() {
  const { user } = useAuthContext();

  const emailRef = useRef<HTMLInputElement>();
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const telephoneRef = useRef<HTMLInputElement>();
  const deliveryAddressRef = useRef<HTMLInputElement>();
  const townRef = useRef<HTMLInputElement>();
  const zipCodeRef = useRef<HTMLInputElement>();
  const countryRef = useRef<HTMLInputElement>();

  const paymentMethod = useSignal<number | null>(null);

  console.log(paymentMethod.value);

  const submitForm = (e: onSubmitType) => {
    e.preventDefault();

    console.log({
      email: emailRef.current?.value,
      name: firstNameRef.current?.value,
      surname: lastNameRef.current?.value,
      telephone: telephoneRef.current?.value,
      address: deliveryAddressRef.current?.value,
      zip_code: zipCodeRef.current?.value,
    });

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
            className="flex md:flex-row flex-col rounded-xl bg-gray-200"
            onSubmit={submitForm}
          >
            <div className="flex-1 p-8">
              <div className="flex flex-col gap-4">
                <h2 className="w-full py-4 font-semibold text-2xl ">
                  Delivery address:
                </h2>

                <InputCheckout
                  ref={emailRef}
                  id="email_2"
                  type="email"
                  placeholder="Email *"
                  defaultValue={user?.email}
                />

                <div className="flex gap-10 ">
                  <InputCheckout
                    ref={firstNameRef}
                    id="first_name"
                    type="text"
                    placeholder="First name *"
                    defaultValue={user?.email}
                  />
                  <InputCheckout
                    ref={lastNameRef}
                    id="last_name"
                    type="text"
                    placeholder="Last name *"
                    defaultValue={user?.email}
                  />
                </div>

                <InputCheckout
                  ref={telephoneRef}
                  id="telephone"
                  type="text"
                  placeholder="Telephone *"
                  defaultValue={user?.email}
                />

                <InputCheckout
                  ref={deliveryAddressRef}
                  id="delivery_address"
                  type="text"
                  placeholder="Delivery address *"
                  defaultValue={user?.email}
                />

                <InputCheckout
                  ref={townRef}
                  id="delivery_address"
                  type="text"
                  placeholder="Town *"
                  defaultValue={user?.email}
                />

                <InputCheckout
                  ref={zipCodeRef}
                  id="delivery_address"
                  type="text"
                  placeholder="ZIP code *"
                  defaultValue={user?.email}
                />

                <InputCheckout
                  ref={countryRef}
                  id="delivery_address"
                  type="text"
                  placeholder="Country *"
                  defaultValue={user?.email}
                />
              </div>
            </div>

            <div className="p-8 md:w-[24rem]">
              <div className="text-xl mb-8">Total: </div>

              <div className="flex flex-col gap-4">
                <span
                  className={`cursor-pointer w-full rounded-full h-10 bg-slate-100 border-2 flex justify-center items-center ${
                    paymentMethod.value === 0
                      ? 'border-red-500'
                      : 'border-transparent'
                  }`}
                  onClick={() => {
                    paymentMethod.value = 0;
                  }}
                >
                  Cash on delivery
                </span>
                <span
                  className={`cursor-pointer w-full rounded-full h-10 bg-slate-100 border-2 flex justify-center items-center ${
                    paymentMethod.value === 1
                      ? 'border-red-500'
                      : 'border-transparent'
                  }`}
                  onClick={() => {
                    paymentMethod.value = 1;
                  }}
                >
                  <span className="mr-2">PayPal</span>
                  <AiOutlineCreditCard />
                </span>
                <PaypalButton />
                <button
                  type="submit"
                  className="mt-10 cursor-pointer w-full rounded-md text-white hover:bg-gray-700 h-14 bg-gray-800 border-2 flex justify-center items-center"
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
