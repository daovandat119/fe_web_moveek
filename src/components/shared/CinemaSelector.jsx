import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProvince,
  fetchProvinces,
  fetchTheaters,
  setIdDefault,
} from "@/store/ProvinceSlice";

export default function CinemaSelector({ isTicketStatus }) {
  useEffect(() => {
    // dispatch(fetchProvinces());
  }, []);

  const province = useSelector((state) => state.province.provinces);
  const idDefault = useSelector((state) => state.province.idDefault);
  const selectedProvince = useSelector(
    (state) => state.province.selectedProvince
  );

  const dispatch = useDispatch();

  const handleCitySelect = (province) => {
    dispatch(setProvince(province));
  };

  const handleTheater = (theater) => {
    dispatch(setIdDefault(theater));
  };

  const selectedProvinceData = province.find(
    (city) => city.province === selectedProvince
  );

  return (
    <>
      <div className="w-[24%] border border-gray-100 rounded-md text-gray-400">
        <h1 className="bg-[var(--color-bg-title)] py-3 px-5 ">Khu vực</h1>
        {province.map((city) => (
          <div
            key={city.province}
            onClick={() => handleCitySelect(city.province)}
            className={`${
              city.province === selectedProvince
                ? "bg-[var(--color-hover-input)] text-white"
                : "bg-white hover:bg-gray-100"
            } flex justify-between items-center px-5 py-3 border-t border-gray-200`}
          >
            <button>{city.province}</button>
            <p className="bg-[var(--color-hover-input)] px-2 py-1 text-[10px] text-white rounded-full">
              {city.theater_brands.reduce(
                (sum, brand) =>
                  sum +
                  (isTicketStatus
                    ? brand.theaters.length
                    : brand.theaters.filter((theater) => theater.ticket_status)
                        .length),
                0
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[24%] border border-gray-100 rounded-md text-gray-400">
        <div>
          {selectedProvinceData.theater_brands.map((brand) => (
            <div key={brand.brand}>
              <div className="bg-[var(--color-bg-title)] py-3 px-5 flex justify-start items-center gap-3">
                <img
                  src={brand.img}
                  alt="rap"
                  className="w-[10%] rounded-full"
                />
                <h1>{brand.brand}</h1>
              </div>
              {brand.theaters
                .filter((theater) => (isTicketStatus ? " " : theater.ticket_status))
                .map((theater) => (
                  <button
                    key={theater.id}
                    onClick={() =>
                      dispatch(
                        fetchTheaters({
                          theaterToday: "",
                          theaterId: theater.id,
                        }),
                        handleTheater(theater.id)
                      )
                    }
                    className={`${
                      idDefault === theater.id
                        ? "bg-[var(--color-hover-input)] text-white"
                        : "hover:bg-gray-100"
                    } text-start px-5 py-3 border-t border-gray-200  w-full`}
                  >
                    {theater.name}
                  </button>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
