import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "@/components/shared/movies/MovieDetail";
import Advertisement from "@/components/shared/Advertisement";
import EvaluateList from "@/components/shared/evaluate/EvaluateList";

export default function MovieDetailReview() {
  const { name } = useParams();
  const [visibleCountEvaluate, setVisibleCountEvaluate] = useState(3);

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

  const evaluates = [
    {
      id: 1,
      name: "PHẠM THANH TÙNG",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 10,
      time: "7 ngày trước",
      comment:
        "Đạo diễn VN chưa đủ tầm để làm cho cái cốt truyện nó có đầu có đuôi. Kịch bản rất nhạt và chỉ có các yếu tố giật mình để hù doạ, còn lại không có gì đặc sắc, nhiều tình tiết cực kỳ ngớ ngẩn và vô lý ko chịu được.",
      likes: 1,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 4,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
    },
    {
      id: 3,
      name: "PHẠM THANH TÙNG",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 8,
      time: "7 ngày trước",
      comment:
        "Đạo diễn VN chưa đủ tầm để làm cho cái cốt truyện nó có đầu có đuôi. Kịch bản rất nhạt và chỉ có các yếu tố giật mình để hù doạ, còn lại không có gì đặc sắc, nhiều tình tiết cực kỳ ngớ ngẩn và vô lý ko chịu được.",
      likes: 1,
    },
    {
      id: 4,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 10,
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
      rating: 8,
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
      rating: 9,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
    },
  ];

  const remainingEvaluates = evaluates.slice(0, visibleCountEvaluate);
  
  const filteredEvaluates = evaluates.filter(
    (evaluate) => evaluate.rating < 5
  );

  return (
    <>
      <MovieDetail
        moviesDetail={moviesDetail}
        name={name}
        page={"MovieDetailReview"}
      />
      <Advertisement />
      <div className="w-full flex flex-col gap-5">
        <div className="relative w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto border-b border-gray-200 text-gray-400">
          <div className="lg:w-[67%] flex justify-between items-center bg-white rounded-md border border-gray-200">
            <div className="w-1/2 px-5 py-2 flex flex-col gap-2 items-center">
              <h1 className="text-4xl text-[var(--color-overlay-bg)] font-semibold">{100 - (filteredEvaluates.length / evaluates.length) * 100}%</h1>
              <p className="w-full h-1 bg-gray-200 rounded-md">
                <span
                  className="block h-1 bg-[var(--color-overlay-bg)] rounded-md"
                  style={{ width: `${100 - (filteredEvaluates.length / evaluates.length) * 100}%` }}
                ></span>
              </p>
            </div>
            <div className="w-1/2 border-l border-gray-200 px-5 py-3 flex flex-col gap-3">
              <h3 className="text-sm  text-gray-800">
              <span className="font-semibold">{moviesDetail.name}</span> nhận được <span className="font-semibold">{evaluates.length}</span> lượt đánh giá <span className="text-[var(--color-hover-input)]">được xác thực</span> với số
                điểm trung bình <span className="font-semibold">{(evaluates.reduce((sum, evaluate) => sum + evaluate.rating, 0)/evaluates.length)}.</span>
              </h3>
              <p className="text-xs text-gray-600">
                Đa số người xem đánh giá tích cực về bộ phim. Chỉ <span className="font-semibold">{}</span> nhận xét
                không hay <span className="font-semibold">{(filteredEvaluates.length / evaluates.length) * 100}</span> 
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 place-items-start mb-5">
            <EvaluateList
              evaluates={evaluates}
              visibleCountEvaluate={visibleCountEvaluate}
              setVisibleCountEvaluate={setVisibleCountEvaluate}
              remainingEvaluates={remainingEvaluates}
              title={"Cộng đồng"}
              name={name}
            />
          </div>
        </div>
      </div>
    </>
  );
}
