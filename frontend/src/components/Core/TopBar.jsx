import Button from "./Button";
import { BASE_URL, v1 } from "../../Utils/globals";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TopBar(){
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold">PawTm App!</h2>
            <Button title="Sign Out" onClick={() => {
                localStorage.removeItem("pawtm_token");
                axios.post(`${BASE_URL}${v1}/auth/signout`);
                navigate("/signin");
            }}/>
        </div>
    )
}