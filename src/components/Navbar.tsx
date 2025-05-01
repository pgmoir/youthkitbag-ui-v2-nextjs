import Link from 'next/link';
import { JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="nav-container">
      <Link href="/" className="nav-logo">
        YouthKitbag
      </Link>
    </nav>
  );
}

export default Navbar;
