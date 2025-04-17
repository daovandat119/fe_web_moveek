import React from "react";
import { Heart, Star, Clock, UserPlus, ThumbsUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function MovieDetail({ moviesDetail, name, page }) {
  const formatDate = (release_date) => {
    const releaseDate = release_date.split("T")[0];
    const [year, month, day] = releaseDate.split("-");
    return `${parseInt(day).toString().padStart(2, "0")}/${parseInt(month)
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  return (
    <>
      <div
        className="relative w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${moviesDetail.banner})` }}
      >
        <span className="absolute inset-0 bg-black/70"></span>
        <div className="relative w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto text-white text-[15px]">
          {page === "BuyTicketsMovieDetail" ? (
            <div className="text-center py-2">
              <h1 className="text-2xl font-semibold">{moviesDetail.name}</h1>
              <p className="text-gray-400 flex flex-col text-[15px]">
                <span>{moviesDetail.title}</span>
                <span>{moviesDetail.category}</span>
              </p>
              <p className="inline-flex items-center gap-5">
                <span className="inline-flex items-center">
                  <Clock size={16} />
                  {moviesDetail.duration_minutes}phút
                </span>
                <span className="inline-flex items-center">
                  <UserPlus size={16} />T{moviesDetail.age_rating}
                </span>
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-row gap-5 pt-3">
              <div className="w-1/7">
                <img
                  src={moviesDetail.image}
                  alt="Movies image"
                  className="rounded-md border border-white"
                />
              </div>
              <div className="w-8/17">
                <div className="leading-4">
                  <h1 className="text-[26px]">{moviesDetail.name}</h1>
                  <p className="text-gray-400"> </p>
                </div>
                {moviesDetail.title} - {moviesDetail.category}
                <div className="flex flex-row gap-2 text-gray-800 py-3">
                  <button className="inline-flex items-center gap-1 border border-white rounded-md p-1 bg-white ">
                    <Heart size={16} className="text-gray-800 fill-gray-800" />{" "}
                    Thích
                  </button>
                  <button className="inline-flex items-center gap-1 border border-white rounded-md p-1 bg-white">
                    <Star size={16} className="text-gray-800 fill-gray-800" />
                    Đánh giá
                  </button>
                  <button className="border border-white rounded-md p-1 text-gray-300">
                    Trailer
                  </button>
                  <button className="border border-white rounded-md p-1 text-white bg-red-600">
                    Mua vé
                  </button>
                </div>
                <p className="inline-block">{moviesDetail.description}</p>
                <div className="flex justify-between gap-4 pt-3 pb-5 mr-5">
                  <div>
                    <p className="inline-flex items-center gap-1">
                      <ThumbsUp size={16} />
                      Hài lòng
                    </p>
                    <p>67%</p>
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-1">
                      <Calendar size={16} />
                      Khởi chiếu
                    </p>
                    <p>{formatDate(moviesDetail.release_date)}</p>
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-1">
                      <Clock size={16} /> Thời lượng
                    </p>
                    <p>{moviesDetail.duration_minutes} phút</p>
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-1">
                      <UserPlus size={16} />
                      Giới hạn tuổi
                    </p>
                    <p>T{moviesDetail.age_rating}</p>
                  </div>
                </div>
              </div>
              <div className="w-5/15 flex flex-col gap-2 pt-15">
                <div>
                  <p>Diễn viên</p>
                  <p className="text-red-600 ">
                    {moviesDetail.performers
                      .split(",")
                      .map((performer, index, performersArray) => (
                        <span key={index}>
                          {performer}
                          {index < performersArray.length - 1 && (
                            <span className="text-white">,</span>
                          )}
                        </span>
                      ))}
                  </p>
                </div>
                <div>
                  <p>Đạo diễn</p>
                  <p className="text-red-600 ">{moviesDetail.director}</p>
                </div>
                <div>
                  <p>Nhà sản xuất</p>
                  <p className="text-red-600 ">
                    {moviesDetail.manufacturers
                      .split(",")
                      .map((manufacturer, index, manufacturersArray) => (
                        <span key={index}>
                          {manufacturer}
                          {index < manufacturersArray.length - 1 && (
                            <span className="text-white">,</span>
                          )}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 bg-white sticky top-0 z-10">
        <div className="relative w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto border-b border-gray-200 text-gray-400">
          <ul className="flex flex-row gap-5 text-[15px] ">
            <Link
              to={`/informational-film/${name}/`}
              onClick={() => toggleDropdown()}
              className={` relative py-4 ${
                page === "InformationalFilm" ? "text-black" : ""
              }`}
            >
              Thông tin phim
              <span
                className={`w-full absolute left-0 bottom-0 ${
                  page === "InformationalFilm"
                    ? " border-b border-blue-600"
                    : ""
                } `}
              ></span>
            </Link>
            <Link
              to={`/movie-detail-showtime/${name}/`}
              onClick={() => toggleDropdown()}
              className={`relative py-4 ${
                page === "MovieDetailShowtime" ? "text-black" : ""
              }`}
            >
              Lịch chiếu
              <span
                className={`w-full absolute left-0 bottom-0 ${
                  page === "MovieDetailShowtime"
                    ? " border-b border-blue-600"
                    : ""
                }`}
              ></span>
            </Link>
            <Link
              to={`/movie-detail-review/${name}/`}
              onClick={() => toggleDropdown()}
              className={` relative py-4 ${
                page === "MovieDetailReview" ? "text-black" : ""
              }`}
            >
              Đánh giá
              <span
                className={`w-full absolute left-0 bottom-0 ${
                  page === "MovieDetailReview"
                    ? " border-b border-blue-600"
                    : ""
                }`}
              ></span>
            </Link>
            <Link
              to={`/movie-detail-new/${name}/`}
              onClick={() => toggleDropdown()}
              className={` relative py-4 ${
                page === "MovieDetailNew" ? "text-black" : ""
              }`}
            >
              Tin Tức
              <span
                className={`w-full absolute left-0 bottom-0 ${
                  page === "MovieDetailNew" ? " border-b border-blue-600" : ""
                }`}
              ></span>
            </Link>
            <Link
              to={`/buy-tickets-movie-detail/${name}/`}
              onClick={() => toggleDropdown()}
              className={` relative py-4 ${
                page === "BuyTicketsMovieDetail" ? "text-black" : ""
              }`}
            >
              Mua vé
              <span
                className={`w-full absolute left-0 bottom-0 ${
                  page === "BuyTicketsMovieDetail"
                    ? " border-b border-blue-600"
                    : ""
                }`}
              ></span>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
