import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import Table from '@/components/admin/AdminTable';
import { usersAdminService } from 'src/services/admin/usersAdmin.service';
import useFetchData from '@/hooks/admin/useFetchData';

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
    usersAdminService.deleteUsers
  );

  console.log(users);

  return (
    <>
      <Head>
        <title>Profile Admin Dashboard - </title>
      </Head>

      <AdminLayout>
        <div className="overflow-x-auto md:m-10 m-0 ">
          <section className="text-black text-3xl p-4 font-semibold flex">
            Users: <span>{loading && <LoadingSpinner />}</span>
          </section>
          {users.length > 0 && (
            <section className="bg-white/80 md:m-2 m-0 rounded-xl overflow-hidden">
              <Table>
                <Table.Thead data={tableTh} />
                <Table.Tbody>
                  {users.map((user: any) => (
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
