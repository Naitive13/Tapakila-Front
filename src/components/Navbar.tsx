export default function Navbar() {
  return (
    <div className="shadow-sm navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 w-52 shadow menu menu-sm dropdown-content bg-primary text-primary-content rounded-box z-1"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl btn btn-ghost">Tapakila</a>
      </div>
      <div className="navbar-end text-base-content">
        <label className="input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
    </div>
  );
}
