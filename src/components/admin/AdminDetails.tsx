import { childrenType } from '@/types/childrenType';
import { imageType } from '@/types/imageType';
import React from 'react';

export default function AdminDetails({ children }: childrenType) {
  return (
    <section className="text-black text-3xl py-4 font-semibold">
      {children}
    </section>
  );
}

AdminDetails.Wraper = ({ children }: childrenType) => {
  return (
    <section className="bg-white/80 m-2  rounded-xl overflow-hidden">
      {children}
    </section>
  );
};

AdminDetails.Data = ({
  label,
  data,
}: {
  label: string;
  data: string | number | undefined;
}) => {
  return (
    <div className="bg-white/80 rounded-xl overflow-hidden mt-4">
      <span className="font-semibold mr-4">{label}:</span>
      {data && <span>{data}</span>}
      {!data && <span className="text-red-500">-----</span>}
    </div>
  );
};

AdminDetails.Image = ({ children }: childrenType) => {
  return (
    <section className="bg-white/80 md:m-2 m-0 rounded-xl overflow-hidden">
      {children}
    </section>
  );
};

AdminDetails.MultipleImages = ({ images }: { images: imageType[] | [] }) => {
  return (
    <div className="mt-6">
      <div className="font-semibold mr-4">Images ({images.length}):</div>

      <div className="flex gap-6 flex-wrap">
        {images.map((image: imageType) => (
          <div className="w-48 h-48 " key={image.id}>
            <img
              className=""
              src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + image.filename}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
