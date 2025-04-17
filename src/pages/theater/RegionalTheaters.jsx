import React from "react";
import Banner from "@/components/shared/Banner";
import { Search } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { slugUtils } from "@/utils/slugUtils";
import { useState, useRef } from "react";
import UseClickOutside from "@/hooks/UseClickOutside";
import CitySelector from "@/components/header/CitySelector";

export default function RegionalTheaters() {
  const { name } = useParams();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  UseClickOutside(dropdownRef, () => setIsOpen(false));
  UseClickOutside(dropdownRef, () => setDropdownOpen(false));
  const provinces = useSelector((state) => state.province.provinces);
  const province = provinces.find((item) => slugUtils(item.province) === name);

  return (
    <>
      <Banner
        title={`Rạp phim khu vực ${provinces[0].province}`}
        description={`Danh sách rạp chiếu phim tại khu vực ${provinces[0].province}`}
      />
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto pt-5 flex justify-between items-start gap-5">
        <div className="w-[65%] flex flex-col">
          <div className="border border-gray-200 bg-white rounded-md">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative mx-auto p-3 border-b border-gray-100"
            >
              <Search
                className="absolute left-7 top-6 text-gray-400"
                size={15}
              />
              <input
                type="text"
                placeholder={`Tìm rạp tại ${provinces[0].province}`}
                className="w-full pl-10 pr-5 py-2 rounded-lg focus:outline-none text-gray-400"
              />
              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute w-1/2 left-13 bg-white rounded-md border border-gray-200 shadow-md max-h-[500px] overflow-y-auto z-10"
                >
                  {province.theater_brands.map((theater, index) => (
                    <div
                      onClick={() => setIsSearch(theater.id)}
                      key={index}
                      className="flex items-center gap-4 m-5 border-b-2 border-gray-200 pb-5"
                    >
                      <img
                        src={theater.img}
                        alt={theater.brand}
                        className="w-[20%] rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-semibold">{theater.brand}</h1>
                        <p className="text-gray-400">
                          {theater.theaters.length} cụm rạp
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {province.theater_brands
              .filter(
                (theater_brand) =>
                  theater_brand.id === isSearch || isSearch === ""
              )
              .map((theater_brand) =>
                theater_brand.theaters.map((theater, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-3 p-5 border-b border-gray-200"
                  >
                    <img
                      src={theater.img}
                      alt={theater.name}
                      className="w-[8%] rounded-full "
                    />
                    <div>
                      <h1 className="font-semibold inline-flex items-center gap-2">
                        {theater.name}
                        {theater.ticket_status && (
                          <span className="inline text-[var(--color-hover-input)] bg-[#d5e5fa] p-1 text-[10px] rounded-md">
                            Bán vé
                          </span>
                        )}
                      </h1>
                      <p className="text-gray-400">{theater.address}</p>
                    </div>
                  </div>
                ))
              )}
          </div>
          <button
            className="text-gray-400 my-5 cursor-pointer "
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            Bạn muốn tìm rạp ở khu vực khác?
          </button>
          {isDropdownOpen && <CitySelector setDropdownOpen={setDropdownOpen} />}
        </div>
        <div className="w-[35%] bg-white border border-gray-100 rounded-md">
          <h1 className="bg-[var(--color-bg-title)] p-5 rounded-t-md text-black">
            Sắp khai trương
          </h1>
          <div className="flex flex-col p-5 border-b border-gray-100">
            <h1 className="font-semibold">Beta Âu Cơ</h1>
            <p className="text-md text-gray-400">
              Xem lịch chiếu phim và Mua vé xem phim tại Beta Âu Cơ. Moveek -
              Xem Lịch chiếu toàn quốc đầy đủ & tiện lợi nhất.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
