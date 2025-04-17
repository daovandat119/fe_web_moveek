import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieDetail from "@/components/shared/movies/MovieDetail";
import UseClickOutside from "@/hooks/UseClickOutside";
import { setProvince } from "@/store/ProvinceSlice";
import DateSelector from "@/components/shared/movies/DateSelector";

export default function MovieDetailShowtime() {
  const { name } = useParams();
  const provinceDropdownRef = useRef(null);
  const versionDropdownRef = useRef(null); 
  const [isProvincesOpen, setIsProvincesOpen] = useState(false);
  const [isVersionsOpen, setIsVersionsOpen] = useState(false);
  const [searchProvince, setSearchProvince] = useState("");
  const [selectedVersion, setSelectedVersion] = useState({ id: 1, version: "2D" });

  const provinces = useSelector((state) => state.province.provinces);
  const todayDefault = useSelector((state) => state.province.todayDefault);
  const selectedProvince = useSelector((state) => state.province.selectedProvince);

  const dispatch = useDispatch();

  UseClickOutside(provinceDropdownRef, () => setIsProvincesOpen(false));
  UseClickOutside(versionDropdownRef, () => setIsVersionsOpen(false));

  const versions = [
    { id: 1, version: "2D" },
    { id: 2, version: "3D" },
    { id: 3, version: "IMAX" },
  ];

  const moviesDetail = {
    id: 1,
    name: "Sát Thủ Vô Cùng Cực Hài",
    title: "Hitman 2",
    image: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
    banner: "https://cdn.moveek.com/storage/media/cache/short/67b407ce027c7276418928.jpg",
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
    performers: "Kwon Sang-Woo, Jung Joon-ho, Lee Yi-kyung, Hwangwoo Seul-hye, Lee Ji-Won",
    director: "Choi Won-sub",
    manufacturers: "Dave Caplan, Chris Ferguson, Brian Kavanaugh-Jones",
  };

  const handleCitySelect = (province) => {
    setIsProvincesOpen(false);
    setSearchProvince("");
    dispatch(setProvince(province));
    console.log(province, todayDefault);
  };

  const handleVersionSelect = (id, version) => {
    setSelectedVersion({ id, version });
    console.log(id, version);
    setIsVersionsOpen(false);
  };

  return (
    <>
      <MovieDetail
        moviesDetail={moviesDetail}
        name={name}
        page={"MovieDetailShowtime"}
      />
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto mt-3">
        <div className="w-2/3 flex flex-row gap-5 border border-gray-300 rounded-md p-5 bg-white">
          <div className="relative w-1/2">
            <input
              type="text"
              onClick={() => setIsProvincesOpen(!isProvincesOpen)}
              value={selectedProvince}
              className={`px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full ${
                isProvincesOpen ? "rounded-t-md" : "rounded-md"
              }`}
              readOnly
            />
            {isProvincesOpen && (
              <div
                ref={provinceDropdownRef}
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
                      province.province.toLowerCase().includes(searchProvince.toLowerCase())
                    )
                    .map((province) => (
                      <li
                        key={province.id}
                        className="p-3 cursor-pointer w-full"
                        onClick={() => handleCitySelect(province.province)}
                      >
                        {province.province}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-1/2">
            <input
              type="text"
              onClick={() => setIsVersionsOpen(!isVersionsOpen)}
              value={selectedVersion.version}
              className={`px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] w-full ${
                isVersionsOpen ? "rounded-t-md" : "rounded-md"
              }`}
              readOnly
            />
            {isVersionsOpen && (
              <div
                ref={versionDropdownRef}
                className="w-full top-11 absolute border border-gray-300 rounded-b-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-hover-input)] bg-white px-2 pb-5 pt-2"
              >
                <ul className="max-h-[200px] overflow-auto text-gray-400">
                  {versions.map((version) => (
                    <li
                      key={version.id}
                      className="p-3 cursor-pointer w-full"
                      onClick={() => handleVersionSelect(version.id, version.version)}
                    >
                      {version.version}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <DateSelector moviesDetail={moviesDetail} />
      </div>
    </>
  );
}