import React from "react";
import { Star } from "lucide-react";
import { EvaluateActions } from "./EvaluateActions";

export default function EvaluateItem({ remainingEvaluates, page }) {
  
  return (
    <>
      {remainingEvaluates.map((evaluate, index) => (
        <div
          key={index}
          className="border border-gray-100 bg-white mt-5 rounded-md"
        >
          <div
            className={`p-5 text-black text-left ${
              page === "Community" ? "" : "border-b border-gray-100"
            }`}
          >
            <div className="flex gap-3">
              <img
                src={evaluate.avatar}
                alt="Avatar"
                className="w-13 h-13 rounded-full"
              />
              <div
                className={`flex w-full ${
                  page === "Community"
                    ? "justify-between flex-row mt-3"
                    : "flex-col"
                }`}
              >
                <h1 className="inline-flex gap-1 group">
                  {evaluate.name}
                  {page === "Community" ? (
                    <span className="inline-flex gap-1 text-gray-400">
                      {evaluate.preferred != true ? (
                        <span className="inline-flex gap-1">
                          <Star
                            className="text-amber-300 fill-amber-300"
                            size={18}
                          />
                          đã đánh giá
                          <span className="text-black font-semibold">
                            {evaluate.rating}
                          </span>
                          cho
                        </span>
                      ) : (
                        "đã thích"
                      )}
                      <span className="text-black font-semibold">
                        {evaluate.nameMovie}
                      </span>
                    </span>
                  ) : (
                    <span className="inline-flex gap-1">
                      <Star
                        className="text-amber-300 fill-amber-300"
                        size={18}
                      />
                      {evaluate.rating}
                    </span>
                  )}
                </h1>
                <p className="text-md text-gray-400 group">{evaluate.time}</p>
              </div>
            </div>
            {page != "Community" && <p className="pt-3">{evaluate.comment}</p>}
          </div>
          {!evaluate.preferred && page !== "Community" && (
            <div className="p-5">
              <EvaluateActions likes={evaluate.likes} />
            </div>
          )}
          {!evaluate.preferred &&
            page === "Community" &&
            evaluate.comment != null && (
              <div className="flex px-5 pb-5 text-start gap-5">
                <div className="flex flex-col gap-5 w-full">
                  <p>{evaluate.comment}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <EvaluateActions likes={evaluate.likes} />
                  </div>
                </div>
                <img
                  src={evaluate.image}
                  alt=""
                  className="rounded-md w-[15%]"
                />
              </div>
            )}
        </div>
      ))}
    </>
  );
}
