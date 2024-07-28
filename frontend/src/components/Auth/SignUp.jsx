import React, {useState} from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";
import { useNavigate } from "react-router-dom";
import Button from "../Core/Button"
import Input from "../Core/Input";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <CenteredModal>
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-500">Sign up to continue</p>
            <form className="flex flex-col items-center justify-center">
                <Input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <Input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Button title="Sign Up" onClick={async() => {
                    try{
                        const response = await axios.post(`${BASE_URL}${v1}/auth/signup`, {
                            firstName,
                            lastName,
                            email,
                            password
                        });
                        localStorage.setItem("token", response?.data?.token);
                        // setToken(response.data.token);
                        navigate("/dashboard");
                    }
                    catch(error){
                        setError(error.response.data.error);
                    }
                }}/>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    </CenteredModal>
  )
};

export default SignUp;