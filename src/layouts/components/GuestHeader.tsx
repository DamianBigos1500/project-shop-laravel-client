import Header from '@/components/Navbar/Elements/Header';
import Toolobar from '@/components/Navbar/Elements/Toolbar';
import Categories from '@/features/category/components/Categories';

export default function Navbar() {
  return (
    <div className={`fixed z-20 top-0 w-full bg-white shadow-xl`}>
      <Header />
      <Toolobar />
      <Categories />
    </div>
  );
}
