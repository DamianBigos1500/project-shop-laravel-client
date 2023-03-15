import { productType } from '@/types/productType';
import { getProducts } from '@/features/products/services/productService';
import AdminLayout from '@/layouts/AdminLayout';
import Head from 'next/head';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

type propsType = {
  products: productType[];
};

const tableThs = ['Id', 'Image', 'Name', 'Category', 'Price', 'Actions'];

export default function index({ products }: propsType) {
  console.log(products);

  return (
    <>
      <Head>
        <title>Profile Admin Dashboard - </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto m-10 ">
          <section className="text-black text-3xl p-4 font-semibold">
            Products:
          </section>
          <section className="bg-white/80 m-2 rounded-xl overflow-hidden">
            <table className="w-full table-fixed">
              <thead className="px-2 py-4">
                <tr className="h-16 bg-blue-200/80 transition-colors ">
                  {tableThs.map((th) => {
                    return (
                      <th
                        scope="col"
                        className=" hover:bg-blue-300/80 duration-200 p-2"
                      >
                        <div className="flex justify-center items-center gap-6">
                          <span>{th}</span>
                          <IoIosArrowDown size={20} className={`duration-200`} />
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {products.map((product: productType) => {
                  return (
                    <tr
                      key={product.id}
                      className="h-16 even:bg-blue-200/50 odd:bg-blue-100/50 hover:bg-blue-200 duration-100"
                    >
                      <td scope="row" className="px-4 text-center w-10">
                        {product.id}
                      </td>

                      <td className="p-1 h-full ">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_IMG_URL +
                            product.images[0].filename
                          }
                          className="w-10 h-10 rounded-full mx-auto"
                        />
                      </td>
                      <td
                        scope="row"
                        className="px-4 text-center whitespace-nowrap overflow-hidden  text-ellipsis"
                      >
                        {product.name}
                      </td>
                      <td className="p-1 text-center whitespace-nowrap overflow-hidden  text-ellipsis">
                        Laptop
                      </td>
                      <td className="p-1 text-center whitespace-nowrap overflow-hidden  text-ellipsis">
                        {product.regular_price} $
                      </td>
                      <td className="p-1 text-center whitespace-nowrap overflow-hidden  text-ellipsis">
                        <div className="text-white flex justify-center">
                          <button
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full mr-2"
                            onClick={() => {}}
                          >
                            <MdOutlineModeEditOutline size={18} />
                          </button>
                          <button
                            className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-900 rounded-full"
                            onClick={() => {}}
                          >
                            <BsTrash size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getStaticProps() {
  const res = await getProducts();

  return {
    props: { products: res.data.products.data },
  };
}
