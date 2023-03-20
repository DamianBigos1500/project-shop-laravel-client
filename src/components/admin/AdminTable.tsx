import { childrenType } from '@/types/childrenType';
import { productType } from '@/types/productType';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineModeEditOutline } from 'react-icons/md';

export default function Table({ children }: childrenType) {
  return <table className="w-full table-fixed">{children}</table>;
}

Table.Thead = ({ data }: any) => {
  return (
    <thead className="px-2 py-4">
      <tr className="h-16 bg-blue-200/80 transition-colors ">
        {data.map((name: string, index: number) => {
          return (
            <th
              key={index}
              scope="col"
              className=" hover:bg-blue-300/80 duration-200 p-2"
            >
              <div className="flex justify-center items-center gap-6">
                <span>{name}</span>
                <IoIosArrowDown size={20} className={`duration-200`} />
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

Table.Tbody = ({ children }: childrenType) => {
  return <tbody>{children}</tbody>;
};

Table.TbodyTr = ({ id, children }: any) => {
  return (
    <tr className="h-16 even:bg-blue-200/50 odd:bg-blue-100/50 hover:bg-blue-200 duration-100">
      {children}
    </tr>
  );
};

Table.TbodyTd = ({ children }: any) => {
  return (
    <td className="text-center whitespace-nowrap overflow-hidden  text-ellipsis">
      {children}
    </td>
  );
};

Table.TbodyImg = ({ url }: any) => {
  return (
    <td className="p-1 h-full ">
      <img
        src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + url}
        className="w-10 h-10 rounded-full mx-auto object-cover"
      />
    </td>
  );
};

Table.TbodyButton = ({
  loading = false,
  editButton = () => {},
  deleteButton = () => {},
}: any) => {
  return (
    <td className="p-1 text-center whitespace-nowrap overflow-hidden  text-ellipsis">
      <div className="text-white flex justify-center">
        <button
          disabled={loading}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full mr-2 disabled:opacity-50"
          onClick={editButton}
        >
          <MdOutlineModeEditOutline size={18} />
        </button>
        <button
          disabled={loading}
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-900 rounded-full disabled:opacity-50"
          onClick={deleteButton}
        >
          <BsTrash size={18} />
        </button>
      </div>
    </td>
  );
};
