import React from "react";
import { Link } from "react-router-dom";
import { slugUtils } from "@/utils/slugUtils";
import EvaluateItem from "@/components/shared/evaluate/EvaluateItem";

export default function EvaluateList({
  evaluates,
  visibleCountEvaluate,
  setVisibleCountEvaluate,
  remainingEvaluates,
  title,
  name,
  page,
}) {
  const handleLoadMore = () => {
    setVisibleCountEvaluate((prev) => prev + 1);
  };

  return (
    <div className="lg:w-[67%] text-center">
      <h1 className="text-black text-2xl font-semibold">{title}</h1>
      <EvaluateItem remainingEvaluates={remainingEvaluates} page={page} />
      {visibleCountEvaluate < evaluates.length &&
      remainingEvaluates.length > 2 ? (
        <button
          onClick={handleLoadMore}
          type="button"
          className="bg-[#edf2f9] p-3 my-4 rounded-md text-center text-black w-full hover:bg-[#c3d2e9]"
        >
          Xem thêm {name}
        </button>
      ) : visibleCountEvaluate >= evaluates.length ? (
        ""
      ) : remainingEvaluates.length > 2 ? (
        <Link to={`/movie-detail-review/${slugUtils(name)}/`}>
          <button
            type="button"
            className="bg-[#edf2f9] p-3 my-4 rounded-md text-center text-black w-full hover:bg-[#c3d2e9]"
          >
            Xem thêm các đánh giá khác
          </button>
        </Link>
      ) : (
        " "
      )}
    </div>
  );
}
