import React, { useState } from "react";
import styles from "../styles/TripForm.module.css";
import { getSupportedArchTriples } from "next/dist/build/swc";

const AddTrip = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [entry, setEntry] = useState("");

  const fetchTrips = async () => {
    const response = await TravelApi.getTrip();
    setTrips(response.data);
  };

  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          name="destination"
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          name="startDate"
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          name="endDate"
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <label htmlFor="entry">Journal Entry:</label>
        <textarea
          name="entry"
          onChange={(e) => setEntry(e.target.value)}
          required
        ></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTrip;
