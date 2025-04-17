import React from "react";
import { useState, useRef } from "react";
import UserMenu from "@/components/profiles/UserMenu";
import UseClickOutside from "@/hooks/UseClickOutside";

export default function UserAccount() {
  const [isProvincesOpen, setIsProvincesOpen] = useState(false);
  const dropdownRef = useRef(null);
  UseClickOutside(dropdownRef, () => setIsProvincesOpen(""));

  const provinces = [
    { name: "Hà Nội", id: 1 },
    { name: "Hồ Chí Minh", id: 2 },
    { name: "Đà Nẵng", id: 3 },
    { name: "Cần Thơ", id: 4 },
    { name: "Nha Trang", id: 5 },
    { name: "Hải Phòng", id: 6 },
    { name: "Đà Lạt", id: 7 },
    { name: "Vũng Tàu", id: 8 },
    { name: "Huế", id: 9 },
    { name: "Quảng Ninh", id: 10 },
  ];

  return (
    <>
      <UserMenu page="Tài khoản" />
      <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto">
        <div className="w-[65%] p-5 my-10 bg-white rounded-md flex gap-5 items-start">
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <h1>Tên tài khoản</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="thangchodienikj"
                disabled
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Họ và tên</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Số điện thoại</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Ảnh đại diện</h1>
              <label className="w-full flex justify-end border border-gray-300 rounded-md cursor-pointer">
                <input type="file" className="hidden" />
                <span className="p-2 border-l border-gray-300">Browse</span>
              </label>
            </div>
            <div className="flex flex-col gap-2 mt-5 w-1/3">
              <button className="w-full border border-gray-300 rounded-md p-2 bg-[#12263f] text-white">
                Cập nhật
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <h1>Email</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="daovandat591@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Khu vực</h1>
              <div className="w-full relative">
                <input
                  type="text"
                  value="Hà nội"
                  className={`px-3 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full ${
                    isProvincesOpen ? "rounded-t-lg " : "rounded-lg "
                  }`}
                  onClick={() => setIsProvincesOpen(!isProvincesOpen)}
                  readOnly
                />
                {isProvincesOpen && (
                  <div
                  ref={dropdownRef}
                   className="absolute border border-gray-300 rounded-b-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full bg-white">
                    <ul className="h-[200px] overflow-auto text-gray-400">
                      {provinces.map((province) => (
                        <li
                          key={province.id}
                          className="w-full p-3 cursor-pointer"
                          onClick={() => {
                            setIsProvincesOpen(false);
                          }}
                        >
                          {province.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-13">
              <button className="w-full border border-gray-300 rounded-md p-2 hover:bg-[#12263f] hover:text-white">
                Xác thực số điện thoại
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
