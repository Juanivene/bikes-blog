import Link from 'next/link';

import bangers from '@/styles/fontBanger';

const Header = (): React.ReactElement => (
  <header className="bg-gradient-to-r from-gray-900 to-black p-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="navbar-start flex items-center md:hidden">
        <div className="dropdown">
          <button className="btn btn-circle btn-ghost text-white" type="button">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-lg bg-white p-2 shadow-lg">
            <li>
              <Link className="text-gray-800 hover:text-yellow-suave" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-yellow-suave"
                href="/favorites"
              >
                Motos
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-yellow-suave"
                href="/about"
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden items-center space-x-8 md:flex">
        <Link className="text-white hover:text-yellow-suave" href="/">
          Inicio
        </Link>
        <Link className="text-white hover:text-yellow-suave" href="/favorites">
          Motos
        </Link>
        <Link className="text-white hover:text-yellow-suave" href="/about">
          Sobre Nosotros
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          className={`text-3xl font-semibold text-yellow-500 ${bangers.className}`}
          href="/"
        >
          BikeWorld
        </Link>
      </div>
      <div className="navbar-end flex">
        <button className="btn btn-circle btn-ghost text-white" type="button">
          <div className="indicator p-1">⭐</div>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
