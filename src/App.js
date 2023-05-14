import { Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UpdateUser from "./pages/UpdateUser";
import 'antd/dist/reset.css';
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;