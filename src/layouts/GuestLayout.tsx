import { childrenType } from '@/types/childrenType';
import GuestHeader from '@/layouts/components/GuestHeader';
import GuestContent from '@/layouts/components/GuestContent';
import GuestFooter from './components/GuestFooter';

export default function GuestLayout({ children }: childrenType) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <GuestHeader />
        <GuestContent>{children}</GuestContent>
      </div>
      <GuestFooter />
    </div>
  );
}
