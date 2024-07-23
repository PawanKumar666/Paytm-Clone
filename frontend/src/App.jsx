import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import TransferMoney from "./components/UserActions/TransferMoney";
import AddMoneyToSelf from "./components/UserActions/AddMoneyToSelf";
import AuthHome from "./components/Auth/AuthHome";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<AuthHome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer-money" element={<TransferMoney />} />
          <Route path="/add-money-to-self" element={<AddMoneyToSelf />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
