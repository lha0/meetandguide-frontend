//VAC 컴포넌트, view를 위한 props와 jsx만 존재하는 컴포넌트
import MainSection from "../../components/Layout/MainSection";

export default function HomeView({ dummyData }) {
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
            url={item.url}
            idx={index}
          />
        );
      })}
    </section>
  );
}
