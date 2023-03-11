import Header from '@/components/Navbar/Elements/Header';
import Toolobar from '@/components/Navbar/Elements/Toolbar';
import Categories from '@/features/category/components/Categories';
import useScrollPosition from '@/hooks/useScrollPosition';

export default function Navbar() {
  const scrollPosition = useScrollPosition(100);
  const isScrollPositive = scrollPosition > 10;

  return (
    <div className={`fixed z-20 top-0 w-full bg-white shadow-xl`}>
      <Header />
      <Toolobar isScrollPositive={isScrollPositive} />
      <Categories isScrollPositive={isScrollPositive} />
    </div>
  );
}
