import React from "react";
import Advertisement from "@/components/shared/Advertisement";
import CinemaSelector from "@/components/shared/CinemaSelector";
import MovieShowtimeList from "@/components/shared/movies/MovieShowtimeList";
import Banner from "@/components/shared/Banner";

export default function MovieShowtimes() {
  
  return (
    <>
      <Banner
        title={"Lịch chiếu"}
        description={"Tìm lịch chiếu phim / rạp nhanh nhất với chỉ 1 bước!"}
      />

      <Advertisement />
      <div className="mt-5 py-3 border-t border-b border-gray-100">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto ">
          <div className="flex justify-between gap-5 items-start mb-5">
            <CinemaSelector isTicketStatus={false} />
            <MovieShowtimeList />
          </div>
        </div>
      </div>
    </>
  );
}
