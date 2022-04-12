import { BsFillCartPlusFill } from "react-icons/bs";
const Nav = () => {
  return (
    <ul className="flex flex-col lg:flex-row md:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/about"
        >
          <span className="ml-2">About</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/foods"
        >
          <span className="ml-2">Food Catalog</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/contact"
        >
          <span className="ml-2">Contact</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/login"
        >
          <span className="ml-2">Login</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/sign-up"
        >
          <span className="ml-2">Sign UP</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/user"
        >
          <span className="ml-2">User</span>
        </a>
      </li>
      <li className="nav-item">
        <span className="absolute text-white ml-4 -mt-3 z-10 text-xs">1</span>
        <a
          className="ml-0 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/cart"
        >
          <span className="ml-2 absolute">
            <BsFillCartPlusFill className="text-2xl text-grey hover:text-white" />
          </span>
        </a>
      </li>
    </ul>
  );
};
export default Nav;
