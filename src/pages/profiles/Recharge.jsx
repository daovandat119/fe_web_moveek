import React from "react";

export default function Recharge() {
  const packages = [
    {
      id: 1,
      image: "https://cdn.moveek.com/bundles/ornweb/img/card-4.png",
      buttonText: "Nạp gói này",
    },
    {
      id: 2,
      image: "https://cdn.moveek.com/bundles/ornweb/img/card-1.png",
      buttonText: "Nạp gói này",
    },
    {
      id: 3,
      image: "https://cdn.moveek.com/bundles/ornweb/img/card-2.png",
      buttonText: "Nạp gói này",
    },
    {
      id: 4,
      image: "https://cdn.moveek.com/bundles/ornweb/img/card-3.png",
      buttonText: "Nạp gói này",
    },
  ];
  
  return (
    <>
      <div className="relative banner w-full text-center py-7 text-white ">
        <span className="absolute inset-0 bg-black/70"></span>
        <h1 className="relative text-[30px] font-semibold">Moveek Credits</h1>
        <p className="relative">Mua vé nhanh chóng chỉ với 1 click</p>
        <button className="relative text-[var(--color-hover-input)]">
          tìm hiểu thêm
        </button>
      </div>
      <div className="relative w-[90%] lg:w-[40%] max-w-[1200px] mx-auto ">
        <div className="flex flex-col">
          <h1 className="text-center text-2xl my-5">Lựa chọn gói nạp</h1>
          <p className="inline-flex gap-1 bg-[var(--color-bg-title)] px-5 py-3 rounded-md">
            Xin chào<span className="font-semibold">thangchodienikj.</span>Số dư Moveek Credits:
            <span className="font-semibold">0 đ</span>
          </p>
        </div>
        <div className="grid grid-cols-4 gap-7 my-5">
          {packages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col gap-2 items-center">
              <img src={pkg.image} alt="avatar" className="" />
              <button className="bg-[var(--color-button)] text-white w-full py-2 rounded-md">
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
