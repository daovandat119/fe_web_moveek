import React, { useRef } from "react";
import UseClickOutside from "@/hooks/UseClickOutside";
import UseLockBodyScroll from "@/hooks/UseLockBodyScroll";
export default function Login({ setLogin }) {
  const dropdownRef = useRef(null);
  UseClickOutside(dropdownRef, () => setLogin(false));
  UseLockBodyScroll(true);

  return (
    <>
      <span className="fixed top-0 left-0 w-full h-full bg-[var(--color-overlay-bg)]/50 backdrop-brightness-100 z-40"></span>
      <div
        ref={dropdownRef}
        className="fixed bg-white top-0 left-0 w-[340px] h-full z-50 border border-gray-200"
      >
        <form className="p-6 text-black">
          <span>Tài khoản</span>
          <input
            type="text"
            className="w-full border border-gray-200 rounded-lg py-2 px-4 mb-4 mt-3 focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)]"
          />
          <div className="flex justify-between items-center">
            <span>Mật khẩu</span>
            <span className="text-gray-400 text-[12px]">Quên mật khẩu ?</span>
          </div>
          <input
            type="password"
            className="w-full border border-gray-200 rounded-lg py-2 px-4 mb-4 mt-3 focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)]"
          />
          <button className="w-full py-3 bg-[#12263f] rounded-lg text-white text-base hover:bg-black">
            Đăng nhập
          </button>
          <div className="flex justify-center items-center text-[13px] gap-2 py-4">
            <span className="text-gray-400">Chưa có tài khoản?</span>
            <span className="text-[var(--color-hover-input)]">Đăng ký ngay!</span>
          </div>
        </form>
      </div>
    </>
  );
}
