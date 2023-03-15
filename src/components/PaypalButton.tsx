import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';

const initialOptions: any = {
  'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
};

export default function PaypalButton() {
  const price = '19';

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          color: 'silver',
          layout: 'horizontal',
          height: 48,
          tagline: false,
          shape: 'pill',
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'description',
                amount: {
                  value: price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions: any) => {
          const order = await actions.order.capture();

          // update order

          console.log('approve finished');
        }}
        onError={(error) => {
          console.log('error');
        }}
        onClick={() => {
          // validate form / create order
        }}
      />
    </PayPalScriptProvider>
  );
}
