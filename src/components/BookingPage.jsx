import { useState, useRef, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { submitAPI, fetchAPI } from "../api";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const initializeTimes = (date) => fetchAPI(date);

  const updateTimes = (date) => fetchAPI(new Date(date));

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE":
        return updateTimes(action.date);
      case "INITIALIZE":
        return initializeTimes(action.date);
      default:
        return state;
    }
  };

  const [data, setData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const dateRef = useRef();
  const timeRef = useRef();
  const guestsRef = useRef();
  const occasionRef = useRef();

  const [availableTimes, dispatch] = useReducer(reducer, [], () =>
    initializeTimes(date)
  );

  useEffect(() => {
    dispatch({ type: "INITIALIZE", date });
  }, [date]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      date: dateRef.current.value,
      time: timeRef.current.value,
      guests: guestsRef.current.value,
      occasion: occasionRef.current.value,
    };
    setData(newData);
    try {
      if (submitAPI(newData)) {
        navigate("/confirmation");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  const handleDateChange = () => {
    const newDate = new Date(dateRef.current.value);
    setDate(newDate);
    dispatch({ type: "UPDATE", date: newDate });
  };

  return (
    <main className="md:mb-20 px-6 md:px-0 flex flex-col items-center justify-center py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96">
      <h1 className="text-2xl mb-8">Reserve a Table</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-8">
        <img
          src="/icons_assets/restaurant.jpg"
          alt="restaurant"
          className="w-full md:w-auto md:h-[22rem] object-contain"
        />
        <BookingForm
          onSubmit={onSubmit}
          dateRef={dateRef}
          timeRef={timeRef}
          guestsRef={guestsRef}
          occasionRef={occasionRef}
          availableTimes={availableTimes}
          data={data}
          onDateChange={handleDateChange}
        />
      </div>
    </main>
  );
};

export default BookingPage;
