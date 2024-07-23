import React from "react";
import { useRecoilValue } from "recoil";
import { token } from "../../Atoms/AuthAtoms";

const Dashboard = () => {
  const authToken = useRecoilValue(token);
  return <div>{authToken}</div>;
};

export default Dashboard;