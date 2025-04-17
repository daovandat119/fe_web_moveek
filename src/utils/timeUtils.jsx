export const getDates = (startDate = new Date()) => {
  const dates = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      weekday: date.getDay() === 0 ? "CN" : `Th ${date.getDay() + 1}`,
    };
  });
  return dates;
};

export const getFullDateTime = (show_date, show_time) => {
  const [day, month, year] = show_date.split("/").map(Number);
  const isoDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}T${show_time}:00`;
  return new Date(isoDate);
};

export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes}'`;
};

export const formatDateWithWeekday = (todayDefault) => {
  const [year, month, day] = todayDefault.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const weekdays = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const weekday = weekdays[date.getDay()];
  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
  return `${weekday}, ${formattedDate}`;
};


export const getEarliestShowDate = (theater_brands) => {
    let earliestDate = null;

    for (const theater_brand of theater_brands) {
      for (const theater of theater_brand.theaters) {
        theater.show_times.sort((a, b) => {
          const dateA = new Date(
            a.show_date.split("/").reverse().join("-") +
              "T" +
              a.show_time +
              ":00"
          );
          const dateB = new Date(
            b.show_date.split("/").reverse().join("-") +
              "T" +
              b.show_time +
              ":00"
          );
          return dateA - dateB;
        });

        if (theater.show_times.length > 0) {
          const firstShow = theater.show_times[0];
          const currentDate = new Date(
            firstShow.show_date.split("/").reverse().join("-")
          );

          if (!earliestDate || currentDate < earliestDate) {
            earliestDate = currentDate;
          }
        }
      }
    }

    const dates = getDates(earliestDate);

    return dates;
  }