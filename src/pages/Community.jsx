import React from "react";
import { useState } from "react";
import { slugUtils } from "@/utils/slugUtils";
import MovieListSlider from "@/components/shared/movies/MovieListSlider";
import EvaluateList from "@/components/shared/evaluate/EvaluateList";

export default function Community() {
  const [visibleCountEvaluate, setVisibleCountEvaluate] = useState(5);
  const [isUsers, setIsUsers] = useState("Moveek's Approved Critics");

  const movies = [
    {
      id: 1,
      name: "Đại Chiến tà man thiên thần",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 2,
      name: "Đại Chiến tà man thiên thần",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Chiếu sớm",
    },
    {
      id: 3,
      name: "Nhóc Quậy",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 4,
      name: "Bộ Tứ Báo Thù",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 5,
      name: "Đệ Hiệp Sĩ",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 6,
      name: "Paddington",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
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
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 9,
      name: "Đại Chiến",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "98%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 10,
      name: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "72%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 11,
      name: "Nhóc Quậy",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "80%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 12,
      name: "Bộ Tứ Báo Thù",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "70%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 13,
      name: "Đệ Hiệp Sĩ",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
      rating: "85%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
    {
      id: 14,
      name: "Paddington",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d286490dc56020277342.jpg",
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
      rating: "100%",
      release_date: "2022-03-14T10:00:00Z",
      status: "Bán vé",
    },
  ];

  const evaluates = [
    {
      id: 1,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: null,
      time: "7 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: null,
      nameMovie: "Đèn Âm Hồn",
      image: null,
      preferred: true,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 4,
      time: "5 ngày trước",
      comment: null,
      likes: 2,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
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
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
    {
      id: 4,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 10,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
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
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 8,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 8,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 9,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 8,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 9,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
    {
      id: 2,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 8,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 9,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
    {
      id: 4,
      name: "NGUYỄN VĂN A",
      avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
      rating: 9,
      time: "5 ngày trước",
      comment: "Phim tạm ổn nhưng diễn xuất chưa tự nhiên lắm.",
      likes: 2,
      nameMovie: "Đèn Âm Hồn",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/677df80456d1f166570708.jpg",
      preferred: false,
    },
  ];

  const dataUsers = [
    {
      name: "Moveek's Approved Critics",
      users: [
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "PHẠM THANH TÙNG",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
      ],
    },
    {
      name: "Active Users",
      users: [
        {
          name: "NGUYỄN VĂN A",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "NGUYỄN VĂN A",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "NGUYỄN VĂN A",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "NGUYỄN VĂN A",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "NGUYỄN VĂN A",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
        {
          name: "NGUYỄN VĂN A",
          avatar: "https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png",
          introduce: "Nhà phê bình phim tự do",
        },
      ],
    },
  ];

  const remainingEvaluates = evaluates.slice(0, visibleCountEvaluate);

  return (
    <>
      <div className="py-3 bg-white border-t border-b border-gray-200">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto text-center leading-6">
          <div className="my-4">
            <h1 className="text-[25px] font-semibold">Thịnh hành</h1>
            <p className="text-[13px] text-gray-400">
              Các phim được yêu thích trong tuần
            </p>
          </div>
          <MovieListSlider movies={movies} page={"Community"} />
        </div>
      </div>
      <div className="py-3  border-t border-b border-gray-200">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto mt-5 flex justify-between items-start gap-5">
          <EvaluateList
            evaluates={evaluates}
            visibleCountEvaluate={visibleCountEvaluate}
            setVisibleCountEvaluate={setVisibleCountEvaluate}
            remainingEvaluates={remainingEvaluates}
            page={"Community"}
            title={"Moveek-er đang làm gì?"}
          />
          <div className="w-[33%] border border-gray-200 rounded-md">
            <ul className="flex justify-center gap-5 pt-5 px-5 bg-white border-b border-gray-200 rounded-t-md text-gray-400">
              {dataUsers.map((user) => (
                <li
                  onClick={() => setIsUsers(user.name)}
                  className="relative pb-5"
                >
                  {user.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full ${
                      slugUtils(user.name) === slugUtils(isUsers)
                        ? "border text-blue-600"
                        : ""
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
            <div className="px-5 bg-white rounded-b-md">
              {dataUsers.map(
                (dataUser) =>
                  slugUtils(dataUser.name) === slugUtils(isUsers) &&
                  dataUser.users.map((user, index) => (
                    <div
                      className={`flex flex-row gap-3 py-5 ${
                        index < dataUser.users.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h1 className="text-black text-md font-semibold">
                          {user.name}
                        </h1>
                        <p className="text-gray-400 text-sx">
                          {user.introduce}
                        </p>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
