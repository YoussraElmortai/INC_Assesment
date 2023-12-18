import { Link, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <h1>UNC INC</h1>
      <section>
        <button onClick={toggleMenu}>menu</button>
        {isMenuOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <ul>
              <li>
                <a href="/Profile">Profile</a>
              </li>
              <li>
                <a href="/Dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/Settings">Settings</a>
              </li>
            </ul>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;