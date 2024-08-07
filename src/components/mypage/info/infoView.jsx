export default function InfoView({ handlePwdCheck }) {
  return (
    <>
      <h1 className="w-full h-[45px] font-bold text-[20px] leading-[45px]">
        회원정보
      </h1>
      <div className="w-full mt-[100px] flex flex-col items-center justify-center gap-[40px]">
        <div className="flex items-center gap-[40px]">
          {" "}
          <label> 비밀번호 </label>
          <input
            type="password"
            placeholder="현재 비밀번호를 입력해주세요."
            className="w-[300px] px-4 py-2 rounded-2xl shadow-button"
          />
        </div>
        <button
          onClick={handlePwdCheck}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          {" "}
          확인{" "}
        </button>
      </div>
    </>
  );
}
