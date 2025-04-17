import React from "react";
import { Heart, Star, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { slugUtils } from "@/utils/slugUtils";
export default function MovieItem({
  id,
  name,
  release_date,
  image,
  rating,
  page,
  status,
  showStar,
  setSelectedTrailer,
  setMovieIds,
}) {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  const isNew = release_date.startsWith(formattedToday);

  return (
    <>
      <div>
        {page === "UpcomingMovie" && (isNew || status) && (
          <span className="w-[70px] absolute top-2 -left-1 bg-red-500 text-white text-[9px] font-semibold shadow-md rounded-xs text-center">
            {isNew ? "MỚI" : status}
          </span>
        )}
        {(page === "MovieList" || page === "UpcomingMovie") && (
          <span className="absolute top-2 right-1 bg-[#edf2f9] text-[10px] font-semibold shadow-md rounded-md flex justify-between items-center gap-1">
            <p
              className={`hover:bg-gray-300 px-1 py-1 ${
                page === "MovieList" || showStar
                  ? "hover:rounded-l-md"
                  : "hover:rounded-md"
              }`}
            >
              <Heart size={12} className="text-gray-500 fill-gray-500" />
            </p>

            {page === "MovieList" || showStar ? (
              <p className="hover:bg-gray-300 px-1 py-1 hover:rounded-r-md">
                <Star size={12} className="text-gray-500 fill-gray-500" />
              </p>
            ) : null}
          </span>
        )}
        {page === "Community" && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 text-black px-1 py-1 text-[10px] font-semibold shadow-md rounded-md flex justify-center items-center">
            <Heart
              size={70}
              className="text-white fill-white opacity-60 hover:text-white hover:fill-white hover:opacity-100"
            />
          </span>
        )}
      </div>
      <img
        src={image}
        alt={name}
        className={`${
          page === "ok" ? "rounded-md" : "rounded-t-md"
        } w-full h-[200px] object-cover `}
      />
      {page === "VideoSection" && (
        <PlayCircle
          onClick={() => {
            setSelectedTrailer(true), setMovieIds(id);
          }}
          size={60}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 text-white  opacity-60 hover:text-white hover:opacity-100 z-100"
        />
      )}
      {page === "MovieListSlider" && (
        <button className="w-full bg-red-500 text-white py-1 text-sm">
          Mua vé
        </button>
      )}
      <div className="p-2 text-left">
        <h3 className="text-sm truncate font-semibold">{name}</h3>
        {page != "Community" ? (
          <p className="text-gray-400 text-xs flex justify-between">
            <span>
              {new Date(release_date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
              })}
            </span>
            <span className="text-gray-400 text-xs flex justify-between">
              {page === "VideoSection" ? (
                <Link
                  to={`/informational-film/${slugUtils(name)}/`}
                  className="text-[var(--color-hover-input)]"
                >
                  Chi tiết
                </Link>
              ) : (
                <span>
                  <span className="text-green-500">👍</span>{" "}
                  <span className="text-blue-500">{rating}</span>
                </span>
              )}
            </span>
          </p>
        ) : null}
      </div>
    </>
  );
}
