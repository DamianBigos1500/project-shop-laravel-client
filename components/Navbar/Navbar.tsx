import Link from 'next/link';
import useAuthContext from '../../context/authContext';

export default function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
        <button onClick={() => logout()}>Logout</button>

        <ul>
          <li>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
