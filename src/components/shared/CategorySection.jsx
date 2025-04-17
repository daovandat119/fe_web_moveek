import React from "react";
import { Link } from "react-router-dom";

export default function CategorySection() {
  const CategorySection = [
    {
      title: "Đánh giá phim",
      description: "Góc nhìn chân thực, khách quan nhất về các bộ phim",
      link: "/movie-review-section",
    },
    {
      title: "Tin điện ảnh",
      description: "Tin tức điện ảnh Việt Nam & thế giới",
      link: "/news-section",
    },
    {
      title: "Video - Trailer",
      description:
        "Trailer, video những phim chiếu rạp và truyền hình hot nhất",
      link: "/video-section",
    },
  ];

  return (
    <>
      {CategorySection.map((category, index) => (
        <Link key={index} to={category.link}>
          <div
            className={`p-5 ${
              index < CategorySection.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <h1>{category.title}</h1>
            <p className="text-gray-400 text-[15px]">{category.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
