import React from "react";
import UserMenu from "@/components/profiles/UserMenu";
export default function UserOrders() {
  return (
    <>
      <UserMenu page="Vé" />
      <div className="w-[90%] lg:w-[70%] max-w-[1200px] mx-auto">
        <div className="w-[65%] my-10 flex flex-col gap-5">
          <p className="flex flex-col gap-2 leading-4 p-5 rounded-md bg-[var(--color-bg-title)]">
            <span>Bạn chưa có giao dịch nào trước đây. </span>
            <span>
              Để bắt đầu mua vé xem phim, vui lòng làm theo các bước sau.
            </span>
          </p>
          <img
            src="https://cdn.moveek.com/bundles/ornweb/img/tutorial-ticketing.png"
            alt="avatar"
            className="rounded-t-md col-span-8"
          />
        </div>
      </div>
    </>
  );
}
