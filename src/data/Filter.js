import { AreaName, SigunguName } from "./AreaName";

export const GUIDE_FILTER_CATEGORYS = [
  {
    title: "나이",
    sortType1: "ageGoe",
    sortType2: "ageLoe",
  },
  {
    title: "경력",
    sortType1: "careerGoe",
    sortType2: "careerLoe",
  },
  {
    title: "지역",
    sortType: "areaCode",
    contents: AreaName,
  },
  {
    title: "시군구",
    sortType: "sigunguCode",
    contents: SigunguName,
  },
  {
    title: "정렬",
    sortType: "order",
    contents: [
      { value: "null", name: "선택 안 함" },
      { value: "rating", name: "평점순" },
      { value: "matching", name: "매칭순" },
    ],
  },
];
