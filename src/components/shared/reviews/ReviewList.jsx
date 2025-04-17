import React from "react";
import { Link } from "react-router-dom";
import { slugUtils } from "@/utils/slugUtils";

export default function ReviewList({
  reviews,
  remainingReviews,
  visibleCount,
  setVisibleCount,
  title,
  name,
}) {
  const handleLoadMore = () => {
    setVisibleCount((pev) => pev + 20);
  };

  return (
    <div className="lg:w-[67%]">
      <div className=" bg-white rounded-md">
        <h1 className="bg-[var(--color-bg-title)] p-5 rounded-t-md text-black">
          {title}
        </h1>
        <div className="p-5 border border-gray-100">
          {remainingReviews.map((review, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-5">
                <img
                  src={review.image}
                  alt="Image review movie"
                  className="rounded-md w-[30%] h-30"
                />
                <div className="w-[70%]">
                  <h1>{review.title}</h1>
                  <p className=" text-[15px] text-red-500">
                    {review.author}
                    <span className="text-gray-400"> · {review.time}</span>
                  </p>
                  <p className="text-[14px] text-gray-400">
                    {review.description}
                  </p>
                </div>
              </div>
              {index !== remainingReviews.length - 1 && (
                <hr className="text-gray-200 my-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        {visibleCount < reviews.length && remainingReviews.length > 2 ? (
          <button
            onClick={handleLoadMore}
            type="button"
            className="bg-[#edf2f9] p-3 my-4 rounded-md text-center text-black w-full hover:bg-[#c3d2e9]"
          >
            Xem thêm
          </button>
        ) : visibleCount >= reviews.length ? (
          ""
        ) : remainingReviews.length > 2 ? (
          <Link to={`/movie-detail-new/${slugUtils(name)}/`}>
          <button
            onClick={handleLoadMore}
            type="button"
            className="bg-[#edf2f9] p-3 my-4 rounded-md text-center text-black w-full hover:bg-[#c3d2e9]"
          >
            Xem thêm tin tức về <span className="font-semibold">{name}</span>
          </button>
          </Link>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
