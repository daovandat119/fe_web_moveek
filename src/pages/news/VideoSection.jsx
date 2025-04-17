import React from "react";
import { useState } from "react";
import Banner from "@/components/shared/Banner";
import ReviewList from "@/components/shared/reviews/ReviewList";
import CategorySection from "@/components/shared/CategorySection";
import MovieListSlider from "@/components/shared/movies/MovieListSlider";

export default function VideoSection() {
  const [visibleCount, setVisibleCount] = useState(34);

  const movies = [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Chiếu sớm",
    },
    {
      id: 3,
      name: "Nhóc Quậy",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 5,
      name: "Đệ Hiệp Sĩ",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 6,
      name: "Paddington",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "90%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 7,
      name: "Thần Dược",
      release_date: "01/11",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 8,
      name: "Hố Tử Thần",
      release_date: "07/11",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 9,
      name: "Đại Chiến",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 14,
      name: "Paddington",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "90%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 15,
      name: "Thần Dược",
      release_date: "01/11",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 16,
      name: "Hố Tử Thần",
      release_date: "07/11",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
  ];
  const reviews = [
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      Tailer: "https://www.youtube.com/embed/salDbCA9BA0",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
      author: "minhthu",
      time: "3 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title:
        "Phân tích ý nghĩa ẩn dụ trong Dune: Part Two - Một kiệt tác sci-fi",
      image:
        "https://cdn.moveek.com/storage/media/cache/medium/67e265329d922348034267.jpg",
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
        title={"Video - Trailer"}
        description={
          "Trailer, video những phim chiếu rạp và truyền hình hot nhất"
        }
      />
      <div className="my-3 pb-3">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto">
          <MovieListSlider movies={movies} page={"VideoSection"} />
        </div>
      </div>
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
