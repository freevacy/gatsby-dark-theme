import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import {
  navLinks,
  navLinkItem,
  navLinkText,
  button,
} from './layout.module.css'

const ToggleMode = () => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  const [theme, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <button className={button}>
                <Link to="/" className={navLinkText}>
                Home
                </Link>
            </button>
          </li>
          <li className={navLinkItem}>
            <button className={button}>
                <Link to="/blog" className={navLinkText}>
                Blog
                </Link>
            </button>
          </li>
          <li className={navLinkItem}>
            <button className={button}>
                <Link to="/about" className={navLinkText}>
                About
                </Link>
            </button>
          </li>
          <li  className={navLinkItem}>
            <button className={button} onClick={ThemeToggle}>
                {theme === 'dark' ? (
                    <img alt="sun dark-mode" src={sun}/>
                ) : (
                    <img alt="moon dark-mode" src={moon}/>
                )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToggleMode;