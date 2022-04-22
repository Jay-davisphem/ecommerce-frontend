import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
const Nav = () => {
  return (
    <ul className="flex flex-col lg:flex-row md:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        <Link href="/about/">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2">About</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/foods/">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2">Food Catalog</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contact-us/">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2">Contact</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/account/login/">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2">Login</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/account/sign-up/">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2">Sign UP</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/account/settings/">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2">User Settings</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <span className="absolute text-white ml-4 -mt-3 z-10 text-xs">1</span>
        <Link href="/cart/">
          <a className="ml-0 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2 absolute">
              <BsFillCartPlusFill className="text-2xl text-grey hover:text-white" />
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
};
export default Nav;
