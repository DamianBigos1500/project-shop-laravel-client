import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col">
        <h1>404 - Page Not Found</h1>
        <Link href="/">Go back home</Link>
      </div>
    </div>
  );
}
