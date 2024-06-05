import logo from '../../assets/logo.png'

function Nav() {
  return (
    <nav className="bg-custom-bg p-4">
      <div className=" mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-20" />
          
        </a>
        <ul className="flex flex-row gap-20 text-xl">
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
              Galary
            </a>
          </li>
       
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
