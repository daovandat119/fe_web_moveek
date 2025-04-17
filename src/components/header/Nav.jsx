import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import UseClickOutside from "@/hooks/UseClickOutside";

export default function Nav({ isHidden, setIsTheaterOpen }) {
  const [isOpen, setIsOpen] = useState(" ");
  const dropdownRef = useRef(null);
  UseClickOutside(dropdownRef, () => setIsOpen(" "));

  return (
    <nav>
      <ul
        className={`gap-3 text-gray-400 ${
          isHidden ? "hidden lg:flex" : "flex flex-col mx-6"
        }`}
      >
        <li>
          <Link
            className="text-red-500 hover:text-red-700"
            onClick={() => toggleDropdown()}
            to="/buy-ticket"
          >
            Đặt vé phim chiếu rạp
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black"
            onClick={() => toggleDropdown()}
            to="/movie-showtimes"
          >
            Lịch chiếu
          </Link>
        </li>
        <li className={`${isHidden ? "relative" : " "}`}>
          <button
            className="flex items-center gap-1 hover:text-black"
            onClick={() => setIsOpen(isOpen === "movie" ? "" : "movie")}
          >
            Phim <ChevronDown size={19} />
          </button>
          {isOpen === "movie" && (
            <div
              ref={dropdownRef}
              className={`top-full left-0 mt-2 w-48 bg-white z-50 ${
                isHidden
                  ? "absolute border border-gray-200 shadow-lg rounded-md"
                  : " "
              }`}
            >
              <ul className="py-0 lg:py-2">
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/movie-is-showing"
                  >
                    Đang Chiếu
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/upcoming-movie"
                  >
                    Sắp Chiếu
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/early-movie"
                  >
                    Chiếu sớm
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/monthly-movie"
                  >
                    Phim tháng 3/2025
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/vietnam-movie"
                  >
                    Phim Việt Nam
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link
            className="flex items-center gap-1 hover:text-black"
            onClick={() => {
              setIsOpen("");
              setIsTheaterOpen(true);
            }}
          >
            Rạp <ChevronDown size={19} />
          </Link>
        </li>
        <li className={`${isHidden ? "relative" : " "}`}>
          <Link
            className="flex items-center gap-1 hover:text-black"
            onClick={() => setIsOpen(isOpen === "news" ? "" : "news")}
          >
            Tin Tức <ChevronDown size={19} />
          </Link>
          {isOpen === "news" && (
            <div
              ref={dropdownRef}
              className={`top-full left-0 mt-2 w-48 bg-white z-100 ${
                isHidden
                  ? "absolute border border-gray-200 shadow-lg rounded-md"
                  : " "
              }`}
            >
              <ul className="py-0 lg:py-2">
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/news-section"
                  >
                    Tin điện ảnh{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/movie-review-section"
                  >
                    Đánh giá phim
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/video-section"
                  >
                    Video
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/services"
                  >
                    Chuyên đề
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/services"
                  >
                    Vũ trụ điện ảnh
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:text-black"
                    onClick={() => toggleDropdown()}
                    to="/services"
                  >
                    Tv Series
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link 
          className="hover:text-black"
          onClick={() => toggleDropdown()} to="/community">
            Cộng Đồng
          </Link>
        </li>
      </ul>
    </nav>
  );
}
