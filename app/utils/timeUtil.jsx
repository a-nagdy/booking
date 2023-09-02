import dayjs from "dayjs";

export const generateTimeOptions = (reservedTimes) => {
  const timeOptions = [];
  const interval = 60;
  const startTime = dayjs().hour(10).startOf("hour");
  const endTime = dayjs().hour(24).startOf("hour");

  for (
    let currentTime = startTime;
    currentTime.isBefore(endTime);
    currentTime = currentTime.add(interval, "minute")
  ) {
    const formattedTime = currentTime.format("HH A");

    const isReserved = reservedTimes.some(
      (reservedTime) => reservedTime.time === formattedTime
    );

    if (!isReserved) {
      timeOptions.push(formattedTime);
    }
  }

  return timeOptions;
};
