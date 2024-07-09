export default function UserSignUpView({ handleSignUpBtn }) {
  return (
    <section className="w-[546px] mt-[100px] mb-[130px] flex flex-col justify-center items-center rounded-2xl shadow-button bg-[#F1F1F1]">
      <h1 className="pt-[60px] font-bold text-[30px]"> 일반 회원가입 </h1>
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
      <div className="w-[350px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
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

      <button
        onClick={handleSignUpBtn}
        className="w-[350px] h-[50px] mt-[47px] mb-[69px] px-4 py-2 rounded-2xl shadow-button font-bold text-[12px] text-white bg-[#9CB7D6]"
      >
        SIGN UP
      </button>
    </section>
  );
}
