import React, { useState } from "react";

const SeatDesigner = () => {
  const [seats, setSeats] = useState([
    [
      { type: "single", status: "available" },
      { type: "single", status: "available" },
      { type: "double", status: "available" },
      { type: "empty" },
      { type: "single", status: "booked" },
    ],
    [
      { type: "single", status: "available" },
      { type: "double", status: "available" },
      { type: "empty" },
      { type: "single", status: "available" },
      { type: "single", status: "booked" },
    ],
  ]);

  const [currentRow, setCurrentRow] = useState(0);

  const maxSeatsPerRow = 22; // Số ô tối đa trên mỗi hàng

  const addSeat = (type) => {
    const newSeats = [...seats];

    if (!newSeats[currentRow]) {
      newSeats[currentRow] = [];
    }

    // Tính tổng số ô đã sử dụng trong hàng
    const usedSeats = newSeats[currentRow].reduce(
      (sum, seat) =>
        sum +
        (seat.type === "double" ? 2 : 1),
      0
    );

    // Kiểm tra nếu thêm ghế có vượt quá 22 ô không
    const seatSize = type === "double" ? 2 : 1;
    if (usedSeats + seatSize > maxSeatsPerRow) {
      alert("Hàng đã đạt số ô tối đa!");
      return;
    }

    newSeats[currentRow].push({
      type: type,
      status: "available",
    });

    setSeats(newSeats);
  };

  const addRow = () => {
    const newSeats = [...seats];
    newSeats.splice(currentRow + 1, 0, []); // Thêm mảng rỗng tại vị trí currentRow + 1
    setSeats(newSeats);
    setCurrentRow(currentRow + 1); // Chuyển currentRow sang hàng mới
  };

  const removeSeat = (rowIndex, seatIndex) => {
    const newSeats = [...seats];
    newSeats[rowIndex].splice(seatIndex, 1);
    setSeats(newSeats);
  };

  const removeRow = () => {
    const newSeats = [...seats];
    if (newSeats.length > 1) {
      newSeats.splice(currentRow, 1); // Xóa hàng được chọn
      setCurrentRow(Math.max(0, currentRow - 1)); // Chuyển về hàng trước nếu có
    }
    setSeats(newSeats);
  };

  const toggleSeatStatus = (rowIndex, seatIndex) => {
    const newSeats = [...seats];
    const seat = newSeats[rowIndex][seatIndex];
    if (seat.type !== "empty") {
      seat.status = seat.status === "available" ? "booked" : "available";
      setSeats(newSeats);
    }
  };

  // Hàm tạo mã ghế (A01, A02, B01, B02, ...) không tính khoảng trống
  const getSeatCode = (rowIndex, seatIndex) => {
    const rowLetter = String.fromCharCode(65 + rowIndex); // A, B, C, ...
    let actualSeatNumber = 0;
    for (let i = 0; i <= seatIndex; i++) {
      if (seats[rowIndex][i].type !== "empty") {
        actualSeatNumber++;
      }
    }
    const formattedSeatNumber =
      actualSeatNumber < 10 ? `0${actualSeatNumber}` : actualSeatNumber;
    return `${rowLetter}${formattedSeatNumber}`;
  };

  // Hàm đếm số ghế (không tính khoảng trống)
  const countSeatsInRow = (row) => {
    return row.filter((seat) => seat.type !== "empty").length;
  };

  // Hàm lưu sơ đồ và gửi data
  const saveSeatLayout = () => {
    const seatLayoutData = seats.map((row, rowIndex) => ({
      row: String.fromCharCode(65 + rowIndex), // Tên hàng (A, B, C, ...)
      seats: row.map((seat) => ({
        type: seat.type,
        status: seat.status,
      })),
    }));

    // Chuyển thành JSON
    const jsonData = JSON.stringify(seatLayoutData, null, 2);
    console.log("Data to save:", jsonData);

    // Gửi data qua API (ví dụ)
    // fetch('/api/save-seat-layout', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: jsonData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log("Success:", data))
    //   .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden flex flex-col">
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto flex justify-center items-start gap-10 p-4">
        <div className="w-[70%] ml-15">
          <div className="bg-gray-200 text-center py-2">MÀN HÌNH</div>
          <div className="relative p-4">
            <div className="flex flex-col space-y-2 ">
              {seats.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center space-x-2 h-6">
                  <span className="absolute right-185 w-6 h-6 text-white bg-gray-500 rounded-sm flex items-center justify-center text-[10px] space-y-2">
                    {String.fromCharCode(65 + rowIndex)}
                  </span>
                  <div className="flex space-x-2">
                    {row.map((seat, seatIndex) => (
                      <div
                        key={seatIndex}
                        onClick={() => toggleSeatStatus(rowIndex, seatIndex)}
                        className={`flex items-center justify-center cursor-pointer relative ${
                          seat.type === "empty"
                            ? "w-6 h-6 bg-transparent border border-gray-200 rounded-sm "
                            : seat.type === "double"
                            ? "w-14 h-6 rounded-sm"
                            : "w-6 h-6 rounded-sm"
                        } ${
                          seat.type !== "empty"
                            ? seat.type === "recliner"
                              ? "bg-pink-400" // Màu hồng cho ghế nằm
                              : "bg-gray-200"
                            : ""
                        }`}
                      >
                        {seat.type !== "empty" && (
                          <span className="text-[10px] text-gray-200 hover:text-black">
                            {getSeatCode(rowIndex, seatIndex)}
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSeat(rowIndex, seatIndex);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-transparent border border-gray-300 rounded-sm"></div>
              <span>Khoảng trống</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-sm"></div>
              <span>Ghế đơn</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-6 bg-gray-300 rounded-sm"></div>
              <span>Ghế đôi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-6 bg-pink-400 rounded-sm"></div>
              <span>Ghế nằm</span>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-white rounded-lg shadow-md text-[14px] p-5">
          <h2 className="text-lg font-semibold mb-2">Quản lý Sơ đồ Ghế</h2>
          <div className="">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chọn hàng để thêm ghế
              </label>
              <select
                value={currentRow}
                onChange={(e) => setCurrentRow(parseInt(e.target.value))}
                className="mt-1 p-2 border rounded-md"
              >
                {seats.map((row, index) => (
                  <option key={index} value={index}>
                    Hàng {String.fromCharCode(65 + index)} (
                    {countSeatsInRow(row)} ghế)
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between w-full gap-5">
              <div className="w-full">
                <button
                  onClick={() => addSeat("single")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full mt-2"
                >
                  Thêm ghế đơn
                </button>
                <button
                  onClick={() => addSeat("double")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full mt-2"
                >
                  Thêm ghế đôi
                </button>
                <button
                  onClick={() => addSeat("recliner")}
                  className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 w-full mt-2"
                >
                  Thêm ghế nằm
                </button>
                <button
                  onClick={() => addSeat("empty")}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 w-full mt-2"
                >
                  Thêm khoảng trống
                </button>
              </div>
              <div className="w-full">
                <button
                  onClick={addRow}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full mt-2"
                >
                  Thêm hàng mới
                </button>
                <button
                  onClick={removeRow}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full mt-2"
                  disabled={seats.length <= 1}
                >
                  Xóa hàng
                </button>
              </div>
            </div>
            <button
              onClick={saveSeatLayout}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-5 w-full"
            >
              Lưu sơ đồ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatDesigner;