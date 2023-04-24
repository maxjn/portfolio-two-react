import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <header
      className="flex items-center justify-between bg-black
     text-white px-5 py-3 fixed w-full h-[4.5rem]"
    >
      {/* Hero Text */}
      <h1 className="text-5xl font-bold font-signiture">maxjn</h1>
      {/* Nav Menu */}
      <nav>
        {/* Desktop Menu */}
        <ul className="md:flex gap-6 capitalize text-gray-400 font-medium hidden">
          {links.map(({ link, id }) => (
            <li key={id} className="hover:scale-110 duration-75 cursor-pointer">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {/* OffCanvas Menu */}
        {nav && (
          <ul className="absolute flex flex-col text-5xl items-center justify-center gap-10 capitalize text-gray-500 bg-gradient-to-b from-black to-gray-800 font-medium  left-0 right-0 top-[4.5rem] h-screen px-60 md:hidden ">
            {links.map(({ link, id }) => (
              <li
                key={id}
                className="hover:scale-110 duration-75 cursor-pointer"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      {/* OffCanvas Button */}
      <div
        className="text-gray-500 md:hidden cursor-pointer"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </header>
  );
}

export default NavBar;
