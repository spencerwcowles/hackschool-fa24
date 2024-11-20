const Trips = require("../models/tripModel");

// Create a GET async function to get all trips using the trip model schema
const getTrip = async (req, res) => {
  const trips = await Trips.find();
  res.status(200).json(trips);
};

// Create a POST async function to add a trip using the trip model schema
const postTrip = async (req, res) => {
  // Extracts specific fields from the request body of our trip model schema
  const { destination, journalEntry, startDate, endDate } = req.body;

  // Check for missing required fields and return an error if any required field is absent
  if (!destination || !journalEntry || !startDate) {
    console.log(destination, journalEntry, startDate);
    return res.status(400).json({
      error: "Destination, journal entry, and start date are required",
    });
  }

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  if (end && start > end) {
    return res.status(400).json({ error: "End date must be after start date" });
  } else {
    // Create a new trip entry in the database and return it as a JSON response
    const newTrip = await Trips.create(req.body);
    res.status(200).json(newTrip);
  }
};

module.exports = { getTrip, postTrip };
