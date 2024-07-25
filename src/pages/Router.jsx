import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LogIn from "./logIn/LogIn";
import UserSignUp from "./signUp/UserSignUp";
import GuideSignUp from "./signUp/GuideSignUp";
import OnlineGuide from "./onlineGuide/OnlineGuide";
import OfflineGuide from "./offlineGuide/OfflineGuide";
import Recommend from "./recommend/Recommend";
import AreaDetail from "./recommend/AreaDetail";
import MyPage from "./mypage/MyPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/userSignUp" element={<UserSignUp />} />
      <Route path="/guideSignUp" element={<GuideSignUp />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/recommend/:areaCode" element={<AreaDetail />} />
      <Route path="/onlineGuide" element={<OnlineGuide />} />
      <Route path="/offlineGuide" element={<OfflineGuide />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
