export default function InfoModifyView() {
  return (
    <>
      <h1 className="w-full h-[45px] font-bold text-[20px] leading-[45px]">
        회원정보
      </h1>
      <div className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px]">
        <form action="submit" className="flex flex-col gap-[20px]">
          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 아이디 </label>
            <input
              type="text"
              disabled
              className="px-4 py-2 rounded-2xl shadow-button  bg-[#DADADA]"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 비밀번호 </label>
            <input
              type="password"
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 나이 </label>
            <input
              type="text"
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 휴대폰번호 </label>
            <input
              type="text"
              disabled
              className="px-4 py-2 rounded-2xl shadow-button bg-[#DADADA]"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 닉네임 </label>
            <input
              type="text"
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex gap-[132px]">
            성별
            <div className="flex gap-[20px]">
              <label>
                <input
                  type="radio"
                  value={1}
                  className="px-4 py-2 rounded-2xl shadow-button"
                />
                남{" "}
              </label>
              <label>
                <input
                  type="radio"
                  value={2}
                  className="px-4 py-2 rounded-2xl shadow-button"
                />
                여{" "}
              </label>
            </div>
          </div>
        </form>
        <button className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]">
          {" "}
          수정하기{" "}
        </button>
      </div>
    </>
  );
}
