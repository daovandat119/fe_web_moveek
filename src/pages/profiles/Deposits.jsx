import React from "react";
import UserMenu from "@/components/profiles/UserMenu";

export default function Deposits() {
  const transactions = [
    {
      method: "Thời gian",
    },
    {
      method: "Hình thức",
    },
    {
      method: "Số tiền",
    },
    {
      method: "Trạng thái",
    },
  ];

  return (
    <>
      <UserMenu page="Nạp tiền" />
      <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto py-5">
        <div className="flex flex-col w-[65%]">
          <div className="grid grid-cols-4 gap-4 px-5 py-3 rounded-t-md border border-gray-200 bg-[var(--color-bg-title)]">
            {transactions.map((transaction) => (
              <div className="text-xs text-gray-500 font-medium uppercase">
                {transaction.method}
              </div>
            ))}
          </div>
          <div className="w-full px-5 py-3 rounded-b-md border border-gray-200 bg-white">
            <p className="text-xs">
              Bạn chưa có giao dịch nạp tiền nào. Nhấn vào đây để nạp.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
