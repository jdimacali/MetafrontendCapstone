import React from "react";

const BookingForm = ({
  onSubmit,
  dateRef,
  data,
  timeRef,
  availableTimes,
  guestsRef,
  occasionRef,
  onDateChange,
}) => {
  return (
    <div className="p-16 rounded-s-md">
      <form className="grid gap-4 w-96" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            ref={dateRef}
            defaultValue={data.date}
            className="h-10 rounded-md px-2 border-gray-500 bg-yellow-100/20 border"
            onChange={onDateChange} // Call handleDateChange when date changes
            required
            aria-label="Reservation Date"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="time">Choose Time</label>
          <select
            id="time"
            ref={timeRef}
            defaultValue={data.time}
            className="h-10 rounded-md px-2 border-gray-500 bg-yellow-100/20 border"
            required
            aria-label="Reservation Time"
          >
            <option value="" disabled>
              Select a time
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            ref={guestsRef}
            defaultValue={data.guests}
            className="h-10 rounded-md px-2 border-gray-500 bg-yellow-100/20 border"
            required
            aria-label="Number of Guests"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            ref={occasionRef}
            defaultValue={data.occasion}
            className="h-10 rounded-md px-2 border-gray-500 bg-yellow-100/20 border"
            required
            aria-label="Reservation Occasion"
          >
            <option value="" disabled>
              Select an occasion
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business meeting">Business meeting</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          value="Make Your reservation"
          className="bg-yellow-300 font-semibold rounded-2xl py-2 px-4 mt-6"
          aria-label="Submit Reservation"
        >
          Make your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
