import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const Dashboard = () => {
  const [balance, setBalance] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance);
        setLoggedInUserId(response.data.userId);
      } catch (error) {
        console.error("Error fetching balance:", error);
        navigate("/signin");
      }
    };

    fetchBalance();
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.balance !== undefined) {
      setBalance(location.state.balance);
    }
  }, [location.state]);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users userId={loggedInUserId} />
      </div>
    </div>
  );
};

export default Dashboard;
