import Header from '@/components/Navbar/Elements/Header';
import Toolobar from '@/components/Navbar/Elements/Toolbar';
import Categories from '@/features/category/components/Categories';
import useScrollPosition from '@/hooks/useScrollPosition';

export default function Navbar() {
  const scrollPosition = useScrollPosition(500);
  const isScrollPositive = scrollPosition > 4;

  return (
    <div className={`fixed top-0 z-20 w-full bg-white :`}>
      <Header />
      <Toolobar isScrollPositive={isScrollPositive} />
      <Categories />
    </div>
  );
}
