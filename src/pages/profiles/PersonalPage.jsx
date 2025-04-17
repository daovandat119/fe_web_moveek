import React from "react";

export default function UserAccount() {
  return (
    <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto flex my-20">
      <div className="w-[45%] flex flex-col items-center px-20 text-center mt-15">
        <h1 className="text-[27px] text-gray-800 leading-7">
          thangchodienikj, hãy kích hoạt trang cá nhân của bạn trong hôm nay!
        </h1>
        <p className="text-sm mt-3 text-gray-400">
          Trở thành 1 Moveek-er - cộng đồng người yêu điện ảnh lớn nhất Việt Nam
          và thể hiện cá tính của bạn
        </p>
        <div className="flex items-center gap-1 my-5">
          <div className="relative inline-block group">
            <img
              src="https://moveek.com/bundles/ornweb/img/no-avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-blue-100 text-gray-800 text-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              leconghuyhoang
            </span>
          </div>
        </div>
        <button className="bg-[#12263f] text-white px-5 py-2 rounded-md mt-5 hover:bg-black">
          Tạo trang cá nhân
        </button>
      </div>
      <img
        src="https://cdn.moveek.com/bundles/ornweb/faq/profile-sample.png"
        alt="avatar"
        className="w-[55%] object-cover rounded-md"
      />
    </div>
  );
}
