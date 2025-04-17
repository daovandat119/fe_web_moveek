import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import UseClickOutside from "@/hooks/UseClickOutside";
import MovieItem from "@/components/shared/movies/MovieItem";
import UseLockBodyScroll from "@/hooks/UseLockBodyScroll";

export default function MovieListSlider({ movies, page }) {
  const [selectedTrailer, setSelectedTrailer] = useState(false);
  const [movieIds, setMovieIds] = useState("");
  const dropdownRef = useRef(null);
  UseClickOutside(dropdownRef, () => setSelectedTrailer(false));
  UseLockBodyScroll(selectedTrailer);
  
  return (
    <div className="relative pb-5">
      <Swiper
        slidesPerView={8}
        spaceBetween={15}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Pagination]}
        breakpoints={{
          300: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="bg-white border border-gray-100 rounded-md w-min-100"
          >
            <MovieItem
              id={movie.id}
              name={movie.name}
              release_date={movie.release_date}
              image={movie.image}
              rating={movie.rating}
              status={movie.trailer}
              setSelectedTrailer={setSelectedTrailer}
              setMovieIds={setMovieIds}
              page={page != null ? page : "MovieListSlider"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-5 flex justify-center text-gray-500"></div>
      {selectedTrailer && (
        <>
          <span className="fixed top-0 left-0 w-full h-full bg-[var(--color-overlay-bg)]/30 backdrop-brightness-100 z-30"></span>
          <iframe
            loading="lazy"
            ref={dropdownRef}
            className="fixed top-5 w-[800px] h-[500px] mx-auto inset-x-0 z-100"
            src={movies[movieIds].trailer}
            title="Trailer phim"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </>
      )}
    </div>
  );
}
