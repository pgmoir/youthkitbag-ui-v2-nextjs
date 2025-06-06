import Link from 'next/link';
import { JSX } from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
        </svg>
        <p>
          Developing software since 1987
          <br />
          &copy; Phil Moir 2025
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">About YouthKitbag</h6>
        <Link href="/prices" className="link link-hover">
          Buy a Bundle
        </Link>
        <Link href="/help" className="link link-hover">
          Help
        </Link>
        <Link href="/media" className="link link-hover">
          Media
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Information for</h6>
        <Link href="/terms-conditions" className="link link-hover">
          Terms & Conditions
        </Link>
        <Link href="/privacy-policy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/cookies" className="link link-hover">
          Cookies
        </Link>
        <Link href="/security" className="link link-hover">
          Security
        </Link>
        <Link href="/accessibility" className="link link-hover">
          Accessibility
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Contact details</h6>
        <Link href="mailto:pgmoir@gmail.com" className="link link-hover">
          pgmoir@gmail.com
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
