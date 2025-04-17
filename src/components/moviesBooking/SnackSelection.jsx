import React from "react";
import { useEffect } from "react";

export default function SnackSelection({
  comboMenus,
  setCalculatePopcornWaterCost,
  setQuantities,
  quantities,
}) {
  const handleIncrease = (id) => {
    setQuantities((prevData) => ({
      ...prevData,
      [id]:
        (prevData[id] || 0) >= 10 ? prevData[id] || 0 : (prevData[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevData) => ({
      ...prevData,
      [id]: Math.max((prevData[id] || 0) - 1, 0),
    }));
  };

  const calculatePopcornWaterCost = (comboMenus, quantities) => {
    return comboMenus.reduce((total, comboMenu) => {
      const quantity = quantities[comboMenu.id] || 0;
      const price = comboMenu.price || 0;
      return total + quantity * price;
    }, 0);
  };

  useEffect(() => {
    const totalCost = calculatePopcornWaterCost(comboMenus, quantities);
    setCalculatePopcornWaterCost(totalCost);
  }, [quantities, comboMenus]);

  return (
    <div className="lg:w-[65%]">
      <div className="bg-white rounded-md border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400  text-sm bg-[var(--color-bg-title)]">
              <th className="py-4 px-5 text-left">COMBO</th>
              <th className="py-4 px-5 text-right">GIÁ TIỀN</th>
              <th className="py-4 px-5 text-right">SỐ LƯỢNG</th>
            </tr>
          </thead>
          <tbody>
            {comboMenus.map((comboMenu, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-4 px-5 text-left">
                  <div className="font-medium">{comboMenu.name}</div>

                  <div className="text-gray-400 text-sm">
                    {comboMenu.details}
                  </div>
                </td>
                <td className="py-6 px-5 text-right">
                  {Number(comboMenu.price).toLocaleString("vi-VN")} ₫
                </td>
                <td className="py-6 px-5 flex justify-end">
                  <button
                    onClick={() => handleDecrease(comboMenu.id)}
                    className={`px-2 text-center rounded-full ${
                      quantities[comboMenu.id] > 0
                        ? "border border-gray-200"
                        : "border border-white"
                    } `}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">
                    {quantities[comboMenu.id] || 0}
                  </span>
                  <button
                    onClick={() => handleIncrease(comboMenu.id)}
                    className={`px-2 text-center rounded-full ${
                      quantities[comboMenu.id] < 10 ||
                      quantities[comboMenu.id] == null
                        ? "border border-gray-200"
                        : "border border-white"
                    } `}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
