import axios from "axios";



const getAllProfiles = async () => {
  const response = await axios.get(`/api/profile`);
  return response.data || [];
};


export { getAllProfiles };
