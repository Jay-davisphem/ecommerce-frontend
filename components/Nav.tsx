const Nav = () => {
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="#pablo"
        >
          <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
          <span className="ml-2">Share</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="#pablo"
        >
          <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
          <span className="ml-2">Tweet</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="#pablo"
        >
          <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
          <span className="ml-2">Pin</span>
        </a>
      </li>
    </ul>
  );
};
export default Nav;
