import { useEffect, useState } from "react";
import MyPageView from "./MyPageView";
import Info from "../../components/mypage/info/info";
import OnlineMatching from "../../components/mypage/onlineMatching/onlineMatching";
import OfflineMatching from "../../components/mypage/offlineMatching/offlineMatching";

const CATEGORY = [
  {
    title: "회원정보",
    name: "Info",
  },
  {
    title: "온라인 여행 내역",
    name: "OnlineMatching",
  },
  {
    title: "오프라인 여행 내역",
    name: "OfflineMatching",
  },
];

export default function MyPage() {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [viewName, setViewName] = useState("Info");
  const [viewComponent, setViewComponent] = useState(<></>);

  const handleClickCategory = (idx) => {
    setCategoryIdx(idx);
    setViewName(CATEGORY[idx].name);
  };

  useEffect(() => {
    switch (viewName) {
      case "Info":
        return setViewComponent(<Info />);
      case "OnlineMatching":
        return setViewComponent(<OnlineMatching />);
      case "OfflineMatching":
        return setViewComponent(<OfflineMatching />);
      default:
        return <></>;
    }
  }, [viewName]);

  const props = {
    CATEGORY,
    viewComponent,
    handleClickCategory,
  };
  return <MyPageView {...props} />;
}
