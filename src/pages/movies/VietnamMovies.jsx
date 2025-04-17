import React, { useState, useEffect } from "react";
import Banner from "@/components/shared/Banner";
import FilterDropdown from "@/components/shared/FilterDropdown";
import MovieItem from "@/components/shared/movies/MovieItem";
import { motion } from "framer-motion";

export default function VietnamMovies() {
  const [isOpen, setIsOpen] = useState("");
  const [selectedYear, setSelectedYear] = useState(
    `Năm ${new Date().getFullYear()}`
  );
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const movies = [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "98%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "72%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Chiếu sớm",
      genre: "Kinh dị",
    },
    {
      id: 3,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "80%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "70%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
    },
    {
      id: 5,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "85%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hài",
    },
    {
      id: 6,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "90%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
    },
    {
      id: 7,
      name: "Thần Dược",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Tình cảm",
    },
    {
      id: 8,
      name: "Hố Tử Thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Kinh dị",
    },
    {
      id: 9,
      name: "Đại Chiến",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "98%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "72%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Kinh dị",
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "80%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "70%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hành động",
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "85%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Hài",
    },
    {
      id: 14,
      name: "Paddington",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "90%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Gia đình",
    },
    {
      id: 15,
      name: "Thần Dược",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Tình cảm",
    },
    {
      id: 16,
      name: "Hố Tử Thần",
      image: "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      trailer: "https://www.youtube.com/embed/salDbCA9BA0",
      rating: "100%",
      release_date: "2025-03-14T10:00:00Z",
      status: "Bán vé",
      genre: "Kinh dị",
    },
  ];

  const filters = [
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
  ];

  const handleFilterChange = (dropdownKey, value) => {
    if (dropdownKey === `năm ${new Date().getFullYear()}`) {
      setSelectedYear(value);
    } else if (dropdownKey === "thể loại") {
      setSelectedGenre(value);
    }
  };

  const filterMovies = () => {
    let filtered = [...movies];

    const selectedYearNumber = parseInt(selectedYear.split(" ")[1]);
    filtered = filtered.filter((movie) => {
      const releaseYear = new Date(movie.release_date).getFullYear();
      return releaseYear === selectedYearNumber;
    });

    if (selectedGenre !== "Tất cả") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }

    setFilteredMovies(filtered);
  };

  useEffect(() => {
    filterMovies();
  }, [selectedYear, selectedGenre]);

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
        title={"Phim Việt Nam 2025"}
        description={
          "24 phim Việt Nam dự kiến sẽ ra mắt tại các rạp trên toàn quốc trong năm 2025"
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
                    trailer={movie.trailer}
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
