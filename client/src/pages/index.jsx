import TripCard from "@/components/TripCard";
import ActivityCard from "@/components/ActivityCard";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const Home = () => {
  /* Activity 1: Add the useState hooks for 
    trips, 
    activities
  */

  const [trips, setTrips] = useState([]);
  const [activities, setActivities] = useState([]);

  return (
    <div className={styles.main}>
      <div className={styles.tripContainer}>
        <div className={styles.tripBox}>
          <h3>Trips</h3>
          {trips.length > 0 ? (
            trips.map((trip) => <TripCard key={trip.id} {...trip} />)
          ) : (
            <p>No trips to display</p>
          )}
        </div>
        <div className={styles.tripBox}>
          <h3>Activities</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
