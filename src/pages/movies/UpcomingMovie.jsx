import React, { useState, useEffect } from "react";
import Banner from "@/components/shared/Banner";
import MovieItem from "@/components/shared/movies/MovieItem";
import FilterDropdown from "@/components/shared/FilterDropdown";
import { motion } from "framer-motion";

export default function UpcomingMovie() {
  const [isOpen, setIsOpen] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [selectedLanguage, setSelectedLanguage] = useState("Tất cả");
  const [filteredWeeklyMovies, setFilteredWeeklyMovies] = useState([]);

  const weeklyMovies = [
    {
      week: 12,
      time: "17/03 - 23/03",
      movies: [
        {
          id: 1,
          name: "Đại Chiến tà man thiên thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "98%",
          release_date: "2025-03-17T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Việt",
        },
        {
          id: 2,
          name: "Đại Chiến tà man thiên thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "72%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Anh",
        },
        {
          id: 3,
          name: "Nhóc Quậy",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "80%",
          release_date: "2025-03-14T10:00:00Z",
          status: "BÁN VÉ",
          genre: "Gia đình",
          language: "Tiếng Việt",
        },
        {
          id: 4,
          name: "Bộ Tứ Báo Thù",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "70%",
          release_date: "2025-03-14T10:00:00Z",
          status: "CHIẾU SỚM",
          genre: "Hành động",
          language: "Tiếng Anh",
        },
        {
          id: 5,
          name: "Đệ Hiệp Sĩ",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "85%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Hài",
          language: "Tiếng Hàn",
        },
        {
          id: 6,
          name: "Paddington",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "90%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Anh",
        },
        {
          id: 7,
          name: "Thần Dược",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Tình cảm",
          language: "Tiếng Việt",
        },
        {
          id: 8,
          name: "Hố Tử Thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Trung",
        },
        {
          id: 9,
          name: "Đại Chiến",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "98%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Việt",
        },
        {
          id: 10,
          name: "Đèn Âm Hồn",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "72%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Anh",
        },
        {
          id: 11,
          name: "Nhóc Quậy",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "80%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Việt",
        },
        {
          id: 12,
          name: "Bộ Tứ Báo Thù",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "70%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Anh",
        },
        {
          id: 13,
          name: "Đệ Hiệp Sĩ",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "85%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Hài",
          language: "Tiếng Hàn",
        },
        {
          id: 14,
          name: "Paddington",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "90%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Anh",
        },
        {
          id: 15,
          name: "Thần Dược",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Tình cảm",
          language: "Tiếng Việt",
        },
        {
          id: 16,
          name: "Hố Tử Thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-03-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Trung",
        },
      ],
    },
    {
      week: 13,
      time: "24/04 - 30/04",
      movies: [
        {
          id: 1,
          name: "Đại Chiến tà man thiên thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "98%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Việt",
        },
        {
          id: 2,
          name: "Đại Chiến tà man thiên thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "72%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Anh",
        },
        {
          id: 3,
          name: "Nhóc Quậy",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "80%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Việt",
        },
        {
          id: 4,
          name: "Bộ Tứ Báo Thù",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "70%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Anh",
        },
        {
          id: 5,
          name: "Đệ Hiệp Sĩ",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "85%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Hài",
          language: "Tiếng Hàn",
        },
        {
          id: 6,
          name: "Paddington",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "90%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Anh",
        },
        {
          id: 7,
          name: "Thần Dược",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Tình cảm",
          language: "Tiếng Việt",
        },
        {
          id: 8,
          name: "Hố Tử Thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Trung",
        },
        {
          id: 9,
          name: "Đại Chiến",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "98%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Việt",
        },
        {
          id: 10,
          name: "Đèn Âm Hồn",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "72%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Anh",
        },
        {
          id: 11,
          name: "Nhóc Quậy",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "80%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Việt",
        },
        {
          id: 12,
          name: "Bộ Tứ Báo Thù",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "70%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Hành động",
          language: "Tiếng Anh",
        },
        {
          id: 13,
          name: "Đệ Hiệp Sĩ",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "85%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Hài",
          language: "Tiếng Hàn",
        },
        {
          id: 14,
          name: "Paddington",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "90%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Gia đình",
          language: "Tiếng Anh",
        },
        {
          id: 15,
          name: "Thần Dược",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Tình cảm",
          language: "Tiếng Việt",
        },
        {
          id: 16,
          name: "Hố Tử Thần",
          image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
          rating: "100%",
          release_date: "2025-04-14T10:00:00Z",
          status: null,
          genre: "Kinh dị",
          language: "Tiếng Trung",
        },
      ],
    },
  ];

  const filters = [
    {
      label: "Thể loại",
      items: [
        { name: "Tất cả" },
        { name: "Hành động" },
        { name: "Kinh dị" },
        { name: "Gia đình" },
        { name: "Hài" },
        { name: "Tình cảm" },
        { name: "Tâm lý" },
      ],
    },
    {
      label: "Ngôn ngữ",
      items: [
        { name: "Tất cả" },
        { name: "Tiếng Anh" },
        { name: "Tiếng Việt" },
        { name: "Tiếng Trung" },
        { name: "Tiếng Hàn" },
      ],
    },
  ];

  const handleFilterChange = (dropdownKey, value) => {
    if (dropdownKey === "thể loại") {
      setSelectedGenre(value);
    } else if (dropdownKey === "ngôn ngữ") {
      setSelectedLanguage(value);
    }
  };

  const filterMovies = (movies, selectedGenre, selectedLanguage) => {
    return movies.filter((movie) => {
      const isGenreMatch = selectedGenre === "Tất cả" || movie.genre === selectedGenre;
      const isLanguageMatch = selectedLanguage === "Tất cả" || movie.language === selectedLanguage;
      return isGenreMatch && isLanguageMatch;
    });
  };

  const filterWeeklyMovies = () => {
    const filtered = weeklyMovies.map((weeklyMovie) => ({
      ...weeklyMovie,
      movies: filterMovies(weeklyMovie.movies, selectedGenre, selectedLanguage),
    })).filter((weeklyMovie) => weeklyMovie.movies.length > 0);
    setFilteredWeeklyMovies(filtered);
  };

  useEffect(() => {
    filterWeeklyMovies();
  }, [selectedGenre, selectedLanguage]);

  useEffect(() => {
    setFilteredWeeklyMovies(weeklyMovies);
  }, []);

  const isrelease_dateBeforeEndOfFirstWeek = (release_date, endDateStr) => {
    const [endDay, endMonth] = endDateStr.split("/").map(Number);
    const currentYear = new Date().getFullYear();
    const endOfFirstWeek = new Date(currentYear, endMonth - 1, endDay, 23, 59, 59);
    const release = new Date(release_date);
    return release < endOfFirstWeek;
  };

  const firstWeekTime = weeklyMovies[0]?.time || "";
  const [endDateStr] = firstWeekTime.split(" - ");

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Banner
        title={"Sắp chiếu"}
        description={
          "Danh sách các phim dự kiến sẽ khởi chiếu tại các hệ thống rạp trên toàn quốc."
        }
      />
      <div className="py-5">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto">
          <div className="flex justify-between items-start mb-5 gap-5">
            <div className="w-[15%] relative flex flex-col">
              <ul className="flex flex-col gap-5">
                {filters.map((filter, index) => (
                  <FilterDropdown
                    key={index}
                    label={filter.label}
                    options={filter.items.map((item) => item.name)}
                    isOpen={isOpen === filter.label.toLowerCase()}
                    setIsOpen={setIsOpen}
                    dropdownKey={filter.label.toLowerCase()}
                    zIndex={10 + index}
                    onFilterChange={handleFilterChange}
                  />
                ))}
              </ul>
            </div>
            <div className="w-[85%]">
              {filteredWeeklyMovies.length > 0 ? (
                filteredWeeklyMovies.map((weeklyMovie, weeklyMovieIndex) => (
                  <div key={weeklyMovieIndex} className="mb-5">
                    <div className="mb-3">
                      <p className="text-gray-400 text-[12px] leading-3">
                        TUẦN #{weeklyMovie.week}
                      </p>
                      <h1>{weeklyMovie.time}</h1>
                    </div>
                    <motion.div
                      key={weeklyMovie.movies.length}
                      variants={gridVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 min-h-[200px]"
                    >
                      {weeklyMovie.movies.length > 0 ? (
                        weeklyMovie.movies.map((movie) => {
                          const showStar = isrelease_dateBeforeEndOfFirstWeek(
                            movie.release_date,
                            endDateStr
                          );

                          return (
                            <div
                              key={movie.id}
                              className="relative bg-white border border-gray-200 rounded-md"
                            >
                              <MovieItem
                                id={movie.id}
                                name={movie.name}
                                release_date={movie.release_date}
                                image={movie.image}
                                rating={movie.rating}
                                page={"UpcomingMovie"}
                                status={movie.status}
                                showStar={showStar}
                              />
                            </div>
                          );
                        })
                      ) : (
                        <div className="col-span-full flex items-center justify-center h-full">
                          <p className="text-gray-500 text-lg">
                            Không có phim nào phù hợp với bộ lọc trong tuần này.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))
              ) : (
                <div className="w-full flex items-center justify-center min-h-[200px]">
                  <p className="text-gray-500 text-lg">
                    Không có phim nào phù hợp với bộ lọc.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}