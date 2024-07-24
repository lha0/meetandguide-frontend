import { useEffect, useState } from "react";
import RecommendView from "./RecommendView";
import { getRecommend } from "../../api/AuthApi";

export default function Recommend() {
  const [areaList, setAreaList] = useState([]);
  const [onePage, setOnePage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getRecommend()
      .then((response) => {
        setAreaList(response.item);
        setOnePage(response.item.slice(0, 8));
      })
      .catch((error) => console.log("여행지 조회 실패 ", error));
  }, []);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const startIdx = nextPage * 8;
    const endIdx = startIdx + 8;
    setOnePage((prevPage) => [
      ...prevPage,
      ...areaList.slice(startIdx, endIdx),
    ]);
    setCurrentPage(nextPage);
  };

  const props = {
    areaList: onePage,
    loadMore: loadMore,
  };
  return <RecommendView {...props} />;
}
