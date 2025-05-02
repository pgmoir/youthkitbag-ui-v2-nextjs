import Link from 'next/link';
import { JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar sticky top-0 z-50 bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          YouthKitbag
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link href="/#kitbags">Kitbags</Link>
          </li>
          <li>
            <Link href="/#groups">Groups</Link>
          </li>
          <li>
            <Link href="/#trust">Trust</Link>
          </li>
          <li>
            <Link href="/#market">Market</Link>
          </li>
          <li>
            <Link href="/#signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn text-base">
          Log In
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/#kitbags">Kitbags</Link>
            </li>
            <li>
              <Link href="/#groups">Groups</Link>
            </li>
            <li>
              <Link href="/#trust">Trust</Link>
            </li>
            <li>
              <Link href="/#market">Market</Link>
            </li>
            <li>
              <Link href="/#signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
