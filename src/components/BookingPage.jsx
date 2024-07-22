import { useState, useRef, useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      // For now, return the same times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

const BookingPage = () => {
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

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      date: dateRef.current.value,
      time: timeRef.current.value,
      guests: guestsRef.current.value,
      occasion: occasionRef.current.value,
    };
    setData(newData);
    alert(JSON.stringify(newData, null, 2));
  };

  const handleDateChange = () => {
    dispatch({ type: "UPDATE", date: dateRef.current.value });
  };

  return (
    <main className="md:mb-20 px-6 md:px-0 flex flex-col items-center justify-center py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96">
      <h1 className="text-2xl mb-8 ">Reserve a Table </h1>
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
