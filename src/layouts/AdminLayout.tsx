import { childrenType } from '@/types/childrenType';
import AdminSidebar from './components/AdminSidebar';

export default function AdminLayout({ children }: childrenType) {

  return (
    <div className="flex bg-gray-100">
      <AdminSidebar />
      <main className="max-w-6xl flex-1 mx-auto px-4">{children}</main>
    </div>
  );
}
