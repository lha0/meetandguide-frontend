import { useEffect, useState } from "react";
import MainSectionView from "./MainSectionView";
import { useNavigate } from "react-router-dom";

export default function MainSection({
  title,
  mainText,
  subText,
  img,
  buttonText,
  bgColor,
  url,
  idx,
}) {
  const [vh, setVh] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setVh(window.innerHeight - 75);
    const updateVH = () => {
      const newVh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${newVh}px`);
    };

    updateVH();
    window.addEventListener("resize", updateVH); // 창 크기 변경에 대한 이벤트 리스너 추가

    return () => {
      window.removeEventListener("resize", updateVH); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  const handleViewMoreClick = () => {
    window.scrollTo({ top: vh, behavior: "smooth" });
  };

  const handleMoveToPage = () => {
    navigate(url);
  };

  const props = {
    title,
    mainText,
    subText,
    img,
    buttonText,
    bgColor,
    url,
    idx,
    handleViewMoreClick,
    handleMoveToPage,
  };

  return <MainSectionView {...props} />;
}
