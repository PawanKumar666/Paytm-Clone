import React, { useEffect, useState } from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";
import { useNavigate } from "react-router-dom";
import Button from "../Core/Button"

const Dashboard = () => {
  const [email, setEmail] = useState(null);
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(async () => {
    try {
    const response = await axios.get(`${BASE_URL}${v1}/user/get-details`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`
      }
    });
    setEmail(response.data.email);
    setBalance(response.data.balance);
    setName(response.data.name);
  } catch (error) {
    setError("Error fetching user details");
    navigate("/signin");
  }
  }, [])
  return (
    <CenteredModal>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Welcome - {name}</h1>
            <p className="text-sm text-gray-500">Email - {email}</p>
            <p className="text-sm text-gray-500">Balance: {balance}</p>
            <div className="flex flex-row items-center justify-center">
                <Button title="Transfer Money" onClick={() => navigate("/transfer-money")} />
                <Button title="Add Money to self" onClick={() => navigate("/add-money-to-self")} />
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    </CenteredModal>
  )
};

export default Dashboard;
