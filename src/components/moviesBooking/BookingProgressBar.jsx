import React from "react";
import {
  Grid,
  ShoppingBag,
  CreditCard,
  Inbox,
  ChevronRight,
} from "lucide-react";

const BookingProgressBar = ({ activeStep }) => {
  const steps = [
    { id: "select-seat", icon: <Grid size="18" />, label: "Chọn ghế" },
    { id: "select-snacks", icon: <ShoppingBag size="18" />, label: "Bắp nước" },
    { id: "payment", icon: <CreditCard size="18" />, label: "Thanh toán" },
    { id: "ticket-info", icon: <Inbox size="18" />, label: "Thông tin vé" },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="w-[90%] lg:w-[74%] lg:max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center gap-5 py-3 text-[12px] text-gray-400">
          <div className="flex justify-between items-center w-full max-w-[1000px]">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  className={`flex flex-col items-center ${
                    activeStep === step.id ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {step.icon}
                  <span>{step.label}</span>
                </div>
                {index < steps.length - 1 && <ChevronRight size="18" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProgressBar;