import React from "react";
import { useRef } from "react";
import { Search, Check } from "lucide-react";
import UseClickOutside from "@/hooks/UseClickOutside";
import UseLockBodyScroll from "@/hooks/UseLockBodyScroll";
import { useSelector, useDispatch } from "react-redux";
import { setProvince } from "@/store/ProvinceSlice";
import { slugUtils } from "@/utils/slugUtils";
import { Link } from "react-router-dom";

export default function CitySelector({ setDropdownOpen }) {
  const dropdownRef = useRef(null);
  const provinces = useSelector((state) => state.province.provinces);
  const selectedProvince = useSelector(
    (state) => state.province.selectedProvince
  );
  const dispatch = useDispatch();

  UseClickOutside(dropdownRef, () => setDropdownOpen(false));
  UseLockBodyScroll(true);

  const handleCitySelect = (province) => {
    dispatch(setProvince(province));
    setDropdownOpen(false);
  };

  return (
    <>
      <span className="fixed top-0 left-0 w-full h-full bg-[var(--color-overlay-bg)]/50 backdrop-brightness-100 z-40"></span>
      <div
        ref={dropdownRef}
        className="fixed top-0 right-0 w-[320px] h-full bg-white shadow-lg border border-gray-200 z-50 overflow-y-auto"
      >
        <div className="relative w-19/20 mx-auto p-6">
          <Search className="absolute left-9 top-9" size={16} />
          <input
            type="text"
            placeholder="Tìm theo tỉnh, thành phố"
            className="pl-10 pr-5 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)]"
          />
        </div>
        <ul className="w-19/20 px-4 mx-auto">
          {provinces.map((province) => (
            <Link
              key={province.province}
              to={`/regional-theaters/${slugUtils(province.province)}/`}
              onClick={() => handleCitySelect(province.province)}
            >
              <li
                className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer border-b border-gray-200"
              >
                <div className="flex flex-col">
                  <span className="text-black">{province.province}</span>
                  <span className="text-gray-400 text-[13px]">
                    {province.theater_brands
                      ? province.theater_brands.reduce(
                          (sum, brand) => sum + brand.theaters.length,
                          0
                        )
                      : 0}{" "}
                    Rạp
                  </span>
                </div>
                {selectedProvince === province.province && (
                  <Check className="text-center text-red-500" size={16} />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}