import React from "react";
import { useState, useEffect } from "react";
import { MapPin, Globe, List } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { slugUtils } from "@/utils/slugUtils";
import { setIdDefault } from "@/store//ProvinceSlice";
import MovieShowtimeList from "@/components/shared/movies/MovieShowtimeList";

export default function Theater() {
  const [result, setResult] = useState([]);
  const provinces = useSelector((state) => state.province.provinces);
  const theaters = useSelector((state) => state.province.theaters);

  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    let result = null;

    for (const province of provinces) {
      for (const brand of province.theater_brands) {
        const theater = brand.theaters.find((t) => slugUtils(t.name) === name);
        if (theater) {
          result = {
            id: theater.id,
            theaterName: theater.name,
            province: province.province,
            brand: brand.brand,
          };
          break;
        }
      }
      if (result) break;
    }
    if (!result) {
      // dispatch(setIdDefault(null));
    } else {
      setResult(result);
      dispatch(setIdDefault(result.id));
    }
  }, [name]);

  return (
    <>
      <div className="bg-[var(--color-bg-title)]">
        <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto">
          <div className="flex items-start justify-between gap-5  py-3">
            <img
              src={theaters[0].image}
              alt="Beta Cinemas Logo"
              className="w-[7%] object-cover border border-gray-200 rounded-full bg-white"
            />
            <div className="w-[95%]">
              <h1 className="text-3xl">{theaters[0].name}</h1>
              <p className="text-sm text-gray-400">{theaters[0].name}</p>
              <p className="text-sm text-gray-400 inline-flex items-center gap-3">
                <button
                  onClick={() => window.open(theaters[0].map_link, "_blank")}
                  className="inline-flex items-center gap-1"
                >
                  <MapPin size={13} />
                  Bản đồ
                </button>
                <Link className="inline-flex items-center gap-1">
                  <Globe size={13} />
                  {result.province}
                </Link>
                <Link className="inline-flex items-center gap-1">
                  <List size={13} />
                  {result.brand}
                </Link>
              </p>
              <p className="mt-4">{theaters[0].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto mt-40 flex gap-5 items-start justify-between">
        <MovieShowtimeList page="Theater" />
        <div className="w-[35%] bg-white border border-gray-100 rounded-md">
          <h1 className="bg-[var(--color-bg-title)] p-5 rounded-t-md text-black">
            Rạp gần đây
          </h1>
          <div className="flex justify-between p-5 gap-3 items-center border-b border-gray-100">
            <img
              src="https://cdn.moveek.com/storage/media/cache/square/a1cd7de61579e7bca68c7bee4d76c4c7388478cb.png"
              alt="Beta Cinemas Logo"
              className="w-[15%] rounded-full object-cover border border-gray-200 bg-white"
            />
            <div className="w-[85%]">
              <h1>DCINE Bến Thành</h1>
              <p className="text-sm text-gray-400">
                Số 6, Mạc Đĩnh Chi, Q.1, Tp. Hồ Chí Minh · 198m · Bản đồ
              </p>
            </div>
          </div>
          <div className="flex justify-between p-5 gap-3 items-center border-b border-gray-100">
            <img
              src="https://cdn.moveek.com/storage/media/cache/square/a1cd7de61579e7bca68c7bee4d76c4c7388478cb.png"
              alt="Beta Cinemas Logo"
              className="w-[15%] rounded-full object-cover border border-gray-200 bg-white"
            />
            <div className="w-[85%]">
              <h1>DCINE Bến Thành</h1>
              <p className="text-sm text-gray-400">
                Số 6, Mạc Đĩnh Chi, Q.1, Tp. Hồ Chí Minh · 198m · Bản đồ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
