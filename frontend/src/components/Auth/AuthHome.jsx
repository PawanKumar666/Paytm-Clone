import React from "react";
import CenteredModal from "../Wrappers/CenteredModal";
import { useNavigate } from "react-router-dom";
import Button from "../Core/Button";

export default function AuthHome(){
    const navigate = useNavigate();
    return(
        <CenteredModal>
            <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-md">
                <h1 className="text-4xl font-bold my-4">Welcome to PawTm</h1>
                <p className="text-xl my-4">Please sign in or sign up to continue</p>
                <div className="flex flex-row items-center justify-center mt-4">
                    <Button title="Sign Up" onClick={() => {
                        navigate("/signup");
                    }} />
                    <Button title="Sign In" onClick={() => {
                        navigate("/signin");
                    }} />
                </div>
            </div>
        </CenteredModal>
    )
}