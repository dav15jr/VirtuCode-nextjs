'use client';

import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link className="flex items-center flex-shrink-0" href="#hero">
            <Image
              className="mr-2"
              src="/assets/logo.png"
              alt="logo"
              height="40"
              width="40"
            />
            <span className="text-xl tracking-tight">VirtuCode</span>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-purple-400 hover:font-bold">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              href="#"
              className="py-2 px-3 border rounded-md  hover:rounded-3xl hover:border-purple-600"
            >
              {' '}
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md hover:bg-none border hover:border-purple-600 hover:rounded-3xl"
            >
              {' '}
              Create an Account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavMenu}>
              {navMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {navMenuOpen && (
          <div className="fixed right-0 z-20 bg-zinc-900 w-full p-8 flex flex-col justify-center items-center lg:hidden">
            <ul className=" flex flex-col items-center pb-4">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 border rounded-md"
              >
                Create an Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
