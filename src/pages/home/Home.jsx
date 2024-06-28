import MainSection from "../../components/MainSection";
import mainSectionImg from "../../assets/image/main_section1.png";
import onlineSectionImg from "../../assets/image/main_section2.png";
import offlineSectionImg from "../../assets/image/main_section3.png";
import recommendSectionImg from "../../assets/image/main_section4.png";

let dummyData = [
  {
    title: "",
    mainText: "동네 전문가와 함께 새로운 여행 경험",
    subText: "MEET&GUIDE와 함께 해요.",
    img: mainSectionImg,
    button: "더 알아보기",
    bgColor: "#FFEECD",
  },
  {
    title: "온라인 가이드",
    mainText: "현지 전문가에게 받는 국내 여행 코스",
    subText: "온라인으로 쉽게 여행지 코스를 계획해 보세요.",
    img: onlineSectionImg,
    button: "온라인 가이드 찾으러 가기",
    bgColor: "#FFFFFF",
  },
  {
    title: "오프라인 가이드",
    mainText: "대한민국 구석구석을 자유롭게 즐기자",
    subText: "현지 전문가와 함께 색다른 여행 경험을 만들어 보세요.",
    img: offlineSectionImg,
    button: "오프라인 가이드 찾으러 가기",
    bgColor: "#FFEECD",
  },
  {
    title: "여행지 추천",
    mainText: "어떤 곳을 여행할지 모르겠다면?",
    subText: "원하는 여행지의 먹거리, 놀거리 등을 알아보세요.",
    img: recommendSectionImg,
    button: "여행지 추천 받으러 가기",
    bgColor: "#FFFFFF",
  },
];

export default function Home() {
  return (
    <section className="w-full bg-transparent">
      {dummyData.map((item, index) => {
        return (
          <MainSection
            title={item.title}
            mainText={item.mainText}
            subText={item.subText}
            img={item.img}
            buttonText={item.button}
            bgColor={item.bgColor}
            idx={index}
          />
        );
      })}
    </section>
  );
}
