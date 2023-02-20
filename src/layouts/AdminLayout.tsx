import { childrenType } from '@/types/childrenType';
import AdminHeader from '@/layouts/components/AdminHeader';

export default function AdminLayout({ children }: childrenType) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
