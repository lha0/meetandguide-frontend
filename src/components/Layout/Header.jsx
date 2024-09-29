import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import iconRecommend from "../../assets/image/icon_recommend.png";
import iconOnlineGuide from "../../assets/image/icon_mobile.png";
import iconOfflineGuide from "../../assets/image/icon_airplane.png";
import iconLogIn from "../../assets/image/icon_mypage.png";
import iconChat from "../../assets/image/comments-solid.svg";
import HeaderButton from "../common/HeaderButton";
import { useEffect, useState } from "react";

let loginData = JSON.parse(localStorage.getItem("loginData"));

export default function Header() {
  const [isLogIn, setIsLogIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loginData = JSON.parse(localStorage.getItem("loginData"));
    if (!loginData) {
      setIsLogIn(false);
    } else {
      const accessToken = loginData.jwt.accessToken;
      if (accessToken) {
        setIsLogIn(true);
      }
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    setIsLogIn(false);
    navigate("/");
  };

  return (
    <section className="h-[100px] w-full max-w-full px-[12%] flex justify-between items-center font-pre">
      <div className="flex items-center gap-[10px] md:gap-[20px]">
        <Link to={"/"} className="w-[30%]">
          <img src={Logo} alt="Meet & Guide" />
        </Link>
        <div className="flex gap-[10px] md:gap-[15px] font-bold text-[12px] md:text-[14px]">
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

      <div className="font-bold text-[10px] md:text-[14px] flex items-center gap-[5px] md:gap-[10px] flex-wrap">
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
              className="ml-2 md:ml-4 px-2 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded"
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
