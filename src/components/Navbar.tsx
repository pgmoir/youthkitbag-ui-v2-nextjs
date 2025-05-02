import Link from 'next/link';
import { JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar bg-primary text-primary-content">
      <Link href="/" className="link link-hover text-base-300">
        YouthKitbag
      </Link>
    </nav>
  );
}

export default Navbar;
