import { Link } from "react-router-dom";
import Logo from '../../assets/image/logo.png';
import iconRecommend from '../../assets/image/icon_recommend.png';
import iconOnlineGuide from '../../assets/image/icon_mobile.png';
import iconOfflineGuide from '../../assets/image/icon_airplane.png';
import iconLogIn from '../../assets/image/icon_mypage.png';
import HeaderButton from "../HeaderButton";

export default function Header() {
    return (
        <section className="h-[100px] max-w-full mx-[162px] flex justify-between items-center font-pre">
            <div className="flex items-center gap-[20px]">
                <Link to={"/"} className="w-[187px]">
                    <img src={Logo} alt="Meet & Guide"/>
                </Link>
                <div className="flex gap-[15px] font-bold text-[14px]">
                    <HeaderButton url="/recommend" content="여행지 추천" imgUrl={iconRecommend} alt="toRecommend"/>
                    <HeaderButton url="/onlineGuide" content="온라인 가이드" imgUrl={iconOnlineGuide} alt="toOnlineGuide"/>
                    <HeaderButton url="/offlineGuide" content="오프라인 가이드" imgUrl={iconOfflineGuide} alt="toOfflineGuide"/>
                </div>
            </div>
            
            
            <div className="font-bold text-[14px]">
                <HeaderButton url="/logIn" content="로그인" imgUrl={iconLogIn} alt={"Log In"}/>
            </div>
            
        </section>
    )
}