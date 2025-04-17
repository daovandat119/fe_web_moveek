import React from "react";
import MovieListSlider from "@/components/shared/movies/MovieListSlider";
import Advertisement from "@/components/shared/Advertisement";
import CinemaSelector from "@/components/shared/CinemaSelector";
import MovieShowtimeList from "@/components/shared/movies/MovieShowtimeList";

export default function BuyTickets() {
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

  return (
    <>
      <div className="my-3 py-3 bg-white border-t border-b border-gray-200">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto">
          <h1 className="mb-3 text-[20px] text-center">Mua vé xem phim</h1>
          <MovieListSlider movies={movies} />
        </div>
      </div>
      <Advertisement />
      <div className="mt-5 py-3 border-t border-b border-gray-100">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto ">
          <h1 className="mb-3 text-[20px] text-center">Mua vé theo rạp</h1>
          <div className="flex justify-between gap-5 items-start mb-5">
            <CinemaSelector isTicketStatus={true} />
            <MovieShowtimeList />
          </div>
        </div>
      </div>
    </>
  );
}
