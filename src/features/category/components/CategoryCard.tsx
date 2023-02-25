import { categoryType } from '@/types/categoryType';
import { useRouter } from 'next/router';

type propTypes = { category: categoryType };

export default function CategoryCard({ category }: propTypes) {
  const router = useRouter();

  const navigateToCategoryProducts = () => {
    console.log(`/${router.query.category_slug}/${category.category_slug}`);

    router.push(
      `/category/${router.query.category_slug}/${category.category_slug}`
    );
  };

  return (
    <div
      className="group h-[16rem] shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={navigateToCategoryProducts}
    >
      <img
        src={
          process.env.NEXT_PUBLIC_BACKEND_IMG_URL! +
          category.category_image?.filename
        }
        className="h-[70%] w-full object-cover"
      />
      <div className=" h-[30%] flex items-center justify-center font-semibold text-lg group-hover:text-orange-500 transition-colors duration-200">
        {category.title}
      </div>
    </div>
  );
}
