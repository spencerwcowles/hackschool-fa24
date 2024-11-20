import { useState } from "react";
import styles from "../styles/TripForm.module.css";
import { formatRevalidate } from "next/dist/server/lib/revalidate";

const AddActivity = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState("");
  const [activity, setActivity] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const router = useRouter();

  const fetchTrips = async () => {
    const response = await TravelApi.getTrip();
    setTrips(response.data);
  };

  const fetchActivity = async () => {
    const response = await TravelApi.getActivity();
    setActivity(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    await TravelApi.postActivity({
      trip: selectedTrip,
      activity: activity,
      rating: rating,
      review: review,
    });

    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>
        What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
      </p>
      <form className={styles.tripForm}>
        <label htmlFor="trip">Choose your trip:</label>
        <select
          name="tripPicker"
          className="tripPicker"
          onChange={(e) => setSelectedTrip(e.target.value)}
        >
          {trips.map((trip) => (
            <option key={trip.id} value={trip.destination}>
              {trip.destination} ({formatRevalidate(trip.startDate)} -{" "}
              {formatDate(trip.endDate)})
            </option>
          ))}
        </select>
        <label htmlFor="activity">Activity:</label>
        <input
          type="text"
          name="activity"
          onChange={(e) => setActivity(e.target.value)}
          required
        />
        <label htmlFor="rating">Rating (1-5):</label>
        <select
          name="rating"
          className="rating"
          onChange={(e) => setReview(e.target.value)}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="review">Review:</label>
        <textarea
          name="review"
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <button type="submit" onClick={handleSubmit}>
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default AddActivity;
