import { productType } from '@/types/productType';
import AdminLayout from '@/layouts/AdminLayout';
import Head from 'next/head';
import Table from '@/components/admin/AdminTable';
import { productsAdminService } from 'src/services/admin/productsAdmin.service';
import useFetchData from '@/hooks/admin/useFetchData';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

// type propsType = {
//   products: productType[];
// };

const tableTh = [
  'Id',
  'Image',
  'Name',
  'Category',
  'Price',
  'Discount',
  'Actions',
];

export default function index() {
  const {
    data: products,
    loading,
    showData: showProduct,
    destroyData: deleteProducts,
  } = useFetchData(
    'products',
    productsAdminService.getProducts,
    productsAdminService.deleteProducts
  );

  return (
    <>
      <Head>
        <title>Profile Admin Dashboard - </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:mt-10 m-0 ">
          <section className=" flex p-4 justify-between items-center">
            <span className="text-black text-3xl font-semibold ">
              Products: <span>{loading && <LoadingSpinner />}</span>
            </span>
            <button className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl px-6 py-2 text-sm font-semibold whitespace-nowrap">
              <Link href="/dashboard/products/create">Create new Product</Link>
            </button>
          </section>
          {products.length > 0 && (
            <section className="bg-white/80 md:m-2 m-0 rounded-xl overflow-hidden">
              <Table>
                <Table.Thead data={tableTh} />
                <Table.Tbody>
                  {products.map((product: productType) => (
                    <Table.TbodyTr key={product.id}>
                      <Table.TbodyTd>{product.id}</Table.TbodyTd>
                      <Table.TbodyImg url={product.images[0].filename} />
                      <Table.TbodyTd>{product.name}</Table.TbodyTd>
                      <Table.TbodyTd>{product.category?.title}</Table.TbodyTd>
                      <Table.TbodyTd>${product.regular_price}</Table.TbodyTd>
                      <Table.TbodyTd>
                        ${product.discount_price ?? 0}
                      </Table.TbodyTd>
                      <Table.TbodyButton
                        loading={loading}
                        editButton={() => showProduct(product.id)}
                        deleteButton={() => deleteProducts(product.id)}
                      />
                    </Table.TbodyTr>
                  ))}
                </Table.Tbody>
              </Table>
            </section>
          )}
        </div>
      </AdminLayout>
    </>
  );
}
