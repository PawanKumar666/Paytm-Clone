import React, {useState} from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import axios from "axios";
import { BASE_URL, v1 } from "../../Utils/globals";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { token } from "../../Atoms/AuthAtoms";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useSetRecoilState(token);
  const [error, setError] = useState("");
  return (
    <CenteredModal>
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-500">Sign up to continue</p>
            <form className="flex flex-col items-center justify-center">
                <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={async() => {
                    try{
                        const response = await axios.post(`${BASE_URL}${v1}/auth/signup`, {
                            firstName,
                            lastName,
                            email,
                            password
                        });
                        setToken(response.data.token);
                        navigate("/dashboard");
                    }
                    catch(error){
                        setError(error.response.data.error);
                    }
                }}>Sign Up</button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    </CenteredModal>
  )
};

export default SignUp;