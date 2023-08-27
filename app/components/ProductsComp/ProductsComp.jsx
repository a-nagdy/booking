"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookButton from "../BookButton/BookButton";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomTimePicker from "../CustomTimePicker/CustomTimePicker";
import LoadingSpinner from "../Loading/LoadingSpinner";
import PeopleData from "../PeopleData/PeopleData";
import ProductHeader from "../ProductHeader/ProductHeader";
import ProductImages from "../ProductImages/ProductImages";
import "./ProductsComps.css";

const ProductsComp = ({ name }) => {
  const [peoplePicked, setPeoplePicked] = useState("");
  const [datePicked, setDatePicked] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reserveTimes, setReserveTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();
  useEffect(() => {
    async function fetchReservedAndAvailableTimes() {
      try {
        setLoading(true);
        const response = await fetch("/api/getAvailableTimes", {
          method: "GET",
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          const availableTimes = data.availableTimes || [];
          const reservedTimes = data.reservedTimes || [];

          console.log("Available Times:", availableTimes);
          console.log("Reserved Times:", reservedTimes);
          setReserveTimes(reservedTimes);
          // Rest of your code...
        } else {
          setLoading(false);
          console.log("Failed to fetch data.");
        }
      } catch (error) {
        setLoading(false);
        console.log("Error:", error);
      }
      setLoading(false);
    }
    setLoading(false);
    fetchReservedAndAvailableTimes();
  }, []);

  const handleBookButtonClick = async () => {
    if (!selectedTime && !fullName && !email && !datePicked) {
      return; // Exit the function early if any required fields are missing
    }
    const reservationData = {
      people: peoplePicked,
      date: datePicked,
      time: selectedTime,
      price: price,
      fullName,
      email,
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
      setLoading(false);

      router.push("/");
    }
  };
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };
  const onNameChange = (e) => {
    const nameValue = e.target.value;
    setFullName(nameValue);
  };
  const handleCalender = (e) => {
    const currentPeople = e.target.value;
    const currentPrice = 100;
    const fullPrice = currentPeople * currentPrice;
    setPeoplePicked(currentPeople);
    setPrice(fullPrice);

    console.log(currentPeople);
    console.log(fullPrice);
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
  console.log(price);
  return (
    <section className="py-12 sm:py-16">
      {loading && <LoadingSpinner />}
      <div className="container mx-auto px-4">
        <ProductHeader productName={name} />

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <ProductImages />

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-100 sm:text-3xl">
              {name}
            </h1>

            <h2 className="mt-8 text-base text-gray-100">How Many People:</h2>

            <PeopleData
              peoplePicked={peoplePicked}
              onPersonChange={handleCalender}
              email={email}
              fullName={fullName}
              onEmailChange={handleEmail}
              onFullName={onNameChange}
            />

            {peoplePicked && email && fullName && (
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
                datePicked={datePicked}
              />
            )}
            {price > 0 && (
              <div className="my-10 text-white font-sans font-bold">
                {price} LE
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
