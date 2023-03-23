import { categoryType } from '@/types/categoryType';
import { createImageUrl } from '@/utils/createImgUrl';
import Image from 'next/image';
import { useRouter } from 'next/router';

type propTypes = { category: categoryType };

export default function CategoryCard({ category }: propTypes) {
  const router = useRouter();

  const navigateToCategoryProducts = () => {
    router.push(
      `/category/${router.query.category_slug}/${category.category_slug}`
    );
  };

  return (
    <div
      className="group h-[16rem] shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={navigateToCategoryProducts}
    >
      <Image
        src={createImageUrl(category.category_image?.filename)}
        className="h-[70%] w-full object-cover"
        width={320}
        height={256}
        alt={category.title + ' image'}
      />
      <div className=" h-[30%] flex items-center justify-center font-semibold text-lg group-hover:text-violet-500 transition-colors duration-200">
        {category.title}
      </div>
    </div>
  );
}
