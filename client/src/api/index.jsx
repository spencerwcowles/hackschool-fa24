import axios from "axios";

const serverURL = "http://localhost:3000";

const TravelApi = {
  getTrip: () => axios.get(`${serverURL}/api/trip`),
  getActivity: () => axios.get(`${serverURL}/api/activity`),

  postTrip: (payload) => axios.post(`${serverURL}/api/trip`, payload),
  postActivity: (payload) => axios.post(`${serverURL}/api/activity`, payload),
};
