import dayjs from "dayjs";

export const generateTimeOptions = (reservedTimes) => {
  const timeOptions = [];
  const interval = 30; // Interval in minutes
  const startTime = dayjs().startOf("day");
  const endTime = dayjs().startOf("day").add(1, "day"); // Adjust end time as needed

  for (
    let currentTime = startTime;
    currentTime.isBefore(endTime);
    currentTime = currentTime.add(interval, "minute")
  ) {
    const formattedTime = currentTime.format("hh:mm A");

    if (
      !reservedTimes.some((reservedTime) => reservedTime.time === formattedTime)
    ) {
      timeOptions.push(formattedTime);
    }
  }

  return timeOptions;
};
