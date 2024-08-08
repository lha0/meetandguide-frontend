export default function InfoView({ handleModifyBtn, userInfo }) {
  return (
    <>
      <h1 className="w-full h-[45px] font-bold text-[20px] leading-[45px]">
        회원정보 확인
      </h1>
      <div className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px]">
        <form action="submit" className="flex flex-col gap-[20px]">
          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 닉네임 </label>
            <input
              type="text"
              defaultValue={userInfo.nickname}
              disabled
              className="px-4 py-2 rounded-2xl shadow-button  bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 비밀번호 </label>
            <input
              type="password"
              value="********"
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 나이 </label>
            <input
              type="text"
              value={userInfo.age}
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 휴대폰번호 </label>
            <input
              type="text"
              value={userInfo.phonenum}
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>
          <div className="w-[400px] h-[50px] leading-[50px] flex gap-[132px]">
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
