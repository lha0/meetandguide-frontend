export default function MyPageView({
  CATEGORY,
  viewComponent,
  handleClickCategory,
}) {
  return (
    <section className="w-[80%] mx-[162px] flex flex-col items-start]">
      <h1 className="w-full h-[65px] font-bold text-[25px] leading-[65px]">
        마이페이지
      </h1>
      <hr className="w-full h-[10px] mt-[10px]" />
      <div className="w-full min-h-[700px] mt-[10px] flex gap-[40px]">
        <aside className="w-[20%] h-full">
          <ul className="list-none">
            {CATEGORY.map((category, idx) => {
              return (
                <li
                  key={idx}
                  className="h-[45px] leading-[45px]"
                  onClick={() => handleClickCategory(idx)}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="w-[80%] flex flex-col items-center">
          {viewComponent}
        </div>
      </div>
    </section>
  );
}
