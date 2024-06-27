import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/logIn" element={<div> 로그인 페이지 </div>}/>
            <Route path="/recommend" element={<div> 여행 추천 </div>}/>
            <Route path="/onlineGuide" element={<div> 온라인 가이드 </div>}/>
            <Route path="/offlineGuide" element={<div> 오프라인 가이드 </div>}/>
        </Routes>
    )
}