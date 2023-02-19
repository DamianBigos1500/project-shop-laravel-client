import { childrenType } from '@/types/childrenType';
import AdminNavbar from '@/layouts/components/AdminHeader';

export default function AdminLayout({ children }: childrenType) {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
}
