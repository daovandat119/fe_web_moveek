import React from "react";
import UserMenu from "@/components/profiles/UserMenu";
import { Star, MessageCircle } from "lucide-react";

export default function Diary() {
  const movies = [
    {
      id: 1,
      image: "https://cdn.moveek.com/storage/media/cache/tall/67d0f59e9b7b9107706731.jpg",
      rating: 10,
    },
    {
      id: 2,
      image: "https://cdn.moveek.com/storage/media/cache/tall/67d0f59e9b7b9107706731.jpg",
      rating: 10,
    },
    {
      id: 3,
      image: "https://cdn.moveek.com/storage/media/cache/tall/67d0f59e9b7b9107706731.jpg",
      rating: 10,
    },
    {
      id: 4,
      image: "https://cdn.moveek.com/storage/media/cache/tall/67d0f59e9b7b9107706731.jpg",
      rating: 10,
    },
    {
      id: 5,
      image: "https://cdn.moveek.com/storage/media/cache/tall/67d0f59e9b7b9107706731.jpg",
      rating: 10,
    },
    {
      id: 6,
      image: "https://cdn.moveek.com/storage/media/cache/tall/67d0f59e9b7b9107706731.jpg",
      rating: 10,
    },
  ];

  return (
    <>
      <UserMenu page="Tủ phim" />
      <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto grid grid-cols-8 gap-5 py-10">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-full flex flex-col bg-white rounded-md border border-gray-200"
          >
            <img
              src={movie.image}
              alt="avatar"
              className="rounded-t-md"
            />
            <div className="flex justify-end">
              <span className="flex items-center text-xs gap-1 py-3 pr-2">
                <Star
                  className="text-amber-300 fill-amber-300"
                  size={12}
                />
                {movie.rating}
                <MessageCircle size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}