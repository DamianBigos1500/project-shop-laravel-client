import { productType } from '@/types/productType';
import { getProducts } from '@/features/products/services/productService';
import AdminLayout from '@/layouts/AdminLayout';
import Head from 'next/head';

export default function index({ products }: any) {
  return (
    <>
      <Head>
        <title>Profile Admin Dashboard - </title>
      </Head>

      <AdminLayout>
        <div className="elative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: productType, index: number) => {
                return (
                  <tr
                    key={product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getServerSideProps(_context: any) {
  const res = await getProducts();
  console.log(res.data);

  return {
    props: { products: res.data.products.data },
  };
}
