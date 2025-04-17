import React from "react";
import { useState } from "react";
import Banner from "@/components/shared/Banner";
import ReviewList from "@/components/shared/reviews/ReviewList";
import CategorySection from "@/components/shared/CategorySection";

export default function NewsSection() {
  const [visibleCount, setVisibleCount] = useState(34);

  const reviews = [
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image: "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
  ];

  const remainingReviews = reviews.slice(14, visibleCount);

  return (
    <>
      <Banner
        title={"Tin điện ảnh"}
        description={"Tin tức điện ảnh Việt Nam & thế giới"}
      />
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto text-black">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-6 mt-10 place-items-start mb-5">
          <ReviewList
            reviews={reviews}
            remainingReviews={remainingReviews}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            title={"Mới nhất"}
          />
          <div className="lg:w-[33%] bg-white rounded-md border border-gray-100">
            <h1 className="bg-[var(--color-bg-title)] p-5 rounded-t-md text-black">
              Chuyên mục
            </h1>
           <CategorySection />
          </div>
        </div>
      </div>
    </>
  );
}
