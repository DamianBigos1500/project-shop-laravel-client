export function createCategoriesTree(categories: any, parent_id: number = 0) {
  const arr = categories
    .filter((category: any) => category.parent_id == parent_id)
    .map((child: any) => ({
      ...child,
      children: createCategoriesTree(categories, child.id),
    }));

  return arr;
}
