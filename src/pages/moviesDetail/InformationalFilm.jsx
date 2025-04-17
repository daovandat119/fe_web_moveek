import React from "react";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import MovieDetail from "@/components/shared/movies/MovieDetail";
import Advertisement from "@/components/shared/Advertisement";
import UseClickOutside from "@/hooks/UseClickOutside";
import ReviewList from "@/components/shared/reviews/ReviewList";
import EvaluateList from "@/components/shared/evaluate/EvaluateList";
import { useSelector } from "react-redux";

export default function InformationalFilm() {
  const { name } = useParams();

  const [isProvincesOpen, setIsProvincesOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(undefined);
  const [visibleCountEvaluate, setVisibleCountEvaluate] = useState(undefined);
  const [searchProvince, setSearchProvince] = useState("");
  const dropdownRef = useRef(null);

  const provinces = useSelector((state) => state.province.provinces);
  const [selectedProvince, setSelectedProvince] = useState({
    id: provinces[0]?.id,
    province: provinces[0]?.province,
  });

  UseClickOutside(dropdownRef, () => setIsProvincesOpen(false));

  const moviesDetail = {
    id: 1,
    name: "Sát Thủ Vô Cùng Cực Hài",
    title: "Hitman 2",
    image:
      "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
    banner:
      "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
    age_rating: 18,
    duration_minutes: 121,
    version: "2D",
    language: "Anh",
    subtitle_en: false,
    subtitle_vi: true,
    dubbing: false,
    trailer: "https://www.youtube.com/embed/salDbCA9BA0",
    release_date: "2022-03-14T10:00:00Z",
    category: "Comedy, Action",
    description:
      "Phim lấy cảm hứng từ câu chuyện có thật và “truyền thuyết kinh dị nhất về người chết sống lại” - Ở một ngôi làng vùng cao, cặp vợ chồng Quang và Như sống bằng nghề mai táng. Cuộc sống yên bình của họ bị xáo trộn khi phát hiện một cỗ quan tài vô chủ trên mảnh đất nhà mình. Từ đây, những hiện tượng kỳ lạ bắt đầu xảy ra và ám ảnh cả ngôi làng.",
    performers:
      "Kwon Sang-Woo, Jung Joon-ho, Lee Yi-kyung, Hwangwoo Seul-hye, Lee Ji-Won",
    director: "Choi Won-sub",
    manufacturers: "Dave Caplan, Chris Ferguson, Brian Kavanaugh-Jones",
  };

  const reviews = [
    {
      title:
        "Review Sát Thủ Vô Cùng Cực Hài - Xứng đáng là bom tấn giải trí đầu năm 2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "tinlethanhnhan",
      time: "1 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
    {
      title: "Top 5 bộ phim đáng xem nhất tháng 3 - Không thể bỏ lỡ!",
      image:
        "https://cdn.moveek.com/storage/media/cache/small/67c97272b2e9b584281830.png",
      author: "hoanganh",
      time: "2 ngày trước",
      description:
        "  Lạc Trôi (Flow) là một bộ phim không lời lại lay động chúng ta đến vậy.",
    },
  ];

  const evaluates = [
    {
      id: 1,
      name: "PHẠM THANH TÙNG",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 2,
      time: "7 ngày trước",
      comment:
        "Đạo diễn VN chưa đủ tầm để làm cho cái cốt truyện nó có đầu có đuôi. Kịch bản rất nhạt và chỉ có các yếu tố giật mình để hù doạ, còn lại không có gì đặc sắc, nhiều tình tiết cực kỳ ngớ ngẩn và vô lý ko chịu được.",
      likes: 1,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 3,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
    },
    {
      id: 3,
      name: "PHẠM THANH TÙNG",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 2,
      time: "7 ngày trước",
      comment:
        "Đạo diễn VN chưa đủ tầm để làm cho cái cốt truyện nó có đầu có đuôi. Kịch bản rất nhạt và chỉ có các yếu tố giật mình để hù doạ, còn lại không có gì đặc sắc, nhiều tình tiết cực kỳ ngớ ngẩn và vô lý ko chịu được.",
      likes: 1,
    },
    {
      id: 4,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 3,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
    },
    {
      id: 1,
      name: "PHẠM THANH TÙNG",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 2,
      time: "7 ngày trước",
      comment:
        "Đạo diễn VN chưa đủ tầm để làm cho cái cốt truyện nó có đầu có đuôi. Kịch bản rất nhạt và chỉ có các yếu tố giật mình để hù doạ, còn lại không có gì đặc sắc, nhiều tình tiết cực kỳ ngớ ngẩn và vô lý ko chịu được.",
      likes: 1,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 3,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
    },
    {
      id: 3,
      name: "PHẠM THANH TÙNG",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 2,
      time: "7 ngày trước",
      comment:
        "Đạo diễn VN chưa đủ tầm để làm cho cái cốt truyện nó có đầu có đuôi. Kịch bản rất nhạt và chỉ có các yếu tố giật mình để hù doạ, còn lại không có gì đặc sắc, nhiều tình tiết cực kỳ ngớ ngẩn và vô lý ko chịu được.",
      likes: 1,
    },
    {
      id: 4,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 3,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
    },
  ];

  const remainingReviews = reviews.slice(0, 3);

  const remainingEvaluates = evaluates.slice(0, 3);

  const handleCitySelect = (id, province) => {
    setSelectedProvince({ id, province });
    setIsProvincesOpen(false);
    setSearchProvince("");
  };

  return (
    <>
      <MovieDetail
        moviesDetail={moviesDetail}
        name={name}
        page={"InformationalFilm"}
      />
      <Advertisement />
      <div className="w-full flex flex-col gap-5">
        <div className="relative w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto border-b border-gray-200 text-gray-400">
          <div className="mt-10 w-2/3">
            <iframe
              className="w-full h-[450px]"
              src={moviesDetail.trailer}
              title={`${moviesDetail.name} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className="w-full p-4 border border-gray-100 rounded-md bg-white my-5">
              <h1 className="text-black text-[20px]">Lịch chiếu</h1>
              <p className="text-[15px]">
                Chọn khu vực bạn muốn xem lịch chiếu cho phim{" "}
                <span className="text-md text-gray-400 text-[17px]">
                  {moviesDetail.name}
                </span>
                .
              </p>
              <div className="flex flex-row gap-5 mt-5 ">
                <div className="relative w-7/10">
                  <input
                    type="text"
                    onClick={() => setIsProvincesOpen(!isProvincesOpen)}
                    value={selectedProvince.province}
                    className={`px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full ${
                      isProvincesOpen ? "rounded-t-md" : "rounded-md "
                    }`}
                    readOnly
                  />
                  {isProvincesOpen && (
                    <div
                      ref={dropdownRef}
                      className="w-full top-11 absolute border border-gray-300 rounded-b-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] bg-white px-2 pb-5 pt-2"
                    >
                      <input
                        type="text"
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full"
                        onChange={(e) => setSearchProvince(e.target.value)}
                      />
                      <ul className="max-h-[200px] overflow-auto text-gray-400">
                        {provinces
                          .filter((province) =>
                            province.province
                              .toLowerCase()
                              .includes(searchProvince.toLowerCase())
                          )
                          .map((province, index) => (
                            <li
                              key={index}
                              className="p-3 cursor-pointer w-full"
                              onClick={() => {
                                handleCitySelect(
                                  province.id,
                                  province.province
                                );
                              }}
                            >
                              {province.province}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    console.log(
                      "Xem lịch chiếu cho tỉnh: ",
                      selectedProvince.id
                    );
                  }}
                  className="w-3/10 px-3 py-2  bg-[#12263f] text-white rounded-md"
                >
                  Xem lịch chiếu
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 place-items-start mb-5">
            <ReviewList
              reviews={reviews}
              remainingReviews={remainingReviews}
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              title={"Bài viết liên quan"}
              name={moviesDetail.name}
            />
            <EvaluateList
              evaluates={evaluates}
              visibleCountEvaluate={visibleCountEvaluate}
              setVisibleCountEvaluate={setVisibleCountEvaluate}
              remainingEvaluates={remainingEvaluates}
              name={moviesDetail.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}
