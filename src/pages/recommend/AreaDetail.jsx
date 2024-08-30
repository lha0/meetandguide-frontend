import { useParams } from "react-router-dom";
import AreaDetailView from "./AreaDetailView";
import { useEffect, useState } from "react";
import { getAreaName, getDetailRecommend } from "../../api/AuthApi";
import Loading from "../../components/common/Loading";

export default function AreaDetail() {
  const params = useParams();
  const areaCode = parseInt(params.areaCode);
  const [recommendInfo, setRecommendInfo] = useState([
    {
      name: "",
      areaCode: 0, // 지역코드
      sigunguCode: 0, // 시군구코드
      imageUrl: "", // 시군구를 대표할 이미지
      tour: [],
      restaurant: [], // 식당 목록(5
    },
  ]);
  const [areaName, setAreaName] = useState("");
  const [curSigungu, setCurSigungu] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [bannerImg, setBannerImg] = useState("");
  const [slogan, setSlogan] = useState("");

  useEffect(() => {
    getAreaName({ areaCode })
      .then((response) => setAreaName(response.name))
      .catch((error) => console.log("지역 이름 얻기 fail", error));
  }, [areaCode]);

  useEffect(() => {
    setIsLoading(true);
    getDetailRecommend({ areaCode })
      .then((response) => {
        console.log(response);
        setRecommendInfo(response.sigungu);
        setBannerImg(response.imageUrl);
        setSlogan(response.slogan);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [areaCode]);

  const handleCurSigungu = (idx) => {
    setCurSigungu(idx);
  };

  const props = {
    areaName,
    recommendInfo,
    curSigungu,
    handleCurSigungu,
    bannerImg,
    slogan,
  };

  return <>{isLoading ? <Loading /> : <AreaDetailView {...props} />}</>;
}
