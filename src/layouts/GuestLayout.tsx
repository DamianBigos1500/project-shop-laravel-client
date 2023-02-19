import { childrenType } from '@/types/childrenType';
import GuessHeader from '@/layouts/components/GuestHeader';
import GuestContent from '@/layouts/components/GuestContent';

export default function GuestLayout({ children }: childrenType) {
  return (
    <div>
      <GuessHeader />
      <GuestContent>{children}</GuestContent>
    </div>
  );
}
