import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import UseClickOutside from "@/hooks/UseClickOutside";
import { useSelector, useDispatch } from "react-redux";
import { setProvince } from "@/store/ProvinceSlice";
import UseLockBodyScroll from "@/hooks/UseLockBodyScroll";

export default function TheaterList({ isTheaterOpen, setIsTheaterOpen }) {
  const dropdownRef = useRef(null);
  const dropdownRefOne = useRef(null);
  const [isProvincesOpen, setIsProvincesOpen] = useState(false);
  const [searchProvince, setSearchProvince] = useState("");
  const [searchCinema, setSearchCinema] = useState("");

  const provinces = useSelector((state) => state.province.provinces);
  const selectedProvince = useSelector(
    (state) => state.province.selectedProvince
  );
  const dispatch = useDispatch();

  const handleCitySelect = (province) => {
    dispatch(setProvince(province));
  };

  UseClickOutside(dropdownRef, () => setIsTheaterOpen(false));
  UseClickOutside(dropdownRefOne, () => setIsProvincesOpen(false));

  UseLockBodyScroll(true);

  {
    /* Data for provinces and theaters
    SELECT
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', p.id,
          'province', p.name,
          'theater_brands', IFNULL(
            JSON_ARRAYAGG(
              JSON_OBJECT(
                'brand', tb.name,
                'img', tb.img,
                'theaters', IFNULL(
                  JSON_ARRAYAGG(
                    JSON_OBJECT(
                      'id', t.id,
                      'name', t.name,
                      'address', t.address,
                      'img', tb.img,
                      'ticket_status', t.ticket_status
                    )
                  ), JSON_ARRAY()
                )
              )
            ), JSON_ARRAY()
          )
        )
      ) AS provinces_data
    FROM provinces p
    LEFT JOIN theaters t ON p.id = t.province_id
    LEFT JOIN theater_brands tb ON t.brand_id = tb.id
    GROUP BY p.id, p.name;
    */
  }

  const selectedProvinceCinemas =
    provinces
      .find((p) => p.province === selectedProvince)
      .theater_brands.flatMap((brand) => brand.theaters) ?? [];

  return (
    <>
      {isTheaterOpen && (
        <>
          <span className="fixed top-0 left-0 w-full h-full bg-[var(--color-overlay-bg)]/50 backdrop-brightness-100 z-30"></span>
          <div
            ref={dropdownRef}
            className="fixed top-1 right-6 lg:top-6 mt-2 w-[90%] lg:w-[53%] max-h-[95%] bg-white shadow-lg rounded-lg border border-gray-200 overflow-y-auto z-100 scrollbar-hide inset-x-0 mx-auto"
          >
            <div className="p-5">
              <div className="flex flex-col lg:flex-row gap-3 w-[90%] lg:w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm rạp..."
                    className="pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full"
                    onChange={(e) => setSearchCinema(e.target.value)}
                  />
                  <Search className="absolute left-3 top-3" size={16} />
                </div>
                <div ref={dropdownRefOne}>
                  <input
                    type="text"
                    onClick={() => setIsProvincesOpen(!isProvincesOpen)}
                    value={selectedProvince}
                    className={`px-3 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full ${
                      isProvincesOpen ? "rounded-t-lg " : "rounded-lg "
                    }`}
                    readOnly
                  />
                  {isProvincesOpen && (
                    <div className="fixed px-2 py-5 border border-gray-300 rounded-b-lg  focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-55 bg-white">
                      <input
                        type="text"
                        className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full"
                        onChange={(e) => setSearchProvince(e.target.value)}
                      />
                      <ul className="h-[200px] overflow-auto text-gray-400">
                        {provinces
                          .filter((province) =>
                            province.province
                              .toLowerCase()
                              .includes(searchProvince.toLowerCase())
                          )
                          .map((province) => (
                            <li
                              key={province.id}
                              className="p-3 cursor-pointer"
                              onClick={() => {
                                handleCitySelect(province.province);
                                setIsProvincesOpen(false);
                              }}
                            >
                              {province.province}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <ul className="divide-y divide-gray-200 mt-2 overflow-auto">
                {selectedProvinceCinemas
                  .filter((theater) =>
                    theater.name
                      .toLowerCase()
                      .includes(searchCinema.toLowerCase())
                  )
                  .map((theater) => (
                    <li key={theater.id} className="p-3 cursor-pointer">
                      <div className="flex items-center gap-3 rounded-full">
                        <img
                          src={theater.img}
                          alt={theater.name}
                          className="w-[10%] lg:w-[5%] rounded-full"
                        />
                        <div>
                        <h1 className="font-semibold inline-flex items-center gap-2">
                            {theater.name}{" "}
                            {theater.ticket_status && (
                              <span className="inline text-[var(--color-hover-input)] bg-[#d5e5fa] p-1 text-[10px] rounded-md">
                                Bán vé
                              </span>
                            )}
                          </h1>
                          <p className="text-sm text-gray-400">
                            {theater.address}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
