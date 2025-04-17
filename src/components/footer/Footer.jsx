import React from "react";

export default function Footer() {
  return (
    <div className="bg-[var(--color-bg-title)] py-4 text-gray-400 text-[13px] mx-auto">
      <footer className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row text-center gap-4">
        <img
          src="https://cdn.moveek.com/bundles/ornweb/img/favicon-large.png"
          alt="logo"
          className="hidden lg:flex w-[6%] h-[6%] rounded-full"
        />
        <div className="lg:w-[40%] lg:text-left">
          <h1>CÔNG TY TNHH MONET</h1>
          <p>
            Số ĐKKD: 0315367026 · Nơi cấp: Sở kế hoạch và đầu tư Tp. Hồ Chí Minh
            · Đăng ký lần đầu ngày 01/11/2018
          </p>
          <p>
            Địa chỉ: 33 Nguyễn Trung Trực, P.5, Q. Bình Thạnh, Tp. Hồ Chí Minh
            Về chúng tôi · Chính sách bảo mật · Hỗ trợ · Liên hệ · v8.1
          </p>
        </div>
        <div className="w-[90%] mx-auto lg:w-[40%]">
          <h1 className="lg:text-start">ĐỐI TÁC</h1>
          <div className="flex justify-center md:justify-start flex-wrap gap-1">
            <img
              src="https://cdn.moveek.com/bundles/ornweb/partners/beta-cineplex-v2.jpg"
              alt="partner3"
              className="w-[11%] rounded-full"
            />
            <img
              src="https://cdn.moveek.com/bundles/ornweb/partners/mega-gs-cinemas.png"
              alt="partner3"
              className="w-[11%] rounded-full"
            />
            <img
              src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner3"
              className="w-[11%] rounded-full"
            />
            <img
               src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner4"
              className="w-[11%] rounded-full"
            />
            <img
               src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner1"
              className="w-[11%] rounded-full"
            />
            <img
             src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner2"
              className="w-[11%] rounded-full"
            />
            <img
               src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner3"
              className="w-[11%] rounded-full"
            />
            <img
              src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner4"
              className="w-[11%] rounded-full"
            />
            <img
               src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner1"
              className="w-[11%] rounded-full"
            />
            <img
              src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner2"
              className="w-[11%] rounded-full"
            />
            <img
              src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner3"
              className="w-[11%] rounded-full"
            />
            <img
               src="https://cdn.moveek.com/bundles/ornweb/partners/dcine.png"
              alt="partner4"
              className="w-[11%] rounded-full"
            />
          </div>
        </div>
        <img
          src="https://cdn.moveek.com/bundles/ornweb/img/20150827110756-dathongbao.png"
          alt="appstore"
          className="w-[25%] h-[25%] lg:w-[13%] lg:h-[13%] lg:mt-8 mx-auto"
        />
      </footer>
    </div>
  );
}
