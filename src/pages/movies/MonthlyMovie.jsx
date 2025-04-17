import React, { useState, useEffect } from "react";
import Banner from "@/components/shared/Banner";
import FilterDropdown from "@/components/shared/FilterDropdown";
import MovieItem from "@/components/shared/movies/MovieItem";
import { motion } from "framer-motion";

export default function MonthlyMovie() {
  const [isOpen, setIsOpen] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(
    `Tháng ${new Date().getMonth() + 1}`
  );
  const [selectedYear, setSelectedYear] = useState(
    `Năm ${new Date().getFullYear()}`
  );
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [selectedLanguage, setSelectedLanguage] = useState("Tất cả");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const movies = [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
      language: "Tiếng Việt",
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Chiếu sớm",
      genre: "Kinh dị",
      language: "Tiếng Anh",
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
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
      language: "Tiếng Anh",
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
    },
    {
      id: 9,
      name: "Đại Chiến",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Hành động",
      language: "Tiếng Việt",
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Kinh dị",
      language: "Tiếng Anh",
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Gia đình",
      language: "Tiếng Việt",
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Hành động",
      language: "Tiếng Anh",
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Hài",
      language: "Tiếng Hàn",
    },
    {
      id: 14,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "90%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Gia đình",
      language: "Tiếng Anh",
    },
    {
      id: 15,
      name: "Thần Dược",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Tình cảm",
      language: "Tiếng Việt",
    },
    {
      id: 16,
      name: "Hố Tử Thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "100%",
      release_date: "2025-04-14T10:00:00Z",
      status: "Bán vé",
      month: 4,
      year: 2025,
      genre: "Kinh dị",
      language: "Tiếng Trung",
    },
  ];

  const filters = [
    {
      label: `Tháng ${new Date().getMonth() + 1}`,
      items: [
        { name: "Tháng 1" },
        { name: "Tháng 2" },
        { name: "Tháng 3" },
        { name: "Tháng 4" },
        { name: "Tháng 5" },
        { name: "Tháng 6" },
        { name: "Tháng 7" },
        { name: "Tháng 8" },
        { name: "Tháng 9" },
        { name: "Tháng 10" },
        { name: "Tháng 11" },
        { name: "Tháng 12" },
      ],
    },
    {
      label: `Năm ${new Date().getFullYear()}`,
      items: [
        { name: "Năm 2023" },
        { name: "Năm 2024" },
        { name: "Năm 2025" },
        { name: "Năm 2026" },
        { name: "Năm 2027" },
      ],
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
    if (dropdownKey === `tháng ${new Date().getMonth() + 1}`) {
      setSelectedMonth(value);
    } else if (dropdownKey === `năm ${new Date().getFullYear()}`) {
      setSelectedYear(value);
    } else if (dropdownKey === "thể loại") {
      setSelectedGenre(value);
    } else if (dropdownKey === "ngôn ngữ") {
      setSelectedLanguage(value);
    }
  };

  const filterMovies = () => {
    let filtered = [...movies];

    if (selectedMonth !== `Tháng ${new Date().getMonth() + 1}`) {
      const month = parseInt(selectedMonth.split(" ")[1]);
      filtered = filtered.filter(
        (movie) => new Date(movie.release_date).getMonth() + 1 === month
      );
    }

    if (selectedYear !== `Năm ${new Date().getFullYear()}`) {
      const year = parseInt(selectedYear.split(" ")[1]);
      filtered = filtered.filter(
        (movie) => new Date(movie.release_date).getFullYear() === year
      );
    }

    if (selectedGenre !== "Tất cả") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }

    if (selectedLanguage !== "Tất cả") {
      filtered = filtered.filter(
        (movie) => movie.language === selectedLanguage
      );
    }

    setFilteredMovies(filtered);
  };

  useEffect(() => {
    filterMovies();
  }, [selectedMonth, selectedYear, selectedGenre, selectedLanguage]);

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
        title={"Lịch phim tháng 03/2025"}
        description={
          "Lịch phim dự kiến sẽ ra mắt tại các rạp trên toàn quốc vào tháng 03/2025 tại Moveek.com"
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
              {filteredMovies.map((movie) => (
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
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
