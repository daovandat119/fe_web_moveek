import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieListSlider from "@/components/shared/movies/MovieListSlider";
import ReviewList from "@/components/shared/reviews/ReviewList";

export default function Home() {
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

  const movies =  [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Chiếu sớm",
    },
    {
      id: 3,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 5,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 6,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "90%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 7,
      name: "Thần Dược",
      release_date: "01/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 8,
      name: "Hố Tử Thần",
      release_date: "07/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 9,
      name: "Đại Chiến",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 14,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "90%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 15,
      name: "Thần Dược",
      release_date: "01/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 16,
      name: "Hố Tử Thần",
      release_date: "07/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
  ];

  const nextSixReviews = reviews.slice(1, 7);

  const nextfiveReviews = reviews.slice(8, 13);

  const remainingReviews = reviews.slice(14, visibleCount);

  return (
    <>
      <div className=" my-3 py-3 bg-white border-t border-b border-gray-200">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto">
          <h1 className="flex justify-center gap-3 mb-3 text-[20px]">
            <Link to="/" className="text-black">
              Đang chiếu
            </Link>{" "}
            |
            <Link to="/" className="text-gray-400">
              Sắp chiếu
            </Link>
          </h1>
          <MovieListSlider movies={movies} />
        </div>
      </div>
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto text-black">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-3">
          <div className="lg:w-[67%]">
            <img src={reviews[0].image} alt="tenet" className="rounded-md w-full" />
            <h1 className="text-[27px] mt-3">{reviews[0].title}</h1>
            <p className="text-[15px] text-red-500">
              Đánh giá phim · {reviews[0].author}{" "}
              <span className="text-gray-400"> · 1 ngày trước</span>
            </p>
            <p className="text-[15px]">{reviews[0].description}</p>
          </div>
          <div className="lg:w-[33%] rounded-md bg-white border border-gray-100 p-5">
            {nextSixReviews.map((review, index) => (
              <React.Fragment key={index}>
                <h1 className=" text-[18px]">{review.title}</h1>
                <p className=" text-[15px] text-red-500">
                  Đánh giá phim · {review.author}{" "}
                  <span className="text-gray-400">· {review.time}</span>
                </p>
                {index !== nextSixReviews.length - 1 && (
                  <hr className="text-gray-200 my-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-6 mt-10 place-items-start mb-5">
          <ReviewList
            reviews={reviews}
            remainingReviews={remainingReviews}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            title={"Mới cập nhật"}
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
                        <span className="text-gray-400"> · {review.time}</span>
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
    </>
  );
}
