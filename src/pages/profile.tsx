import useAuthContext from '@/context/useAuthContext';
import GuestLayout from '@/layouts/GuestLayout';
import { protectedLoginRoute } from '@/utils/protectedRoutes/protectedLoginRoute';
import Head from 'next/head';

function profile() {
  const { user } = useAuthContext();

  return (
    <>
      <Head>
        <title>
          Profile Page - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <GuestLayout>
        <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
          <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="bg w-full h-full object-cover object-center absolute z-0"
            />
            <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                className="h-24 w-24 object-cover rounded-full"
              />
              <h1 className="text-2xl font-semibold">
                {user.name} {user.surname}
              </h1>
              <h4 className="text-sm font-semibold">{user.role}</h4>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-white ">
            <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
              <a
                href="#"
                className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold"
              >
                Basic Information
              </a>

              <a
                href="#"
                className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
              >
                Another Information
              </a>

              <a
                href="#"
                className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
              >
                Another Something
              </a>
            </div>

            <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
              <div className="px-4 pt-4">
                <form action="#" className="flex flex-col space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Basic Information
                    </h3>
                    <hr />
                  </div>

                  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <div className="form-item w-full">
                      <label className="text-xl ">Name</label>
                      <div className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
                        {user.name}
                      </div>
                    </div>

                    <div className="form-item w-full">
                      <label className="text-xl ">Surname</label>
                      <div className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
                        {user.surname}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <div className="form-item w-full">
                      <label className="text-xl ">Phone Number</label>
                      <div className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
                        {user.surname}
                      </div>
                    </div>

                    <div className="form-item w-full">
                      <label className="text-xl ">Email</label>
                      <div className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
                        {user.surname}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export default protectedLoginRoute(profile);
