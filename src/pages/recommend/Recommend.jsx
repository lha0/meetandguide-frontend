import { useEffect, useState } from "react";
import RecommendView from "./RecommendView";
import { getRecommend } from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";

export default function Recommend() {
  const [areaList, setAreaList] = useState([]);
  const [onePage, setOnePage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAreaCode, setSelectedAreaCode] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어를 저장할 상태

  const navigate = useNavigate();

  useEffect(() => {
    getRecommend()
      .then((response) => {
        setAreaList(response.item);
        setOnePage(response.item.slice(0, 8));
      })
      .catch((error) => console.log("여행지 조회 실패 ", error));
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // 입력된 검색어를 상태에 저장
    setCurrentPage(0); // 검색 시 페이지를 초기화
    const filteredList = areaList.filter((item) =>
      item.areaname.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setOnePage(filteredList.slice(0, 8)); // 필터링된 결과의 처음 8개만 보여줌
  };

  const handleClickloadMore = () => {
    const nextPage = currentPage + 1;
    const startIdx = nextPage * 8;
    const endIdx = startIdx + 8;
    const filteredList = areaList.filter((item) =>
      item.areaname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setOnePage((prevPage) => [
      ...prevPage,
      ...filteredList.slice(startIdx, endIdx),
    ]);
    setCurrentPage(nextPage);
  };

  const handleClickCard = (areaCode) => {
    setSelectedAreaCode(areaCode);
    navigate(`/recommend/${areaCode}`);
  };

  const props = {
    handleClickloadMore,
    handleClickCard,
    searchQuery,
    onePage,
    handleInputChange,
  };
  return <RecommendView {...props} />;
}
