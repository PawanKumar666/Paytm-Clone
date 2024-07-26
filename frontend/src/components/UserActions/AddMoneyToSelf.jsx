import React, {useState} from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";

const AddMoneyToSelf = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  // const token = useRecoilValue(token);
  return (
    <CenteredModal>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold">Add Money to Self</h1>
            <p className="text-sm text-gray-500 my-2">Add money to your account</p>
            <form className="my-4">
                <input className="border-2 border-gray-3000 rounded-lg p-2" type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)}/>
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={async () => {
                    try{
                        const response = await axios.post(`${BASE_URL}${v1}/user/add-money`, {
                            amount : Number(amount),
                        }, {
                            headers: {
                                Authorization: `${localStorage.getItem("token")}`
                            }
                        });
                        console.log(response);
                    }
                    catch(error){
                        setError(error.response.data.error);
                    }
                }}>Add</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    </CenteredModal>
  )
};

export default AddMoneyToSelf;