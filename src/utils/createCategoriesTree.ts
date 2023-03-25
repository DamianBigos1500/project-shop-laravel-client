import { categoryType } from '@/types/categoryType';

export function createCategoriesTree(
  categories: categoryType[],
  parent_id: number = 0
): categoryType[] {
  const arr = categories
    .filter((category: categoryType) => category.parent_id == parent_id)
    .map((child: categoryType) => ({
      ...child,
      children: createCategoriesTree(categories, child.id),
    }));

  return arr;
}
