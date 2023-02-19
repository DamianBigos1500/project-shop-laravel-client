import GuestLayout from '@/layouts/GuestLayout';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <GuestLayout>
        <div className="flex justify-center flex-col">
          <h1>404 - Page Not Found</h1>
          <Link href="/">Go back home</Link>
        </div>
    </GuestLayout>
  );
}
