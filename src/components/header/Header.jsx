import React, { useState, useRef } from "react";
import Nav from "./Nav";
import Login from "./Login";
import TheaterList from "./TheaterList";
import { Link } from "react-router-dom";
import CitySelector from "./CitySelector";
import UseClickOutside from "@/hooks/UseClickOutside";
import { Search, MapPin, HelpCircle, User, Menu } from "lucide-react";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isTheaterOpen, setIsTheaterOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(" ");
console.log(isDropdownOpen);
  UseClickOutside(dropdownRef, () => setDropdownOpen(false));

  return (
    <div className="border-b-2 border-gray-200 bg-white">
      <header className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto flex justify-between items-center py-5 text-[15px] text-gray-400">
        {/* Menu Phone */}
        <button
          onClick={() => setIsOpen(isOpen == "menu" ? "" : "menu")}
          className="lg:hidden"
        >
          <Menu size={25} />
        </button>
        {/* Menu Lap Top */}
        <Nav isHidden={true} setIsTheaterOpen={setIsTheaterOpen} />
        <Link onClick={() => toggleDropdown()} to="/" className="w-[25%] lg:w-[8%]">
          <img src="https://cdn.moveek.com/bundles/ornweb/img/logo.png" alt="logo" />
        </Link>
        <div className="hidden lg:flex relative items-center">
          <Search className="absolute left-3" size={17} />
          <input
            type="text"
            placeholder="Từ khoá tìm kiếm"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)]"
          />
        </div>
        <div className="flex gap-6">
          {/* Thanh tìm kiếm địa điểm */}
          <button
            className="hover:text-gray-600"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <MapPin size={17} />
          </button>
          {isDropdownOpen && <CitySelector setDropdownOpen={setDropdownOpen} />}
          <button className="flex items-center gap-2 hover:text-gray-600">
            <HelpCircle size={17} />
            <span className="hidden lg:inline ">Hỗ trợ</span>
          </button>
          {/* Đăng nhập */}
          <button
            className="hover:text-gray-600"
            onClick={() => setLogin(!isLogin)}
          >
            <User size={17} />
          </button>
          {isLogin && <Login setLogin={setLogin} />}
        </div>
      </header>
      {isOpen == "menu" && (
        <div className="lg:hidden overflow-hidden top-17 left-0 w-full h-auto bg-white backdrop-brightness-100 z-40 border-t-1 border-gray-200 pb-5">
          <div className="m-5 flex relative items-center">
            <input
              type="text"
              placeholder="Từ khoá tìm kiếm..."
              className="w-full pl-5 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)]"
            />
          </div>
          <Nav isHidden={false} setIsTheaterOpen={setIsTheaterOpen} />
        </div>
      )}
      {isTheaterOpen && (
        <TheaterList
          isTheaterOpen={isTheaterOpen}
          setIsTheaterOpen={setIsTheaterOpen}
        />
      )}
    </div>
  );
}
