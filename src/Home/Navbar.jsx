import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black text-white w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3"><img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="" /><span className="text-xl font-semibold">Instant</span></Link>
        <button type="button" className="inline-flex items-center justify-center w-10 h-10 md:hidden" aria-label="Open main menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <div className={(open ? 'block ' : 'hidden ') + 'w-full md:block md:w-auto'}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
