import React from "react";
import { Link } from "react-router-dom";
import MovieListSlider from "@/components/shared/movies/MovieListSlider";
import Banner from "@/components/shared/Banner";
export default function NotFound() {
  const movies = [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Chiếu sớm",
    },
    {
      id: 3,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 5,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 6,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "90%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 7,
      name: "Thần Dược",
      release_date: "01/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 8,
      name: "Hố Tử Thần",
      release_date: "07/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 9,
      name: "Đại Chiến",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 14,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "90%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 15,
      name: "Thần Dược",
      release_date: "01/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 16,
      name: "Hố Tử Thần",
      release_date: "07/11",
      image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
  ];

  return (
    <>
      <Banner
        title="Nội dung bạn tìm kiếm không tồn tại!"
        description="Hãy thử sử dụng chức năng tìm kiếm để tìm thông tin bạn cần."
      />
      <div className=" my-3 py-3 mb-30 bg-white border-t border-b border-gray-200">
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
    </>
  );
}
