import { useEffect, useState } from "react";
import RecommendView from "./RecommendView";
import { getRecommend } from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";

export default function Recommend() {
  const [areaList, setAreaList] = useState([]);
  const [onePage, setOnePage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAreaCode, setSelectedAreaCode] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getRecommend()
      .then((response) => {
        setAreaList(response.item);
        setOnePage(response.item.slice(0, 8));
      })
      .catch((error) => console.log("여행지 조회 실패 ", error));
  }, []);

  const handleClickloadMore = () => {
    const nextPage = currentPage + 1;
    const startIdx = nextPage * 8;
    const endIdx = startIdx + 8;
    setOnePage((prevPage) => [
      ...prevPage,
      ...areaList.slice(startIdx, endIdx),
    ]);
    setCurrentPage(nextPage);
  };

  const handleClickCard = (areaCode) => {
    setSelectedAreaCode(areaCode);
    navigate(`/recommend/${areaCode}`);
  };

  const props = {
    areaList: onePage,
    handleClickloadMore: handleClickloadMore,
    handleClickCard: handleClickCard,
  };
  return <RecommendView {...props} />;
}
