export default function InfoView({ handleModifyBtn, userInfo }) {
  return (
    <>
      <h1 className="w-full h-[45px] font-bold text-[18px] md:text-[20px] leading-[45px]">
        회원정보 확인
      </h1>
      <div className="w-full mt-[50px] flex flex-col items-center justify-center">
        <form action="submit" className="w-[400px] flex flex-col gap-[20px]">
          <div className="w-[70%] h-[50px] md:w-[100%] pl-[5%] leading-[50px] flex justify-between text-[13px] md:text-[16px]">
            <label> 닉네임 </label>
            <input
              type="text"
              defaultValue={userInfo.nickname}
              disabled
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[70%] h-[50px] md:w-[100%] pl-[5%] leading-[50px] flex justify-between text-[13px] md:text-[16px]">
            <label> 비밀번호 </label>
            <input
              type="password"
              value="********"
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[70%] h-[50px] md:w-[100%] pl-[5%] leading-[50px] flex justify-between text-[13px] md:text-[16px]">
            <label> 나이 </label>
            <input
              type="text"
              value={userInfo.age}
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[70%] h-[50px] md:w-[100%] pl-[5%] leading-[50px] flex justify-between text-[13px] md:text-[16px]">
            <label> 휴대폰번호 </label>
            <input
              type="text"
              value={userInfo.phonenum}
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>
          <div className="w-[70%] h-[50px] md:w-[100%] pl-[5%] leading-[50px] flex justify-between text-[13px] md:text-[16px]">
            <p>성별</p>

            {userInfo.gender ? (
              <div className="w-[60%] px-4 rounded-2xl shadow-button bg-[#EAEAEA]">
                남자
              </div>
            ) : (
              <div className="w-[60%] px-4 rounded-2xl shadow-buttonbg-[#EAEAEA]">
                여자
              </div>
            )}
          </div>
        </form>
        <button
          onClick={handleModifyBtn}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          {" "}
          수정하기{" "}
        </button>
      </div>
    </>
  );
}
