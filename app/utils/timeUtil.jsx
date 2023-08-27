import dayjs from "dayjs";

export const generateTimeOptions = (reservedTimes) => {
  const timeOptions = [];
  const startTime = dayjs().startOf("day");
  const endTime = dayjs().startOf("day").add(1, "day"); // Adjust end time as needed

  for (let currentTime = startTime; currentTime.isBefore(endTime); ) {
    const formattedTime = currentTime.format("hh:mm A");

    if (
      !reservedTimes.some((reservedTime) => reservedTime.time === formattedTime)
    ) {
      timeOptions.push(formattedTime);
    }
  }

  return timeOptions;
};
