import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToday } from "@/store/ProvinceSlice";
import { slugUtils } from "@/utils/slugUtils";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { getEarliestShowDate, getFullDateTime } from "@/utils/timeUtils";

export default function DateSelector({ moviesDetail }) {
  const [openTheaters, setOpenTheaters] = useState({ 1: true, 2: true });
  const [openShowtimes, setOpenShowtimes] = useState({});

  const todayDefault = useSelector((state) => state.province.todayDefault);
  const [selectedDate, setSelectedDate] = useState(
    todayDefault || new Date().toISOString().split("T")[0]
  );
  const selectedProvince = useSelector(
    (state) => state.province.selectedProvince
  );

  const theater_brands = [
    {
      id: 1,
      brand: "Beta",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 96,
          name: "Beta Thủ Đức",
          address:
            "Tầng 6, The Pegasus Plaza, 53-55 Võ Thị Sáu, P. Quyết Thắng, Biên Hoà, Đồng Nai.",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          map_link:
            "https://www.google.com/maps?q=Beta+%C4%90an+Ph%C6%B0%E1%BB%A3ng",
          show_times: [
            {
              show_date: "28/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 97,
          name: "Beta Gò Vấp",
          address: "456 Quang Trung, Gò Vấp",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 98,
          name: "Beta Tân Bình",
          address: "789 Trường Chinh, Tân Bình",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
    {
      id: 2,
      brand: "CGV",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 102,
          name: "CGV Vincom Đồng Khởi",
          address: "72 Lê Thánh Tôn, Quận 1",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 103,
          name: "CGV Giga Mall",
          address: "242 Phạm Văn Đồng, Thủ Đức",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 104,
          name: "CGV Crescent Mall",
          address: "101 Tôn Dật Tiên, Quận 7",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
    {
      id: 3,
      brand: "Galaxy Cinema",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 105,
          name: "Galaxy Nguyễn Du",
          address: "116 Nguyễn Du, Quận 1",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 106,
          name: "Galaxy Tân Bình",
          address: "246 Lý Thường Kiệt, Tân Bình",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
    {
      id: 4,
      brand: "Lotte Cinema",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 107,
          name: "Lotte Cinema Nam Sài Gòn",
          address: "123 Nguyễn Hữu Thọ, Quận 7",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 108,
          name: "Lotte Cinema Cộng Hòa",
          address: "456 Cộng Hòa, Tân Bình",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 109,
          name: "Lotte Cinema Thủ Đức",
          address: "789 Võ Văn Ngân, Thủ Đức",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
    {
      id: 5,
      brand: "BHD Star Cineplex",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 110,
          name: "BHD Star Cineplex 3/2",
          address: "123 Đường 3/2, Quận 10",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 111,
          name: "BHD Star Cineplex Quang Trung",
          address: "456 Quang Trung, Gò Vấp",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 112,
          name: "BHD Star Cineplex Phạm Hùng",
          address: "789 Phạm Hùng, Bình Chánh",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
    {
      id: 6,
      brand: "DCine",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 113,
          name: "DCine Bến Thành",
          address: "123 Lê Lợi, Quận 1",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 114,
          name: "DCine Saigon Center",
          address: "456 Lê Thánh Tôn, Quận 1",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
    {
      id: 7,
      brand: "Mega GS",
      img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      theaters: [
        {
          id: 115,
          name: "Mega GS Cao Thắng",
          address: "123 Cao Thắng, Quận 3",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: true,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
        {
          id: 116,
          name: "Mega GS Lý Chính Thắng",
          address: "456 Lý Chính Thắng, Quận 3",
          img: "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
          ticket_status: false,
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "08:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T08:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "09:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T09:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "10:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T10:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "11:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T11:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "12:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T12:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "13:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T13:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "14:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "15:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T15:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T21:00:00+07:00"
            {
              show_date: "19/03/2025",
              show_time: "21:19",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-19T21:19:00+07:00"
          ],
        },
      ],
    },
  ];
  const dispatch = useDispatch();

  const earliestDate = getEarliestShowDate(theater_brands); 

  const toggleTheater = (brand) => {
    setOpenTheaters((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }));
  };

  const toggleShowtime = (theater) => {
    setOpenShowtimes((prev) => ({
      ...prev,
      [theater]: !prev[theater],
    }));
  };

  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
    console.log(dateString, selectedProvince);
  };

  useEffect(() => {
    if (earliestDate && earliestDate.length > 0) {
      const dateString = `${earliestDate[0].year}-${earliestDate[0].month
        .toString()
        .padStart(2, "0")}-${earliestDate[0].day.toString().padStart(2, "0")}`;
      dispatch(setToday(dateString));
      setSelectedDate(dateString);
    }
  }, [earliestDate, dispatch]);

  return (
    <>
      <div className="bg-[var(--color-bg-title)] flex items-center border border-gray-100 w-2/3 mt-5 mb-3 text-gray-400 rounded-md">
        {earliestDate && earliestDate.length > 0 ? (
          earliestDate.map((date, index) => {
            const dateString = `${date.year}-${date.month
              .toString()
              .padStart(2, "0")}-${date.day.toString().padStart(2, "0")}`;
            return (
              <div
                key={dateString}
                onClick={() => handleDateSelect(dateString)}
                className={`${
                  selectedDate === dateString && index === 0
                    ? "rounded-l-md bg-[#c3d2e9]"
                    : ""
                } ${
                  selectedDate === dateString && index === earliestDate.length - 1
                    ? "rounded-r-md bg-[#c3d2e9]"
                    : ""
                } ${
                  selectedDate === dateString &&
                  index > 0 &&
                  index < earliestDate.length - 1
                    ? "bg-[#c3d2e9]"
                    : ""
                } py-3 flex-1 text-center gap-2 hover:bg-[#c3d2e9] ${
                  index === 0
                    ? "hover:rounded-l-md"
                    : index === earliestDate.length - 1
                    ? "hover:rounded-r-md"
                    : ""
                }`}
              >
                <p>{`${date.day}/${date.month}`}</p>
                <p className="text-[13px]">{date.weekday}</p>
              </div>
            );
          })
        ) : (
          <div className="py-3 flex-1 text-center">No dates available</div>
        )}
      </div>
      <div className="w-2/3 mb-10 border border-gray-100">
        <div>
          {theater_brands.map((brand) => (
            <div key={brand.id}>
              <div
                onClick={() => toggleTheater(brand.id)}
                className="bg-[var(--color-bg-title)] py-3 px-5 flex justify-between items-center hover:bg-[#c3d2e9]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={brand.img}
                    alt="rap"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h1 className="font-semibold">{brand.brand}</h1>
                    <p className="text-gray-400 text-xs">
                      {brand.theaters.length} rạp
                    </p>
                  </div>
                </div>
                <ChevronDown size={16} />
              </div>
              {openTheaters[brand.id] &&
                brand.theaters.map((theater) => (
                  <div key={theater.id} className="bg-white">
                    <button
                      onClick={() => toggleShowtime(theater.id)}
                      className={`text-start items-center px-5 border-t border-gray-200 w-full ${
                        openShowtimes[theater.id] ? "pt-3" : "py-3"
                      }`}
                    >
                      {theater.name}
                    </button>
                    {openShowtimes[theater.id] && (
                      <>
                        <p className="px-5 text-[14px] text-gray-400">
                          {theater.address}{" "}
                          <Link
                            to={`/theater/${slugUtils(theater.name)}`}
                            className="text-[var(--color-hover-input)]"
                          >
                            - Thông tin rạp{" "}
                          </Link>
                          <button
                            className="text-[var(--color-hover-input)]"
                            onClick={() => {
                              const mapUrl = `${theater.map_link}`;
                              window.open(mapUrl, "_blank");
                            }}
                          >
                            - Bản đồ
                          </button>
                        </p>
                        <p className="px-5 pt-3">
                          {moviesDetail.version}{" "}
                          {moviesDetail.dubbing
                            ? "Lồng Tiếng"
                            : moviesDetail.subtitle_vi && moviesDetail.subtitle_en
                            ? "Phụ Đề Việt - Anh"
                            : moviesDetail.subtitle_vi
                            ? "Phụ Đề Việt"
                            : moviesDetail.subtitle_en
                            ? "Phụ Đề Anh"
                            : ""}
                        </p>
                        <div className="grid grid-cols-4 lg:grid-cols-11 items-center gap-1 w-full text-gray-400 text-[13px] pb-5 px-5">
                          {theater.show_times.map((showtime) => {
                            const isFuture =
                              getFullDateTime(
                                showtime.show_date,
                                showtime.show_time
                              ) > new Date();
                            return (
                              <Link
                                to={isFuture ? "/ticket-detail/1" : ""}
                                key={showtime.id}
                                className={`text-center rounded-md flex flex-col items-center ${
                                  isFuture
                                    ? "border border-gray-700 hover:bg-[var(--color-overlay-bg)] hover:text-white cursor-pointer"
                                    : "bg-[var(--color-bg-title)] border-2 border-[var(--color-bg-title)] cursor-not-allowed"
                                }`}
                              >
                                <span className={isFuture ? "" : "p-2"}>
                                  {showtime.show_time}
                                </span>
                                {isFuture && (
                                  <span className="text-[11px] text-gray-400">
                                    {showtime.price}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}