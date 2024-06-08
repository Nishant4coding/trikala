import logo from '../../assets/logo.png'

function Nav() {
  return (
    <nav className="bg-custom-bg py-4 font-custom">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 sm:h-20" />
        </a>
        <div className="hidden md:flex md:items-center">
          <ul className="flex flex-row gap-4 sm:gap-10 md:gap-20 text-sm sm:text-lg md:text-xl">
            <li>
              <a
                href="#"
                className="text-gray-700 font-silverqueen font-bold tracking-wider"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-silverqueen font-bold tracking-wider"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-silverqueen font-bold tracking-wider"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-silverqueen font-bold tracking-wider"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
