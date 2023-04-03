import { orderType } from '@/types/orderType';
import {
  PayPalButtons,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
} from '@paypal/react-paypal-js';
import React from 'react';

// const initialOptions: any = {
//   'client-id': `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
//   [SCRIPT_ID]: SCRIPT_ID,
// };

type propsType = {
  createOrderData(): any;
  setOrderDataPaypal(id: number): void;
  totalValue: string | number;
};

export default function PaypalButton({
  createOrderData,
  setOrderDataPaypal,
  totalValue = 10,
}: propsType) {
  return null
  // return (
    // <PayPalScriptProvider options={initialOptions}>
    //   <PayPalButtons
    //     style={{
    //       color: 'silver',
    //       layout: 'horizontal',
    //       height: 48,
    //       tagline: false,
    //       shape: 'pill',
    //     }}
    //     createOrder={(data, actions) => {
    //       return actions.order.create({
    //         purchase_units: [
    //           {
    //             description: 'description',
    //             amount: {
    //               value: String(totalValue),
    //             },
    //           },
    //         ],
    //       });
    //     }}
    //     onApprove={async (data, actions: any) => {
    //       console.log('approve', data);
    //       try {
    //         const newOrder = await createOrderData();
    //         await actions.order.capture();
    //         await setOrderDataPaypal(newOrder.id);
    //       } catch (error) {}

    //       // update order

    //       console.log('approve finished');
    //     }}
    //     onError={(error) => {
    //       console.log('error');
    //     }}
    //     onClick={() => {
    //       // validate form / create order
    //     }}
    //   />
    // </PayPalScriptProvider>
  // );
}
