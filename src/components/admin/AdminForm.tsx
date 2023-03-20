import { childrenType } from '@/types/childrenType';
import { imageType } from '@/types/imageType';
import { onChangeType } from '@/types/onChangeType';
import React, {
  FC,
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
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
  return (
    <section className="bg-white/80 m-2  rounded-xl overflow-hidden">
      {children}
    </section>
  );
};
AdminForm.Wraper = Wraper;

interface FormGroupProps {
  label: string | number | undefined;
  id: string;
  children: ReactNode;
}

const FormGroup: FC<FormGroupProps> = ({ label, children, id }) => {
  return (
    <div className="bg-white/80 rounded-xl overflow-hidden mt-4 flex items-center">
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

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | number;
}
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ defaultValue, ...props }, ref) => {
    return (
      <input
        className="outline-none rounded-full border px-4 py-2 border-gray-400 w-full"
        ref={ref}
        {...props}
        defaultValue={defaultValue}
      />
    );
  }
);
AdminForm.Input = Input;

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string | number;
}
const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ defaultValue, ...props }, ref) => {
  return (
    <textarea
      className="outline-none rounded-xl border px-4 py-2 border-gray-400 w-full"
      ref={ref}
      defaultValue={defaultValue}
      {...props}
    />
  );
});

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
  images: string[] | [];
  setImages: any;
}) => {
  return (
    <div className="mt-6">
      <div className="font-semibold mr-4">Images ({images.length}):</div>

      <div className="flex gap-6 flex-wrap">
        {images.map((image: any) => (
          <div className="w-48 h-48 relative" key={image}>
            <img
              className="w-48 h-48 object-cover"
              src={URL.createObjectURL(image)}
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
