import React, {useEffect, useState} from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";
import Button from "../Core/Button";
import Input from "../Core/Input";
import TopBar from "../Core/TopBar";

// TODO: Add a dropdown to select the recipient
const TransferMoney = () => {
    const [amount, setAmount] = useState(0);
    const [userId, setUserId] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        setError("");
    }, []);
    return (
        <>
        <TopBar />
        <CenteredModal>
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
                <h1 className="text-2xl font-bold">Transfer Money</h1>
                <form>
                    <Input type="number" placeholder="Amount" onChange={(e) => {
                        setAmount(e.target.value);
                    }}/>
                    <Input type="text" placeholder="Recipient" onChange={(e) => {
                        setUserId(e.target.value);
                    }}/>
                    <Button title="Transfer" onClick={async () => {
                        if(amount > 0 && userId !== ""){
                            try{
                                await axios.post(`${BASE_URL}${v1}/user/transact-amount`, {
                                    amount: Number(amount),
                                    userId: userId
                                }, {
                                    headers: {
                                        Authorization: `${localStorage.getItem("pawtm_token")}`
                                    }
                                });
                            }
                            catch(error){
                                setError(error.response.data.message);
                            }
                        }
                    }}/>
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </CenteredModal>
        </>
    );
};

export default TransferMoney;