import React from "react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTheaters, setToday } from "@/store/ProvinceSlice";
import UseClickOutside from "@/hooks/UseClickOutside";
import UseLockBodyScroll from "@/hooks/UseLockBodyScroll";
import { slugUtils } from "@/utils/slugUtils";
import {
  getDates,
  getFullDateTime,
  formatDuration,
  formatDateWithWeekday,
} from "@/utils/timeUtils";

export default function MovieShowtimeList({ page }) {
  const [selectedTrailer, setSelectedTrailer] = useState(false);
  const dropdownRef = useRef(null);
  UseClickOutside(dropdownRef, () => setSelectedTrailer(false));
  UseLockBodyScroll(selectedTrailer);

  const dates = getDates();
  const dispatch = useDispatch();
  const cinemaData = useSelector((state) => state.province.theaters);
  const todayDefault = useSelector((state) => state.province.todayDefault);

  const handleToday = (today) => {
    dispatch(setToday(today));
  };

  const handleDateSelect = (dateString) => {
    dispatch(fetchTheaters({ theaterToday: dateString, theaterId: "" }));
    dispatch(setToday(dateString));
  };

  return (
    <div
      className={`${page === "Theater" ? "w-[65%]" : "w-[52%]"} text-gray-400`}
    >
      <div className="bg-[var(--color-bg-title)] flex justify-start items-center border border-gray-100 w-full rounded-md">
        {dates.map((date, index) => {
          const dateString = `${date.year}-${date.month
            .toString()
            .padStart(2, "0")}-${date.day.toString().padStart(2, "0")}`;
          return (
            <div
              key={index}
              onClick={() => handleDateSelect(dateString)}
              className={`${
                todayDefault == dateString && index === 0
                  ? "rounded-l-md bg-[#c3d2e9]"
                  : ""
              } ${
                todayDefault == dateString && index === dates.length - 1
                  ? "rounded-r-md bg-[#c3d2e9]"
                  : ""
              } ${
                todayDefault == dateString && 0 < index < dates.length - 1
                  ? "bg-[#c3d2e9]"
                  : ""
              }
                 py-3 flex-1 text-center gap-2 hover:bg-[#c3d2e9] ${
                   index === 0
                     ? "hover:rounded-l-md"
                     : index === dates.length - 1
                     ? "hover:rounded-r-md"
                     : ""
                 }`}
            >
              <p>{`${date.day}/${date.month}`}</p>
              <p className="text-[13px]">{date.weekday}</p>
            </div>
          );
        })}
      </div>
      {cinemaData.map(
        (cinema, index) =>
          cinema.movies.length > 0 && (
            <div
              key={index}
              className="flex justify-start items-center gap-1 px-5 py-3 border border-gray-100 rounded-md text-black my-5 bg-[#f6c343]"
            >
              <Info className="w-4 h-4" />
              <h3>Nhấn vào suất chiếu để tiến hành mua vé</h3>
            </div>
          )
      )}
      {cinemaData.map((cinema, index) => (
        <div key={index}>
          {page != "Theater" && (
            <div className="border border-gray-100 rounded-md px-5 py-3 bg-[var(--color-bg-title)] mt-5">
              <h1 className="text-black">
                <Link to={`/theater/${slugUtils(cinema.name)}/`}>
                  {" "}
                  {cinema.name} ·{" "}
                </Link>
                <span className="text-gray-400">
                  {formatDateWithWeekday(todayDefault)}
                </span>
              </h1>
              <p className="text-[14px]">
                {cinema.address}
                <a
                  href={cinema.map_link}
                  target="_blank"
                  className="text-[14px] text-[var(--color-hover-input)]"
                >
                  {" "}
                  - Bản đồ
                </a>
              </p>
            </div>
          )}
          <div>
            {cinema.movies.length > 0 ? (
              cinema.movies.map((movie, index) => (
                <div
                  key={index}
                  className="flex border border-gray-100 rounded-md px-4 py-3 my-3 gap-4 text-[15px] text-black bg-white"
                >
                  <Link
                    to={`/informational-film/${slugUtils(movie.name)}/`}
                    className="w-[14%] h-[20%] rounded-md"
                    onClick={() => {
                      toggleDropdown();
                    }}
                  >
                    <img
                      src={movie.image}
                      alt="movie"
                      className="w-full h-full rounded-md"
                      loading="lazy"
                    />
                  </Link>
                  <div className="w-[90%]">
                    <Link
                      to={`/informational-film/${slugUtils(movie.name)}/`}
                      onClick={() => {
                        toggleDropdown();
                      }}
                    >
                      <h1>{movie.name}</h1>
                    </Link>
                    <a className="text-gray-400 text-[13px] cursor-pointer">
                      {movie.title} · T{movie.age_rating} ·{" "}
                      {formatDuration(movie.duration_minutes)} ·
                      <span
                        onClick={() => {
                          setSelectedTrailer(true);
                        }}
                        className="text-[var(--color-hover-input)]"
                      >
                        Trailer
                      </span>
                    </a>
                    {selectedTrailer && (
                      <>
                        <span className="fixed top-0 left-0 w-full h-full bg-[var(--color-overlay-bg)]/10 backdrop-brightness-100 z-30"></span>
                        <iframe
                          loading="lazy"
                          ref={dropdownRef}
                          className="fixed top-5 w-[800px] h-[500px] mx-auto inset-x-0 z-100"
                          src={movie.trailer}
                          title="Trailer phim"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                      </>
                    )}
                    <p className="text-[13px] flex gap-1">
                      <span> {movie.version}</span>
                      <span>
                        {movie.audioSubOptions.includes("Lồng Tiếng")
                          ? "Lồng Tiếng"
                          : movie.audioSubOptions.includes("Tiếng Việt") &&
                            movie.audioSubOptions.includes("Tiếng Anh")
                          ? "Phụ Đề Việt - Anh"
                          : movie.audioSubOptions.includes("Tiếng Việt")
                          ? "Phụ Đề Việt"
                          : movie.audioSubOptions.includes("Tiếng Anh")
                          ? "Phụ Đề Anh"
                          : ""}
                      </span>
                    </p>
                    <div className="grid grid-cols-4 lg:grid-cols-7 items-center gap-1 w-full text-gray-400 text-[13px] mt-2 mb-5">
                      {movie.show_times.map((showtime, index) => {
                        const isFuture =
                          getFullDateTime(
                            showtime.show_date,
                            showtime.show_time
                          ) > new Date();
                        return (
                          <Link
                            to={isFuture ? "/ticket-detail/1" : ""}
                            key={index}
                            className={`text-center rounded-md flex flex-col items-center ${
                              isFuture
                                ? "border border-gray-700 hover:bg-[var(--color-overlay-bg)] hover:text-white cursor-pointer"
                                : "bg-[var(--color-bg-title)] border-2 border-[var(--color-bg-title)] cursor-not-allowed"
                            }`}
                            onClick={() => toggleDropdown()}
                          >
                            <span className={isFuture ? "" : "p-2"}>
                              {showtime.show_time}
                            </span>
                            {isFuture && (
                              <span className="text-[11px] text-gray-400">
                                {showtime.price}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-start items-center gap-1 px-5 py-3 border border-gray-100 rounded-md text-black my-5 bg-white">
                <h3>
                  Chưa có lịch chiếu cho ngày này. Hãy quay lại sau. Xin cám ơn.
                </h3>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
