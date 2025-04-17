import React from "react";
import { useEffect } from "react";

export default function SeatSelection({
  setSelectedSeats,
  setCalculateTicketCost,
  seatLayoutData,
  setSeatLayoutData
}) {

  const getSeatCode = (rowIndex, seatIndex) => {
    const rowLetter = String.fromCharCode(65 + rowIndex);
    return `${rowLetter}${seatIndex + 1}`;
  };

  const getSelectedSeats = () => {
    const selectedSeats = [];
    seatLayoutData.seatingArrangement.forEach((row, rowIndex) => {
      row.seats.forEach((seat, seatIndex) => {
        if (seat.status === "selected") {
          selectedSeats.push(getSeatCode(rowIndex, seatIndex));
        }
      });
    });
    return selectedSeats;
  };

  const toggleSeatSelection = (rowIndex, seatIndex) => {
    const selectedSeats = getSelectedSeats();
    const currentSeat =
      seatLayoutData.seatingArrangement[rowIndex].seats[seatIndex];

    if (selectedSeats.length >= 10 && currentSeat.status !== "selected") {
      alert("Bạn chỉ được chọn tối đa 10 ghế!");
      return;
    }

    setSeatLayoutData((prevData) => {
      const updatedArrangement = prevData.seatingArrangement.map(
        (row, rIndex) => {
          if (rIndex === rowIndex) {
            return {
              ...row,
              seats: row.seats.map((seat, sIndex) => {
                if (sIndex === seatIndex) {
                  if (seat.type !== "empty" && seat.status !== "sold") {
                    return {
                      ...seat,
                      status:
                        seat.status === "available" ? "selected" : "available",
                    };
                  }
                }
                return seat;
              }),
            };
          }
          return row;
        }
      );

      return { ...prevData, seatingArrangement: updatedArrangement };
    });
  };

  const getSeatTypesInData = () => {
    const seatTypes = new Set();
    seatLayoutData.seatingArrangement.forEach((row) => {
      row.seats.forEach((seat) => {
        if (seat.type !== "empty") {
          seatTypes.add(seat.type);
        }
      });
    });
    return Array.from(seatTypes);
  };

  const renderSeatLegend = () => {
    const seatTypes = getSeatTypesInData();
    const legendItems = [];

    seatTypes.forEach((type) => {
      let label, color, size;
      switch (type) {
        case "single":
          label = "Ghế đơn";
          color = "bg-gray-200";
          size = "w-6 h-6";
          break;
        case "double":
          label = "Ghế đôi";
          color = "bg-[#3b5998]";
          size = "w-12 h-6";
          break;
        case "recliner":
          label = "Ghế nằm";
          color = "bg-pink-400";
          size = "w-6 h-6";
          break;
        default:
          return;
      }

      legendItems.push(
        <div key={type} className="flex items-center space-x-2">
          <div className={`${size} ${color} rounded-sm`}></div>
          <span>{label}</span>
        </div>
      );
    });

    return legendItems;
  };

  const calculateTicketCost = () => {
    const selectedSeats = getSelectedSeats();
    return selectedSeats.length * seatLayoutData.price;
  };

  useEffect(() => {
    const selected = getSelectedSeats();
    const total = calculateTicketCost();
    setSelectedSeats(selected);
    setCalculateTicketCost(total);
  }, [seatLayoutData, setSelectedSeats, setCalculateTicketCost]);

  return (
    <div className="lg:w-[65%]">
      <div className="flex justify-center space-x-4 text-[12px] mb-5">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[#00b300] rounded-sm"></div>
          <span>Ghế bạn chọn</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[#c0c0c1] rounded-sm"></div>
          <span>Ghế đã bán</span>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-2 text-[15px]">MÀN HÌNH</div>
      <div className="p-4 overflow-x-auto lg:ml-5">
        <div className="flex flex-col space-y-2">
          {seatLayoutData.seatingArrangement.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center space-x-2">
              <span className="text-white bg-gray-500 rounded-sm flex items-center justify-center text-[10px] min-w-5 h-5">
                {row.row}
              </span>
              <div className="flex space-x-2">
                {row.seats.map((seat, seatIndex) => (
                  <div
                    key={getSeatCode(rowIndex, seatIndex)}
                    onClick={() => toggleSeatSelection(rowIndex, seatIndex)}
                    className={`flex items-center justify-center relative group 
                        ${
                          seat.type === "empty"
                            ? "w-5 h-5 bg-transparent pointer-events-none cursor-default"
                            : seat.type === "single" || seat.type === "recliner"
                            ? "w-5 h-5 rounded-sm cursor-pointer"
                            : "w-12 h-5 rounded-sm cursor-pointer"
                        } 
                        ${
                          seat.status === "sold"
                            ? "bg-[#c0c0c1] pointer-events-none"
                            : seat.status === "selected"
                            ? "bg-[#00b300] hover:bg-gray-600"
                            : seat.type === "double"
                            ? "bg-[#3b5998] hover:bg-gray-600"
                            : seat.type === "recliner"
                            ? "bg-pink-400 hover:bg-gray-600"
                            : "bg-gray-200 hover:bg-gray-600"
                        } `}
                  >
                    {seat.type !== "empty" && (
                      <span
                        className={`text-[10px] transition-opacity 
                            ${
                              seat.status === "selected"
                                ? "text-white opacity-100"
                                : seat.type === "empty"
                                ? "opacity-0"
                                : "opacity-0 group-hover:opacity-100 text-black group-hover:text-white"
                            }`}
                      >
                        {getSeatCode(rowIndex, seatIndex)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4 text-[12px]">
        {renderSeatLegend()}
      </div>
    </div>
  );
}
