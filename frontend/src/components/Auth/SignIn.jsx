import React, {useState} from "react";
import {BASE_URL, v1} from "../../Utils/globals";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { token } from "../../Atoms/AuthAtoms";
import { useNavigate } from "react-router-dom";
import CenteredModal from "../Wrappers/CenteredModal";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const setToken = useSetRecoilState(token);
  const [error, setError] = useState("");
  return (
    <CenteredModal>
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold my-4">Sign In</h1>
        <p className="text-xl my-4">One last step before you can start using PawTm</p>
        <form className="flex flex-col items-center justify-center">
            <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={async () => {
                try{
                    const response = await axios.post(`${BASE_URL}${v1}/auth/signin`, {
                        email,
                        password
                    });
                    // setToken(response?.data?.token);
                    localStorage.setItem("token", response?.data?.token);
                    navigate("/dashboard");
                }
                catch(error){
                    setError(error.response.data.error);
                }
            }}>Sign In</button>
            {error && <p className="text-red-500 text-xl my-4">{error}</p>}
        </form>
      </div>
    </CenteredModal>
  );
};

export default SignIn;