import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LogIn from "./logIn/LogIn";
import UserSignUp from "./signUp/UserSignUp";
import GuideSignUp from "./signUp/GuideSignUp";
import OnlineGuide from "./onlineGuide/OnlineGuide";
import OfflineGuide from "./offlineGuide/OfflineGuide";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/userSignUp" element={<UserSignUp />} />
      <Route path="/guideSignUp" element={<GuideSignUp />} />
      <Route path="/recommend" element={<div> 여행 추천 </div>} />
      <Route path="/onlineGuide" element={<OnlineGuide />} />
      <Route path="/offlineGuide" element={<OfflineGuide />} />
    </Routes>
  );
}
