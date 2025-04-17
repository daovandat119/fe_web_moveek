import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "@/components/shared/movies/MovieDetail";
import ReviewList from "@/components/shared/reviews/ReviewList";

export default function MovieDetailNew() {
  const { name } = useParams();
  const [visibleCount, setVisibleCount] = useState(5);

  const moviesDetail = {
    id: 1,
    name: "Sát Thủ Vô Cùng Cực Hài",
    title: "Hitman 2",
    image:
      "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
    banner:
      "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
    age_rating: 18,
    duration_minutes: 121,
    version: "2D",
    language: "Anh",
    subtitle_en: false,
    subtitle_vi: true,
    dubbing: false,
    trailer: "https://www.youtube.com/embed/salDbCA9BA0",
    release_date: "2022-03-14T10:00:00Z",
    category: "Comedy, Action",
    description:
      "Phim lấy cảm hứng từ câu chuyện có thật và “truyền thuyết kinh dị nhất về người chết sống lại” - Ở một ngôi làng vùng cao, cặp vợ chồng Quang và Như sống bằng nghề mai táng. Cuộc sống yên bình của họ bị xáo trộn khi phát hiện một cỗ quan tài vô chủ trên mảnh đất nhà mình. Từ đây, những hiện tượng kỳ lạ bắt đầu xảy ra và ám ảnh cả ngôi làng.",
    performers:
      "Kwon Sang-Woo, Jung Joon-ho, Lee Yi-kyung, Hwangwoo Seul-hye, Lee Ji-Won",
    director: "Choi Won-sub",
    manufacturers: "Dave Caplan, Chris Ferguson, Brian Kavanaugh-Jones",
  };

  const reviews = [
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
  ];

  const nextfiveReviews = reviews.slice(1, 2);
  const remainingReviews = reviews.slice(0, visibleCount);

  return (
    <>
      <MovieDetail
        moviesDetail={moviesDetail}
        name={name}
        page={"MovieDetailNew"}
      />
      <div className="w-full flex flex-col gap-5">
        <div className="relative w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto border-b border-gray-200 text-gray-400">
          <div className="flex justify-between mt-10 place-items-start gap-6">
            <ReviewList
              reviews={reviews}
              remainingReviews={remainingReviews}
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              title={"Bài viết liên quan"}
              name={moviesDetail.name}
            />
            <div className="lg:w-[33%] bg-white rounded-md border border-gray-100">
              <h1 className="bg-[var(--color-bg-title)] p-5 rounded-t-md text-black">
                Review
              </h1>
              <div className="p-5">
                {nextfiveReviews.map((review, index) => (
                  <React.Fragment key={index}>
                    <div className="flex gap-5">
                      <img
                        src={review.image}
                        alt="tenet"
                        className="rounded-md w-[30%] h-18"
                      />
                      <div className="w-[75%]">
                        <h1>{review.title}</h1>
                        <p className=" text-[15px] text-red-500">
                          {review.author}
                          <span className="text-gray-400">
                            {" "}
                            · {review.time}
                          </span>
                        </p>
                      </div>
                    </div>
                    {index !== nextfiveReviews.length - 1 && (
                      <hr className="text-gray-200 my-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
