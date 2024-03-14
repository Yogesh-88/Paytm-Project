import axios from "axios";
export const fetchBalance = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/account/balance",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return response.data.balance;
  } catch (error) {
    console.error("Error fetching balance:", error);
    return null;
  }
};
