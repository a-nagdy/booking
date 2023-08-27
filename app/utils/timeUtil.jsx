import dayjs from "dayjs";

export const generateTimeOptions = (reservedTimes) => {
  const timeOptions = [];
  const interval = 60; // Interval in minutes
  const startTime = dayjs().hour(10).startOf("hour"); // Start at 10:00 AM
  const endTime = dayjs().hour(12).startOf("hour"); // End at 12:00 PM (noon)

  for (
    let currentTime = startTime;
    currentTime.isBefore(endTime);
    currentTime = currentTime.add(interval, "minute")
  ) {
    const formattedTime = currentTime.format("hh A"); // Format as hours only

    if (
      !reservedTimes.some((reservedTime) => reservedTime.time === formattedTime)
    ) {
      timeOptions.push(formattedTime);
    }
  }

  return timeOptions;
};
