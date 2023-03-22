import React from 'react';

export default function ProfileInfo({ user }: any) {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="text-2xl font-semibold">Basic Information</h3>
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
    </div>
  );
}
