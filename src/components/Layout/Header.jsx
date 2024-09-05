import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import iconRecommend from "../../assets/image/icon_recommend.png";
import iconOnlineGuide from "../../assets/image/icon_mobile.png";
import iconOfflineGuide from "../../assets/image/icon_airplane.png";
import iconLogIn from "../../assets/image/icon_mypage.png";
import iconChat from "../../assets/image/comments-solid.svg";
import HeaderButton from "../common/HeaderButton";
import { useEffect, useState } from "react";

const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function Header() {
  const [isLogIn, setIsLogIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = loginData.jwt.accessToken;
    if (accessToken) {
      setIsLogIn(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    setIsLogIn(false);
    navigate("/");
  };

  return (
    <section className="h-[100px] max-w-full mx-[162px] flex justify-between items-center font-pre">
      <div className="flex items-center gap-[20px]">
        <Link to={"/"} className="w-[187px]">
          <img src={Logo} alt="Meet & Guide" />
        </Link>
        <div className="flex gap-[15px] font-bold text-[14px]">
          <HeaderButton
            url="/recommend"
            content="여행지 추천"
            imgUrl={iconRecommend}
            alt="toRecommend"
          />
          <HeaderButton
            url="/onlineGuide"
            content="온라인 가이드"
            imgUrl={iconOnlineGuide}
            alt="toOnlineGuide"
          />
          <HeaderButton
            url="/offlineGuide"
            content="오프라인 가이드"
            imgUrl={iconOfflineGuide}
            alt="toOfflineGuide"
          />
        </div>
      </div>

      <div className="font-bold text-[14px] flex items-center gap-[10px]">
        {isLogIn ? (
          <>
            <HeaderButton
              url="/chatting"
              content="채팅목록"
              imgUrl={iconChat}
              alt="toChatPage"
            />
            <HeaderButton
              url="/myPage"
              content="마이페이지"
              imgUrl={iconLogIn}
              alt="toMyPage"
            />
            <button
              onClick={handleLogOut}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              로그아웃
            </button>
          </>
        ) : (
          <HeaderButton
            url="/logIn"
            content="로그인"
            imgUrl={iconLogIn}
            alt="Log In"
          />
        )}
      </div>
    </section>
  );
}
