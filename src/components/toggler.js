import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
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
                home
                </Link>
            </button>
          </li>
          <li className={navLinkItem}>
            <button className={button}>
                <Link to="/blog" className={navLinkText}>
                blog
                </Link>
            </button>
          </li>
          <li className={navLinkItem}>
            <button className={button}>
                <Link to="/about" className={navLinkText}>
                about
                </Link>
            </button>
          </li>
          <li  className={navLinkItem}>
            <button className={button} onClick={ThemeToggle}>
                {theme === 'dark' ? (
                    <Link className={navLinkText}>light</Link>
                ) : (
                    <Link className={navLinkText}>dark</Link>
                )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToggleMode;