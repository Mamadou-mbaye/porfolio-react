import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
  //const body: HTMLBodyElement = document.body as HTMLBodyElement;
  const [bodyWidth, setBodyWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setBodyWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleMenu();
    /*return () => {
      window.removeEventListener("resize", handleResize);
    };*/
  }, [bodyWidth]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenu = () => {
    const header: HTMLElement = document.getElementById(
      "header"
    ) as HTMLElement;
    const nav_links: HTMLElement = document.getElementById(
      "nav-links"
    ) as HTMLElement;
    const menu: HTMLElement = document.querySelector("#menu") as HTMLElement;
    const links: HTMLElement = document.querySelector("#links") as HTMLElement;

    if (bodyWidth < 768) {
      // Rimuove la classe "hidden" dal menu e aggiunge la classe "hidden" ai links
      menu.classList.remove("hidden");
      links.classList.add("hidden");
      nav_links.classList.remove("w-3/4");
    } else {
      header.classList.add("justify-between");
      header.classList.remove("flex-col");
      menu.classList.remove("justify-self-center");
      menu.classList.add("hidden");
      links.classList.remove("hidden");
      links.classList.remove("flex-col");
      nav_links.classList.add("w-3/4");
    }
  };
  useEffect(() => {
    handleMenu();
  }, []);

  return (
    <header
      id="header"
      className={`sticky top-0 bg-slate-500 flex ${
        isMenuOpen ? "justify-center" : "justify-between"
      } ${
        isMenuOpen ? "flex-col" : "flex-row"
      } items-center flex-wrap gap-3 text-xl min-h-10 w-full min-w-80 px-3 `}
    >
      <h1 id="titolo" translate="no">
        Modu.dev
      </h1>
      <nav id="nav-links" className="flex flex-col items-center gap-3 w-3/4">
        <span
          id="menu"
          className="hidden hover:text-gray-400 cursor-pointer"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </span>
        <ul
          id="links"
          className={`list-none flex gap-3 flex-wrap items-center w-full justify-between ${
            isMenuOpen ? "flex-col" : "hidden"
          }`}
        >
          <li className="hover:text-gray-300">
            <a href="#main">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#info">About</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#info">Portfolio</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#social-links">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;