import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LogIn from "./logIn/LogIn";
import SignUp from "./signUp/SignUp";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/recommend" element={<div> 여행 추천 </div>} />
      <Route path="/onlineGuide" element={<div> 온라인 가이드 </div>} />
      <Route path="/offlineGuide" element={<div> 오프라인 가이드 </div>} />
    </Routes>
  );
}
