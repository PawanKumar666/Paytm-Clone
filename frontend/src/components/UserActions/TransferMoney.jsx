import React, {useEffect, useState} from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";

const TransferMoney = () => {
    const [amount, setAmount] = useState(0);
    const [userId, setUserId] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        setError("");
    }, []);
    return (
        <CenteredModal>
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
                <h1 className="text-2xl font-bold">Transfer Money</h1>
                <form>
                    <input className="border-2 border-gray-3000 rounded-lg p-2" type="number" placeholder="Amount" onChange={(e) => {
                        setAmount(e.target.value);
                    }}/>
                    <input className="border-2 border-gray-3000 rounded-lg p-2" type="text" placeholder="Recipient" onChange={(e) => {
                        setUserId(e.target.value);
                    }}/>
                    <button type="button" className="bg-blue-500 text-white p-2 rounded-lg" onClick={async () => {
                        if(amount > 0 && userId !== ""){
                            try{
                                const response = await axios.post(`${BASE_URL}${v1}/user/transact-amount`, {
                                    amount: Number(amount),
                                    userId: userId
                                }, {
                                    headers: {
                                        Authorization: `${localStorage.getItem("token")}`
                                    }
                                });
                            }
                            catch(error){
                                setError(error.response.data.message);
                            }
                        }
                    }}>Transfer</button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </CenteredModal>
    );
};

export default TransferMoney;