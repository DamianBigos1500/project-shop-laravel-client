import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import Table from '@/components/admin/AdminTable';
import { usersAdminService } from 'src/services/admin/usersAdmin.service';
import useFetchData from '@/hooks/admin/useFetchData';
import Link from 'next/link';
import { userType } from '@/types/userType';

const tableTh = [
  'Id',
  'Email',
  'Name',
  'Surname',
  'Phone Number',
  'Is Verified',
  'Role',
  'Actions',
];

export default function index() {
  const {
    data: users,
    loading,
    showData: showUser,
    destroyData: deleteUsers,
  } = useFetchData(
    'users',
    usersAdminService.getUsers,
    usersAdminService.deleteUser
  );

  console.log(users);

  return (
    <>
      <Head>
        <title>Profile Admin Dashboard - </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <section className="flex p-4 justify-between items-center">
            <span className="text-black text-3xl font-semibold ">
              Users: <span>{loading && <LoadingSpinner />}</span>
            </span>
            <button className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl px-6 py-2 text-sm font-semibold whitespace-nowrap">
              <Link href="/dashboard/users/create">Create new User</Link>
            </button>
          </section>
          {users.length > 0 && (
            <section className="bg-white/80 md:m-2 m-0 rounded-xl overflow-hidden">
              <Table>
                <Table.Thead data={tableTh} />
                <Table.Tbody>
                  {users.map((user: userType) => (
                    <Table.TbodyTr key={user.id}>
                      <Table.TbodyTd>{user.id}</Table.TbodyTd>
                      <Table.TbodyTd>{user.email}</Table.TbodyTd>
                      <Table.TbodyTd>{user.name}</Table.TbodyTd>
                      <Table.TbodyTd>{user.surname}</Table.TbodyTd>
                      <Table.TbodyTd>{user.phone_number}</Table.TbodyTd>
                      <Table.TbodyTd>{user.email_verified_at}</Table.TbodyTd>
                      <Table.TbodyTd>{user.role}</Table.TbodyTd>
                      <Table.TbodyButton
                        loading={loading}
                        editButton={() => showUser(user.id)}
                        deleteButton={() => deleteUsers(user.id)}
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
