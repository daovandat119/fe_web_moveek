import React from "react";
import { useRef, useEffect } from "react";
import { Clock, UserPlus } from "lucide-react";
import Banner from "@/components/shared/Banner";

export default function EarlyMovie() {
  const earlyMovies = [
    {
      id: 1,
      title: "Công Chúa Băng Giá Và Xứ Sở Trong Gương",
      subtitle:
        "The Snow Queen and The Princess - Adventure, Animation, Family, Fantasy",
      description:
        "Kai and Gerda live in a cozy quiet town, but suddenly the Ice Spirits come there intending to freeze everyone. However, Ila, a little wizardess of Mirrorlands, comes to help the heroes. Together they go to the magic world of Mirrorlands to get the Spirits back.Kai and Gerda live in a cozy quiet town, but suddenly the Ice Spirits come there intending to freeze everyone. However, Ila, a little wizardess of Mirrorlands, comes to help the heroes. Together they go to the magic world of Mirrorlands to get the Spirits back.",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d265d49e784106624172.jpg",
      duration: "1h16'",
      rating: "P",
      releaseDate: "28/03",
      earlyDate: "22/03",
    },
    {
      id: 2,
      title: "Hành Tinh Cát",
      subtitle: "Dune - Sci-Fi, Adventure",
      description:
        "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d265d49e784106624172.jpg",
      duration: "2h35'",
      rating: "13+",
      releaseDate: "30/03",
      earlyDate: "23/03",
    },
    {
      id: 3,
      title: "Nhật Ký Tự Do",
      subtitle: "Freedom Writers - Drama",
      description:
        "A young teacher inspires her class of at-risk students to learn tolerance, apply themselves, and pursue education beyond high school.",
      image:
        "https://cdn.moveek.com/storage/media/cache/short/67d265d49e784106624172.jpg",
      duration: "2h03'",
      rating: "16+",
      releaseDate: "01/04",
      earlyDate: "25/03",
    },
  ];

  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      const contentHeight = contentRef.current.getBoundingClientRect().height;
      imageRef.current.style.height = `${contentHeight}px`;
    }
  }, [earlyMovies]);

  return (
    <>
      <Banner
        title={"Chiếu sớm"}
        description={
          "Danh sách các phim hiện đang chiếu rạp trên toàn quốc %now%. Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ với 1 bước!"
        }
      />

      <div className="pt-5">
        <div className="w-[90%] lg:w-[74%] mx-auto max-w-[1200px]">
          <div className="w-2/3">
            {earlyMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex flex-row items-stretch mb-5 gap-5 border border-gray-200 rounded-md p-5 bg-white"
              >
                <img
                  ref={imageRef}
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-md w-[30%] lg:w-[25%] object-cover"
                />
                <div ref={contentRef} className="w-[70%] lg:w-[75%]">
                  <h1 className="text-[24px] font-semibold">{movie.title}</h1>
                  <p className="mb-3 text-gray-400 text-base">
                    {movie.subtitle}
                  </p>
                  <p className="text-[17px] leading-relaxed">
                    {movie.description}
                  </p>
                  <div className="bg-[var(--color-bg-title)] rounded-md text-center py-5 my-5 leading-5">
                    <p className="inline-flex text-[16px] gap-3 items-center">
                      <Clock size={15} /> {movie.duration}{" "}
                      <UserPlus size={15} /> {movie.rating}
                    </p>
                    <p className="mt-1">
                      Khởi chiếu: {movie.releaseDate} · Chiếu sớm:{" "}
                      {movie.earlyDate}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-4">
                    <button className="w-1/2 border border-black py-2 rounded-md text-sm lg:text-base">
                      Thông tin phim
                    </button>
                    <button className="w-1/2 border border-red-500 py-2 rounded-md bg-red-500 text-white text-sm lg:text-base">
                      Mua vé
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
