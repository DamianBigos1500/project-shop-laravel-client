import { childrenType } from '@/types/childrenType';
import { imageType } from '@/types/imageType';
import { createImageUrl } from '@/utils/createImgUrl';
import Image from 'next/image';
import React, {
  Dispatch,
  FC,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';

export default function AdminForm({ children }: childrenType) {
  return (
    <section className="text-black text-3xl py-4 font-semibold">
      {children}
    </section>
  );
}

interface FormType extends InputHTMLAttributes<HTMLInputElement> {}

const Wraper: FC<FormType> = ({ children, ...props }) => {
  return <section className=" overflow-hidden">{children}</section>;
};
AdminForm.Wraper = Wraper;

interface FormGroupProps {
  label: string | number | undefined;
  id: string;
  children: ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ label, children, id }) => {
  return (
    <div className=" overflow-hidden mt-4 flex items-center">
      {label && (
        <label
          className="capitalize font-semibold mr-4 whitespace-nowrap"
          htmlFor={id}
        >
          {label}:
        </label>
      )}
      {children}
    </div>
  );
};

AdminForm.FormGroup = FormGroup;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
      className="outline-none rounded-full border px-4 py-2 border-gray-400 w-full"
      ref={ref}
      {...props}
    />
  );
});
AdminForm.Input = Input;

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        className="outline-none rounded-xl border px-4 py-2 border-gray-400 w-full"
        ref={ref}
        {...props}
      />
    );
  }
);

AdminForm.TextArea = TextArea;

AdminForm.Image = ({ children }: childrenType) => {
  return (
    <section className="bg-white/80 md:m-2 m-0 rounded-xl overflow-hidden">
      {children}
    </section>
  );
};

AdminForm.MultipleImages = ({
  images,
  setImages,
}: {
  images: string[];
  setImages: Dispatch<SetStateAction<string[] | []>>;
}) => {
  return (
    <div className="mt-6">
      <div className="font-semibold mr-4">Images ({images.length}):</div>

      <div className="flex gap-6 flex-wrap">
        {images.map((image: any) => (
          <div className="w-48 h-48 relative" key={image}>
            <img
              width={192}
              height={192}
              className="w-48 h-48 object-cover"
              src={URL.createObjectURL(image)}
              alt={'Admin Image'}
            />
            <button
              type="button"
              className="absolute top-0 left-0 bg-red-500 p-1 rounded-sm text-white"
              onClick={() => setImages(images.filter((e) => e !== image))}
            >
              Delete image
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

AdminForm.UpdateImages = ({
  images,
  deleteImage,
}: {
  images: imageType[] | [];
  deleteImage: (imageId: number) => {};
}) => {
  return (
    <div className="mt-4 ">
      <div className="font-semibold mb-2">Images :</div>

      <div className="flex gap-6 flex-wrap">
        {images.map((image: imageType) => (
          <div className="w-48 h-48 relative" key={image.id}>
            <img
              width={192}
              height={192}
              className="w-48 h-48  object-cover"
              src={createImageUrl(image.filename)}
              alt={'Admin Image'}
            />
            <button
              type="button"
              className="absolute top-0 left-0 bg-red-500 p-1 rounded-sm text-white"
              onClick={() => deleteImage(image.id)}
            >
              Delete image
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
