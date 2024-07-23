import React from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import { useNavigate } from "react-router-dom";

export default function AuthHome(){
    const navigate = useNavigate();
    return(
        <CenteredModal>
            <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-md">
                <h1 className="text-4xl font-bold my-4">Welcome to PawTm</h1>
                <p className="text-xl my-4">Please sign in or sign up to continue</p>
                <div className="flex flex-row items-center justify-center mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => {
                        navigate("/signup");
                    }}>Sign Up</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2" onClick={() => {
                        navigate("/signin");
                    }}>Sign In</button>
                </div>
            </div>
        </CenteredModal>
    )
}