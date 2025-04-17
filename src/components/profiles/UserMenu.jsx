import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import UseClickOutside from "@/hooks/UseClickOutside";
import { Link } from "react-router-dom";

export default function UserMenu({ page }) {
  const [isOpen, setIsOpen] = useState("");
  const dropdownRef = useRef(null);
  UseClickOutside(dropdownRef, () => setIsOpen(""));

  const tabs = [
    {
      label: "Tài khoản",
      items: [
        { name: "Quản lí tài khoản", link: "/user-account/a" },
        { name: "Quên mật khẩu", link: "/change-password/a" },
      ],
    },
    { label: "Tủ phim", link: "/diary/a" },
    { label: "Vé", link: "/user-orders/a" },
    {
      label: "Nạp tiền",
      items: [
        { name: "Nạp tiền", link: "/recharge/a" },
        { name: "Lịch sử nạp tiền", link: "/deposits/name" },
        { name: "Lịch sử giao dịch", link: "/personal-pag/name" },
      ],
    },
  ];

  return (
    <>
      <div className="relative banner w-full text-center py-7 text-white h-[200px] overflow-hidden">
        <span className="absolute inset-0 bg-black/70"></span>
      </div>
      <div className="relative w-[90%] lg:w-[70%] max-w-[1200px] mx-auto">
        <div className="absolute flex items-center gap-5 z-100 -top-15">
          <img
            src="https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png"
            alt="avatar"
            className="w-32 h-32 rounded-full"
          />
          <h1 className="text-2xl text-center mt-15">
            thangchodienikj{" "}
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-xl">
              0 đ
            </span>
          </h1>
        </div>
      </div>
      <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto mt-20">
        <ul className="flex gap-5 items-center border-b border-gray-200">
          {tabs.map((tab) => {
            if (tab.link) {
              return (
                <li key={tab.label}>
                  <Link
                    to={tab.link}
                    className={`flex items-center gap-1 py-5 ${
                      page === tab.label
                        ? "border-b-2 border-[var(--color-hover-input)]"
                        : "text-gray-500"
                    }`}
                    onClick={() => toggleDropdown()}
                  >
                    {tab.label}
                  </Link>
                </li>
              );
            }
            else if (tab.items) {
              return (
                <li key={tab.label} className="relative">
                  <div
                    className={`flex items-center gap-1 py-5 cursor-pointer ${
                      page === tab.label
                        ? "border-b-2 border-[var(--color-hover-input)]"
                        : "text-gray-500"
                    }`}
                    onClick={() =>
                      setIsOpen(isOpen === tab.label ? "" : tab.label)
                    }
                  >
                    {tab.label} <ChevronDown size={16} />
                  </div>
                  {isOpen === tab.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute w-43 top-0 text-gray-400 z-50"
                    >
                      <ul className="bg-white rounded-md border border-gray-200 text-left shadow-lg">
                        {tab.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.link}
                              className="block px-5 py-2 hover:text-black"
                              onClick={() => toggleDropdown()}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </>
  );
}