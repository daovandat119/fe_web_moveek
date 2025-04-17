import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingProgressBar from "@/components/moviesBooking/BookingProgressBar";
import SeatSelection from "@/components/moviesBooking/SeatSelection";
import SnackSelection from "@/components/moviesBooking/SnackSelection";

export default function BookTickets() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [calculateTicketCost, setCalculateTicketCost] = useState(0);
  const [calculatePopcornWaterCost, setCalculatePopcornWaterCost] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [page, setPage] = useState("select-seat");

  const initialSeatLayoutData = {
    price: 45000,
    movieTitle: "Anh Không Đau",
    cinemaName: "Cinestar Quốc Thanh",
    time: "19:30",
    date: "20/11/2021",
    auditorium: 2,
    seatingArrangement: [
      {
        row: "A",
        seats: [
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
        ],
      },
      {
        row: "B",
        seats: [
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "single", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
        ],
      },
      {
        row: "C",
        seats: [
          { type: "double", status: "available" },
          { type: "double", status: "available" },
          { type: "double", status: "available" },
          { type: "double", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "single", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "empty", status: "available" },
          { type: "double", status: "available" },
          { type: "double", status: "available" },
          { type: "double", status: "available" },
        ],
      },
      {
        row: "D",
        seats: [
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
          { type: "recliner", status: "available" },
        ],
      },
    ],
  };

  const [seatLayoutData, setSeatLayoutData] = useState(initialSeatLayoutData);

  const comboMenus = [
    {
      id: 1,
      name: "Combo Gấu",
      details: "1 Coke 32oz + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel",
      price: "119000",
    },
    {
      id: 2,
      name: "Poca Khoai Tây 54gr",
      details: null,
      price: "28000",
    },
    { id: 3, name: "Poca Wavy 54gr", details: null, price: "28000" },
    { id: 4, name: "Fanta 32oz", details: null, price: "37000" },
    { id: 5, name: "Coke Zero 32oz", details: null, price: "37000" },
  ];

  const calculateTotalPrice = () => {
    return calculateTicketCost + calculatePopcornWaterCost;
  };

  const handlePayment = () => {
    navigate("/ticket-payment/1");
  };

  return (
    <>
      <BookingProgressBar activeStep={page} />
      <div className="w-[90%] lg:w-[74%] max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row justify-center lg:items-start gap-5 p-4">
        {page === "select-seat" ? (
          <SeatSelection
            seatLayoutData={seatLayoutData}
            setSelectedSeats={setSelectedSeats}
            setCalculateTicketCost={setCalculateTicketCost}
            setSeatLayoutData={setSeatLayoutData}
          />
        ) : (
          <SnackSelection
            comboMenus={comboMenus}
            setCalculatePopcornWaterCost={setCalculatePopcornWaterCost}
            setQuantities={setQuantities}
            quantities={quantities}
          />
        )}
        <div className="lg:w-[35%] text-[15px] text-gray-600">
          <div className="bg-white border border-gray-100 p-4 shadow-md rounded-md">
            <h1>{initialSeatLayoutData.movieTitle}</h1>
            <p className="font-semibold text-black">
              {initialSeatLayoutData.cinemaName}
            </p>
            <p className="w-full inline-flex gap-1 items-baseline">
              Suất
              <span className="font-semibold text-black">
                {initialSeatLayoutData.time} {initialSeatLayoutData.date}
              </span>
            </p>
            <p className="ww-full inline-flex gap-1 items-baseline">
              Phòng chiếu
              <span className="font-semibold text-black">
                P{initialSeatLayoutData.auditorium}
              </span>
              - Ghế
              <span className="font-semibold text-black">
                {selectedSeats.length > 0 ? selectedSeats.join(", ") : "..."}
              </span>
            </p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-md mt-5">
            <h1 className="text-[13px] text-gray-400">TỔNG ĐƠN HÀNG</h1>
            <span className="font-semibold text-black text-[20px]">
              {calculateTotalPrice().toLocaleString("vi-VN")} ₫
            </span>
          </div>
          <div className="flex justify-between gap-5">
            <button
              onClick={() => {
                if (page === "select-snacks") {
                  setPage("select-seat");
                }
              }}
              className={`w-[20%] border border-gray-500 py-1 mt-5 rounded-md text-[20px] ${
                page === "select-snacks"
                  ? "hover:bg-[var(--color-button)] hover:text-white"
                  : ""
              } `}
            >
              ←
            </button>
            <button
              className={`w-[80%] bg-gray-500 text-white py-3 mt-5 rounded-md ${
                selectedSeats.length <= 0
                  ? ""
                  : "hover:bg-[var(--color-button)]"
              }`}
              disabled={selectedSeats.length <= 0}
              onClick={() => {
                if (page === "select-seat") {
                  setPage("select-snacks");
                } else if (page === "select-snacks") {
                  handlePayment();
                };
              }}
            >
              TIẾP TỤC
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
