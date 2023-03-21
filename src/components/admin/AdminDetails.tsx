import { childrenType } from '@/types/childrenType';
import { imageType } from '@/types/imageType';
import Image from 'next/image';
import React from 'react';

export default function AdminDetails({ children }: childrenType) {
  return (
    <section className="flex items-center justify-between">{children}</section>
  );
}

AdminDetails.Wraper = ({ children }: childrenType) => {
  return <section className="overflow-hidden">{children}</section>;
};

AdminDetails.Data = ({
  label,
  data,
}: {
  label: string;
  data: string | number | undefined;
}) => {
  return (
    <div className="overflow-hidden mt-4">
      <span className="font-semibold mr-4">{label}:</span>
      {data && <span>{data}</span>}
      {!data && <span className="text-red-500">-----</span>}
    </div>
  );
};

AdminDetails.MultipleImages = ({ images }: { images: imageType[] | [] }) => {
  return (
    <div className="mt-4 ">
      <div className="font-semibold mb-2">Images :</div>

      <div className="flex gap-6 flex-wrap">
        {images.map((image: imageType) => (
          <div className="w-48 h-48 " key={image.id}>
            <Image
              className="object-cover"
              src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + image.filename}
              alt={'Admin Image'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
