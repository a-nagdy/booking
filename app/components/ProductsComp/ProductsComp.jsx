"use client";

import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookButton from "../BookButton/BookButton";
import ProductImages from "../ProductImages/ProductImages";
import "./ProductsComps.css";

const ProductsComp = ({ name }) => {
  const [peoplePicked, setPeoplePicked] = useState("");
  const [datePicked, setDatePicked] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reserveTimes, setReserveTimes] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchReservedAndAvailableTimes() {
      try {
        const response = await fetch("/api/getAvailableTimes");
        if (response.ok) {
          const data = await response.json();
          const availableTimes = data.availableTimes || [];
          const reservedTimes = data.reservedTimes || [];

          console.log("Available Times:", availableTimes);
          console.log("Reserved Times:", reservedTimes);
          setReserveTimes(reservedTimes);
          // Rest of your code...
        } else {
          console.log("Failed to fetch data.");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchReservedAndAvailableTimes();
  }, []);

  const handleBookButtonClick = async () => {
    const reservationData = {
      people: peoplePicked,
      date: datePicked,
      time: selectedTime,
    };

    try {
      const response = await fetch("/api/addReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });
      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Reservation successful!");

        // Update available times based on the response
        if (responseData.availableTimes) {
          setAvailableTimes(responseData.availableTimes);
        }
      } else {
        console.log("Reservation failed.");
      }
    } catch (error) {
      console.log("Error:", error);
      // Handle error
    } finally {
      router.push("/");
    }
  };

  const handleCalender = (e) => {
    setPeoplePicked(e.target.value);
    console.log(e.target.value);
  };

  const handleDateChange = (newDate) => {
    if (newDate) {
      const selectedDay = newDate.$D; // Day of the month (1-31)
      const selectedMonth = newDate.$M + 1; // Month (0-11, so adding 1)
      const selectedYear = newDate.$y; // Full year

      const dateData = selectedDay + "/" + selectedMonth + "/" + selectedYear;
      setDatePicked(dateData);
    }
  };

  const handleTimeChange = (newTime) => {
    if (newTime) {
      const selectedHour = newTime.$H.toString().padStart(2, "0");
      const selectedMinute = newTime.$m.toString().padStart(2, "0");
      const currentTime = selectedHour + ":" + selectedMinute;

      // Format the time consistently with reserved times (use 'HH:mm A' format)
      const formattedTime = dayjs(currentTime, "HH:mm").format("HH:mm A");
      setSelectedTime(formattedTime);
    }
  };

  const handleClose = () => {
    if (selectedTime && selectedTime.$H !== undefined) {
      const selectedHour = selectedTime.$H.toString().padStart(2, "0");
      const selectedMinute = selectedTime.$m.toString().padStart(2, "0");
      const currentTime = selectedHour + ":" + selectedMinute;
      console.log("hour", selectedHour);
      console.log("min", selectedMinute);
      console.log("full time", currentTime);
      console.log(selectedTime);
    }
  };
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <Link
                  href="/"
                  className="rounded-md p-1 text-sm font-medium text-gray-200 focus:text-gray-100 focus:shadow hover:text-gray-300"
                >
                  Home
                </Link>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <p className="rounded-md p-1 text-sm font-medium text-gray-200 focus:text-gray-100 focus:shadow hover:text-gray-300">
                    {name}
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <ProductImages />

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-100 sm:text-3xl">
              {name}
            </h1>

            <h2 className="mt-8 text-base text-gray-100">How Many People:</h2>

            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-gray-100 px-6 py-2 font-bold text-gray-100 active:bg-black">
                <input
                  type="radio"
                  name="type"
                  className="peer sr-only"
                  onClick={handleCalender}
                  value={"1/7"}
                  //   disabled={peoplePicked}
                />
                1/7
              </label>

              <label
                placeholder="8+"
                className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-gray-100 px-6 py-2 font-bold text-gray-100 disabled:bg-gray-100"
              >
                <input
                  type="radio"
                  name="type"
                  className="peer sr-only"
                  placeholder="8+"
                  onClick={handleCalender}
                  value={"8+"}
                  //   disabled={peoplePicked}
                />
                8+
              </label>
            </div>

            {peoplePicked && (
              <>
                <h2 className="mt-8 text-base text-gray-100">Choose Date</h2>
                <div className="mt-3 flex select-none flex-wrap items-center gap-1 text-white">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Basic date picker"
                      value={null}
                      onChange={handleDateChange}
                      minDate={dayjs().startOf("day")}
                      shouldDisableDate={(date) =>
                        reserveTimes.some(
                          (reservedTime) => reservedTime.date === date
                        )
                      }
                    />
                  </LocalizationProvider>
                </div>
              </>
            )}
            {datePicked && (
              <div className="mt-10 flex select-none flex-wrap items-center gap-1 text-white">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Select Time"
                    value={selectedTime}
                    onClose={handleClose}
                    onChange={handleTimeChange}
                    shouldDisableTime={(time) =>
                      reserveTimes.some(
                        (reservedTime) =>
                          reservedTime.date === datePicked &&
                          reservedTime.time === time.format("HH:mm A")
                      )
                    }
                  />
                </LocalizationProvider>
              </div>
            )}
            <BookButton
              disabled={!selectedTime}
              className={
                !selectedTime
                  ? " cursor-not-allowed bg-gray-500 hover:bg-gray-500"
                  : ""
              }
              onClick={handleBookButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsComp;
