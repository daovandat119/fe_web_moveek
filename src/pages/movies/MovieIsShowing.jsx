import React, { useState, useEffect } from "react";
import Banner from "@/components/shared/Banner";
import MovieItem from "@/components/shared/movies/MovieItem";
import FilterDropdown from "@/components/shared/FilterDropdown";
import { motion } from "framer-motion";

export default function MovieIsShowing() {
  const [isOpen, setIsOpen] = useState("");
  const [selectedPopularity, setSelectedPopularity] = useState("Phổ biến");
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [selectedLanguage, setSelectedLanguage] = useState("Tất cả");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const movies = [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2025-03-18T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
      language: "Tiếng Việt",
      popularity: 98,
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2025-03-15T10:00:00Z",
      status: "Chiếu sớm",
      genre: "Kinh dị",
      language: "Tiếng Anh",
      popularity: 72,
    },
    {
      id: 3,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
      language: "Tiếng Việt",
      popularity: 80,
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2025-03-11T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
      language: "Tiếng Anh",
      popularity: 70,
    },
    {
      id: 5,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hài",
      language: "Tiếng Hàn",
      popularity: 85,
    },
    {
      id: 6,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "90%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
      language: "Tiếng Anh",
      popularity: 90,
    },
    {
      id: 7,
      name: "Thần Dược",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Tình cảm",
      language: "Tiếng Việt",
      popularity: 100,
    },
    {
      id: 8,
      name: "Hố Tử Thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Kinh dị",
      language: "Tiếng Trung",
      popularity: 100,
    },
    {
      id: 9,
      name: "Đại Chiến",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
      language: "Tiếng Việt",
      popularity: 98,
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Kinh dị",
      language: "Tiếng Anh",
      popularity: 72,
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
      language: "Tiếng Việt",
      popularity: 80,
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
      language: "Tiếng Anh",
      popularity: 70,
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hài",
      language: "Tiếng Hàn",
      popularity: 85,
    },
    {
      id: 14,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "90%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
      language: "Tiếng Anh",
      popularity: 90,
    },
    {
      id: 15,
      name: "Thần Dược",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Tình cảm",
      language: "Tiếng Việt",
      popularity: 100,
    },
    {
      id: 16,
      name: "Hố Tử Thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Kinh dị",
      language: "Tiếng Trung",
      popularity: 100,
    },
  ];

  const filters = [
    {
      label: "Phổ biến",
      items: [{ name: "Phổ biến" }, { name: "Mới nhất" }],
    },
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
    console.log(`Đã chọn ${dropdownKey}: ${value}`);
    if (dropdownKey === "phổ biến") {
      setSelectedPopularity(value);
    } else if (dropdownKey === "thể loại") {
      setSelectedGenre(value);
    } else if (dropdownKey === "ngôn ngữ") {
      setSelectedLanguage(value);
    }

    console.log("State hiện tại:", {
      selectedPopularity,
      selectedGenre,
      selectedLanguage,
    });
  };

  const filterMovies = () => {
    let filtered = [...movies];

    if (selectedGenre !== "Tất cả") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }

    if (selectedLanguage !== "Tất cả") {
      filtered = filtered.filter(
        (movie) => movie.language === selectedLanguage
      );
    }

    if (selectedPopularity === "Phổ biến") {
      filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedPopularity === "Mới nhất") {
      filtered.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }

    setFilteredMovies(filtered);
  };

  useEffect(() => {
    filterMovies();
  }, [selectedPopularity, selectedGenre, selectedLanguage]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Banner
        title={"Phim đang chiếu"}
        description={
          "4trên toàn quốc 14/03/2025. Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ với 1 bước!"
        }
      />
      <div className="py-5">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto ">
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
            <motion.div
              key={filteredMovies.length}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2 }}
              className="w-[85%] grid grid-cols-1 lg:grid-cols-6 gap-5"
            >
              {filteredMovies.length > 0
                ? filteredMovies.map((movie, index) => (
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
                        page={"MovieList"}
                      />
                    </div>
                  ))
                : null}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
