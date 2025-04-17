import React from "react";
import UserMenu from "@/components/profiles/UserMenu";

export default function ChangePassword() {
  return (
    <>
      <UserMenu page="Tài khoản" />
      <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto">
        <div className="w-[65%] p-5 my-10 bg-white rounded-md flex gap-5 items-start">
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <h1>Mật khẩu hiện tại:</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Mật khẩu mới:</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Xác minh:</h1>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5 w-1/5">
              <button className="w-full border border-gray-300 rounded-md p-2 bg-[#12263f] text-white">
                Đổi mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
