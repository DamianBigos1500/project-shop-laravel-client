import Link from 'next/link';
import useAuthContext from '../../context/authContext';
import Header from './Elements/Header';
import Toolbar from './Elements/Toolbar';

export default function Navbar() {

  return (
    <div >
      <Header />
      <Toolbar />
    </div>
  );
}
