import { useParams } from "react-router-dom";
import AreaDetailView from "./AreaDetailView";
import { useEffect } from "react";
import { getDetailRecommend } from "../../api/AuthApi";

export default function AreaDetail() {
  const params = useParams();
  const areaCode = parseInt(params.areaCode);

  useEffect(() => {
    getDetailRecommend(areaCode)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <AreaDetailView />
    </>
  );
}
