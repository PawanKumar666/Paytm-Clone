import React, {useState} from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";
import Button from "../Core/Button";
import Input from "../Core/Input";
import TopBar from "../Core/TopBar";

const AddMoneyToSelf = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  return (
    <>
    <TopBar />
    <CenteredModal>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold">Add Money to Self</h1>
            <p className="text-sm text-gray-500 my-2">Add money to your account</p>
            <form className="my-4">
                <Input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
                <Button title="Add" onClick={async () => {
                    try{
                        await axios.post(`${BASE_URL}${v1}/user/add-money`, {
                            amount : Number(amount),
                        }, {
                            headers: {
                                Authorization: `${localStorage.getItem("pawtm_token")}`
                            }
                        });
                    }
                    catch(error){
                        setError(error.response.data.error);
                    }
                }}/>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    </CenteredModal>
    </>
  )
};

export default AddMoneyToSelf;