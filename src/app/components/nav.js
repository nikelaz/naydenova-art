'use client';
import { useState, useEffect, useRef } from 'react';
import { comfortaa } from '../fonts';
import NavLink from './nav-link';
import './nav.sass';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rootEl = useRef(null);

  const toggleNav = () => setIsOpen(!isOpen);

  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    const bodyClickHandler = (event) => {
      const target = event.target;
      const navEl = rootEl.current;
      if (target === navEl || navEl.contains(target)) return;
      closeNav();
    };

    document.body.addEventListener('click', bodyClickHandler);

    return () => {
      document.body.removeEventListener('click', bodyClickHandler);
    };
  }, [setIsOpen]);

  return (
    <div ref={rootEl}>
      <button className="block sm:hidden" onClick={toggleNav} aria-label="Open Navigation">
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" className="text-pink-900" height="1.9em" viewBox="0 0 132 85">
          <path fill="currentColor" d="m1.9 4v-3h128.9v3zm0 40v-3h128.8v3zm0 40v-3h128.9v3z"/>
        </svg>
      </button>
      <nav className={`nav ${isOpen && 'is-open'} flex gap-x-10 ${comfortaa.className} font-light text-lg`}>
        <button onClick={closeNav} className="nav_closeBtn text-right">
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" className="inline-block text-pink-900" height="1.9em" viewBox="0 0 83 84">
            <path fill="currentColor" d="m-0.2 2.1l2.1-2.2 81.1 81.1-2.1 2.2zm81.1-2.2l2.1 2.2-81.1 81.1-2.1-2.2z"/>
          </svg>
        </button>
        <NavLink href="/gallery" onClick={closeNav} className='navLink'>Галерия</NavLink>
        <NavLink href="/about" onClick={closeNav} className='navLink'>За Мен</NavLink>
        <NavLink href="/blog" onClick={closeNav} className='navLink'>Блог</NavLink>
        <NavLink href="/contact" onClick={closeNav} className='navLink'>Контакти</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
