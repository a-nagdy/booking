"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookButton from "../BookButton/BookButton";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomTimePicker from "../CustomTimePicker/CustomTimePicker";
import PeoplePicker from "../PeoplePicker/PeoplePicker";
import ProductHeader from "../ProductHeader/ProductHeader";
import ProductImages from "../ProductImages/ProductImages";
import "./ProductsComps.css";

const ProductsComp = ({ name }) => {
  const [peoplePicked, setPeoplePicked] = useState("");
  const [datePicked, setDatePicked] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reserveTimes, setReserveTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchReservedAndAvailableTimes() {
      setLoading(true);
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
        setLoading(false);
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
      setLoading(true);
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
      setLoading(false);

      console.log("Error:", error);
      // Handle error
    } finally {
      setLoading(true);

      router.push("/");
    }
  };

  const handleCalender = (e) => {
    if (e.target.value >= 8) {
      setPeoplePicked(e.target.value);
    } else {
      console.log("true");
    }
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
      const currentTime = selectedHour + ":" + "00";

      // Format the time consistently with reserved times (use 'HH:mm A' format)
      const formattedTime = dayjs(currentTime, "HH").format("HH A");
      setSelectedTime(formattedTime);
    }
  };

  const handleClose = () => {
    if (selectedTime && selectedTime.$H !== undefined) {
      const selectedHour = selectedTime.$H.toString().padStart(2, "0");
      const currentTime = selectedHour + ":" + "00";
      console.log("hour", selectedHour);
      console.log("full time", currentTime);
      console.log(selectedTime);
    }
  };
  console.log(peoplePicked);
  return (
    <section className="py-12 sm:py-16">
      {loading && <p>loading</p>}
      <div className="container mx-auto px-4">
        <ProductHeader productName={name} />

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <ProductImages />

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-100 sm:text-3xl">
              {name}
            </h1>

            <h2 className="mt-8 text-base text-gray-100">How Many People:</h2>

            <PeoplePicker
              peoplePicked={peoplePicked}
              onChange={handleCalender}
            />

            {peoplePicked && (
              <>
                <h2 className="mt-8 text-base text-gray-100">Choose Date</h2>
                <CustomDatePicker
                  datePicked={datePicked}
                  onDateChange={handleDateChange}
                  reserveTimes={reserveTimes}
                />
              </>
            )}
            {datePicked && (
              <CustomTimePicker
                selectedTime={selectedTime}
                onClose={handleClose}
                onChange={handleTimeChange}
                reserveTimes={reserveTimes}
              />
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
