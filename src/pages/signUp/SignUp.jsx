export default function SignUp() {
  return (
    <section className="w-[546px] mt-[100px] mb-[130px] flex flex-col justify-center items-center rounded-2xl shadow-button bg-[#F1F1F1]">
      <h1 className="pt-[60px] font-bold text-[30px]"> 회원가입 </h1>
      <div className="w-[200px] h-[200px] m-[17px] rounded-full bg-gray">
        이미지 등록
      </div>
      <div className="w-[350px] mt-[40px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>이름</div>
        <input
          className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="NAME"
        />
      </div>
      <div className="w-[350px] mt-[40px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>닉네임</div>
        <input
          className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="NICKNAME"
        />
      </div>
      <div className="w-[350px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>나이</div>
        <input
          className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="AGE"
        />
      </div>
      <div className="w-[350px] mt-[40px] flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
          <label>
            <input type="checkbox" />
            내국인
          </label>
          <label>
            <input type="checkbox" />
            외국인
          </label>
        </div>

        <input
          className="w-[350px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          type="text"
          placeholder="휴대폰 인증"
        />
      </div>

      <div className="w-[350px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>아이디</div>
        <input
          className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="ID"
        />
      </div>

      <div className="w-[350px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>비밀번호</div>
        <input
          className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          placeholder="PASSWORD"
        />
      </div>

      <div className="w-[350px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>가이드 경력</div>
        <select className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button">
          <option value="x"> 경력 없음</option>
          <option value="1"> ~ 1년 </option>
          <option value="1~3"> 1 ~ 3년 </option>
          <option value="3~5"> 3 ~ 5년 </option>
          <option value="5~8"> 5 ~ 8년 </option>
          <option value="8~"> 8년 이상 </option>
        </select>
      </div>

      <div className="w-[350px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>지역</div>
        <select className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button">
          <option value="seoul"> 서울특별시 </option>
          <option value="incheon"> 인천광역시 </option>
          <option value="daejeon"> 대전광역시 </option>
          <option value="gwangju"> 광주광역시 </option>
          <option value="daegu"> 대구광역시 </option>
          <option value="ulsan"> 울산광역시 </option>
          <option value="busan"> 부산광역시 </option>
          <option value="sejong"> 세종특별자치시 </option>
          <option value="gyeongi"> 경기도 </option>
          <option value="gwangwon"> 강원특별자치도 </option>
          <option value="chungbuk"> 충청북도 </option>
          <option value="chungnam"> 충청남도 </option>
          <option value="jeonbuk"> 전북특별자치도 </option>
          <option value="jeonnam"> 전라남도 </option>
          <option value="gyeongbuk"> 경상북도 </option>
          <option value="gyeongnam"> 경상남도 </option>
          <option value="jeju"> 제주특별자치도 </option>
        </select>
      </div>

      <button className="w-[350px] h-[50px] mt-[47px] mb-[69px] px-4 py-2 rounded-2xl shadow-button font-bold text-[12px] text-white bg-[#9CB7D6]">
        SIGN UP
      </button>
    </section>
  );
}
