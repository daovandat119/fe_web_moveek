import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedProvince: "Tp. Hồ Chí Minh",
  todayDefault: new Date().toISOString().split("T")[0],
  idDefault: "",
  provinces: [
    {
      id: 1,
      province: "Tp. Hồ Chí Minh",
      theater_brands: [
        {
          id: 1,
          brand: "Beta",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 96,
              name: "Beta Thủ Đức",
              address: "123 Lê Văn Việt, Thủ Đức",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 97,
              name: "Beta Gò Vấp",
              address: "456 Quang Trung, Gò Vấp",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
            {
              id: 98,
              name: "Beta Tân Bình",
              address: "789 Trường Chinh, Tân Bình",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
        {
          id: 2,
          brand: "CGV",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 102,
              name: "CGV Vincom Đồng Khởi",
              address: "72 Lê Thánh Tôn, Quận 1",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 103,
              name: "CGV Giga Mall",
              address: "242 Phạm Văn Đồng, Thủ Đức",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
            {
              id: 104,
              name: "CGV Crescent Mall",
              address: "101 Tôn Dật Tiên, Quận 7",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
        {
          id: 3,
          brand: "Galaxy Cinema",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 105,
              name: "Galaxy Nguyễn Du",
              address: "116 Nguyễn Du, Quận 1",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 106,
              name: "Galaxy Tân Bình",
              address: "246 Lý Thường Kiệt, Tân Bình",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
          ],
        },
        {
          id: 4,
          brand: "Lotte Cinema",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 107,
              name: "Lotte Cinema Nam Sài Gòn",
              address: "123 Nguyễn Hữu Thọ, Quận 7",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 108,
              name: "Lotte Cinema Cộng Hòa",
              address: "456 Cộng Hòa, Tân Bình",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
            {
              id: 109,
              name: "Lotte Cinema Thủ Đức",
              address: "789 Võ Văn Ngân, Thủ Đức",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
        {
          id: 5,
          brand: "BHD Star Cineplex",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 110,
              name: "BHD Star Cineplex 3/2",
              address: "123 Đường 3/2, Quận 10",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 111,
              name: "BHD Star Cineplex Quang Trung",
              address: "456 Quang Trung, Gò Vấp",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
            {
              id: 112,
              name: "BHD Star Cineplex Phạm Hùng",
              address: "789 Phạm Hùng, Bình Chánh",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
        {
          id: 6,
          brand: "DCine",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 113,
              name: "DCine Bến Thành",
              address: "123 Lê Lợi, Quận 1",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 114,
              name: "DCine Saigon Center",
              address: "456 Lê Thánh Tôn, Quận 1",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
          ],
        },
        {
          id: 7,
          brand: "Mega GS",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 115,
              name: "Mega GS Cao Thắng",
              address: "123 Cao Thắng, Quận 3",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 116,
              name: "Mega GS Lý Chính Thắng",
              address: "456 Lý Chính Thắng, Quận 3",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      province: "Hà Nội",
      theater_brands: [
        {
          id: 4,
          brand: "Lotte Cinema",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 109,
              name: "Lotte Keangnam",
              address: "Phạm Hùng, Cầu Giấy",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
            {
              id: 108,
              name: "Lotte Royal City",
              address: "72 Nguyễn Trãi, Thanh Xuân",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
          ],
        },
        {
          id: 5,
          brand: "CGV",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 190,
              name: "CGV Vincom Bà Triệu",
              address: "191 Bà Triệu, Hai Bà Trưng",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      province: "Đà Nẵng",
      theater_brands: [
        {
          id: 6,
          brand: "CGV",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 110,
              name: "CGV Vincom Đà Nẵng",
              address: "910 Ngô Quyền, Sơn Trà",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
        {
          id: 7,
          brand: "Galaxy Cinema",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 111,
              name: "Galaxy Đà Nẵng",
              address: "123 Nguyễn Văn Linh, Hải Châu",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      province: "Hải Phòng",
      theater_brands: [
        {
          id: 8,
          brand: "Lotte Cinema",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 112,
              name: "Lotte Hải Phòng",
              address: "456 Lạch Tray, Ngô Quyền",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      province: "Cần Thơ",
      theater_brands: [
        {
          id: 9,
          brand: "CGV",
          img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
          theaters: [
            {
              id: 113,
              name: "CGV Sense City",
              address: "1 Đại lộ Hòa Bình, Ninh Kiều",
              img: "https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png",
              ticket_status: true,
            },
          ],
        },
      ],
    },
  ],
  theaters: [
    {
      id: 1,
      name: "Beta Thủ Đức",
      date: "12/03/2025",
      image:
        "https://cdn.moveek.com/storage/media/cache/square/5fffb2fcaf3c1018282624.png",
      address:
        "Nhà Văn hóa Sinh viên Đại học Quốc gia TP.HCM, P. Đông Hòa, tx. Dĩ An, Bình Dương",
      map_link:
        "https://www.google.com/maps?q=Beta+%C4%90an+Ph%C6%B0%E1%BB%A3ng",
      description:
        "Beta Thủ Đức là rạp chiếu phim đầu tiên của Beta tại Bình Dương, nằm trong khuôn viên Nhà Văn hóa Sinh viên Đại học Quốc gia TP.HCM. Rạp có 4 phòng chiếu với tổng cộng 500 ghế ngồi, được trang bị công nghệ âm thanh ",
      movies: [
        {
          id: 1,
          name: "Quỷ Nhập Tràng",
          title: "The Corpse",
          image:
            "https://cdn.moveek.com/storage/media/cache/mini/67b407ce027c7276418928.jpg",
          banner:
            "https://cdn.moveek.com/storage/media/cache/mini/67b407ce027c7276418928.jpg",
          age_rating: 18,
          duration_minutes: 121,
          version: "2D",
          language: "Anh",
          audioSubOptions: ["Tiếng Anh", "Tiếng Việt"],
          trailer: "https://www.youtube.com/embed/salDbCA9BA0",
          release_date: "2022-03-14T10:00:00Z",
          premiere_date: "2025-03-12T10:00:00Z",
          synopsis: "ok",
          description: "ok",
          director: "ok",
          performers: "ok",
          manufacturer: "ok",
          type: "movie",
          genres: ["Kinh dị"],
          status: "chiếu sớm",
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
          id: 2,
          name: "Hồn Ma Dưới Lòng Đất",
          title: "The Corpse",
          image:
            "https://cdn.moveek.com/storage/media/cache/mini/67b407ce027c7276418928.jpg",
          age_rating: "T18",
          duration_minutes: 121,
          version: "2D",
          language: "Anh",
          subtitle_en: true,
          subtitle_vi: true,
          dubbing: false,
          audioSubOptions: ["Tiếng Anh", "Tiếng Việt"],
          trailer: "https://www.youtube.com/embed/salDbCA9BA0",
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
          ],
        },
        {
          id: 2,
          name: "Hồn Ma Dưới Lòng Đất",
          title: "The Corpse",
          image:
            "https://cdn.moveek.com/storage/media/cache/mini/67b407ce027c7276418928.jpg",
          age_rating: "T18",
          duration_minutes: 121,
          version: "2D",
          language: "Anh",
          audioSubOptions: ["Lồng Tiếng"],
          trailer: "https://www.youtube.com/embed/salDbCA9BA0",
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
          ],
        },
        {
          id: 2,
          name: "Hồn Ma Dưới Lòng Đất",
          title: "The Corpse",
          image:
            "https://cdn.moveek.com/storage/media/cache/mini/67b407ce027c7276418928.jpg",
          age_rating: "T18",
          duration_minutes: 121,
          version: "2D",
          language: "Anh",
          audioSubOptions: ["Tiếng Anh", "Tiếng Việt"],
          trailer: "https://www.youtube.com/embed/salDbCA9BA0",
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
          ],
        },
        {
          id: 2,
          name: "Hồn Ma Dưới Lòng Đất",
          title: "The Corpse",
          image:
            "https://cdn.moveek.com/storage/media/cache/mini/67b407ce027c7276418928.jpg",
          age_rating: "T18",
          duration_minutes: 121,
          version: "2D",
          language: "Tiếng Anh",
          audioSubOptions: ["Tiếng Anh"],
          trailer: "https://www.youtube.com/embed/salDbCA9BA0",
          show_times: [
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
            {
              show_date: "12/03/2025",
              show_time: "21:00",
              price: "45K",
              id_theater_diagram: 1,
            }, // "2025-03-12T14:00:00Z" -> +7h
          ],
        },
      ],
    },
  ],
};

export const fetchProvinces = createAsyncThunk(
  "province/fetchProvinces",
  async () => {
    // const response = await fetch("/api/provinces");
    // const data = await response.json();
    // return data; // Trả về dữ liệu JSON
  }
);

export const fetchTheaters = createAsyncThunk(
  "province/fetchTheaters",
  async ({ theaterToday, theaterId }, { getState, rejectWithValue }) => {
    try {
      const { todayDefault, idDefault } = getState().province;
      const today = theaterToday || todayDefault;
      const id = theaterId || idDefault;
      console.log(today, id);

      // const response = await axios.post(`your-api-endpoint/showtimes/${theaterId}`, {
      //   date: today,
      // });

      // return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const provinceSlice = createSlice({
  name: "province",
  initialState,
  reducers: {
    setProvince: (state, action) => {
      state.selectedProvince = action.payload;
    },
    setIdDefault: (state, action) => {
      state.idDefault = action.payload;
    },
    setToday: (state, action) => {
      state.todayDefault = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProvinces.fulfilled, (state, action) => {
      state.provinces = action.payload;
      // state.selectedProvince = provinces.name;
      // state.idProvince = provinces.id;
      // state.idDefault = provinces.theater_brands[0].theaters[0].id;
    });
    // .addCase(fetchTheaters.fulfilled, (state, action) => {
    //   state.theaters = action.payload;
    // });
  },
});

export const { setProvince, setToday, setIdDefault } = provinceSlice.actions;
export default provinceSlice.reducer;
