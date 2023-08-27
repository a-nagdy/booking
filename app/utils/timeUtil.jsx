import dayjs from "dayjs";

export const generateTimeOptions = (reservedTimes) => {
  const timeOptions = [];
  const interval = 60; // Interval in minutes
  const startTime = dayjs().hour(10).startOf("hour"); // Start at 10:00 AM
  const endTime = dayjs().hour(24).startOf("hour"); // End at 12:00 PM (noon)

  for (
    let currentTime = startTime;
    currentTime.isBefore(endTime);
    currentTime = currentTime.add(interval, "minute")
  ) {
    const formattedTime = currentTime.format("HH A"); // Format as hours only

    const isReserved = reservedTimes.some(
      (reservedTime) => reservedTime.time === formattedTime
    );
    // console.log(isReserved);

    // console.log(`Checking ${formattedTime}: Is reserved? ${isReserved}`);

    if (!isReserved) {
      timeOptions.push(formattedTime);
      // console.log(`Added ${formattedTime} to available times.`);
    }
  }

  // console.log("Final available times:", timeOptions);

  return timeOptions;
};
