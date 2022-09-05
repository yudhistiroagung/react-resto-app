import React from 'react';
import {
  TiHome,
} from 'react-icons/ti';
import {
  FiSearch
} from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <header className="sticky top-0 bg-[#FAFAFA] z-50 py-4">
      <nav className="flex flex-row justify-between items-center">

        {/** Menus */}
        <div className="flex flex-row space-x-4 text-xs text-gray-600 items-center">
          <a href="#">Home</a>
          <div className="flex flex-row items-center">
            <a href="#">Category</a>
            <RiArrowDropDownLine size={20} color="#333333" />
          </div>
          <a href="#">Services</a>
          <a href="#">About Us</a>
        </div>

        {/** ICON and APP NAME */}
        <div className="flex flex-row space-x-1 items-center">
          <TiHome size={34} color="#5A4FCF" />
          <h1 className="text-gray-600 text-base font-semibold">Resto</h1>
        </div>

        {/** SEARCH and LOGIN */}
        <div className="flex flex-row space-x-2 text-sm">
          <div className="flex flex-row rounded outline outline-gray-200 px-2 items-center space-x-1">
            <FiSearch size={18} color="#999999" />
            <input className="placeholder:text-xs placeholder:text-gray-400 text-gray-400 focus:outline-none" placeholder="Search menu..."></input>
          </div>
          <button className="p-2 px-3 bg-blue-200 rounded text-xs text-blue-500 font-medium hover:bg-blue-50">Log In</button>
        </div>

      </nav>
      {/** END NAV BAR */}
    </header>
  );
}