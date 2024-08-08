export default function UserInfoModifyView({
  userInfo,
  handleChange,
  handleConfirmBtn,
}) {
  return (
    <>
      <h1 className="w-full h-[45px] font-bold text-[20px] leading-[45px]">
        회원정보 수정
      </h1>
      <div className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px]">
        <form action="submit" className="flex flex-col gap-[20px]">
          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 닉네임 </label>
            <input
              id="nickname"
              type="text"
              defaultValue={userInfo.nickname}
              onChange={handleChange}
              className="px-4 py-2 rounded-2xl shadow-button "
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 비밀번호 </label>
            <input
              type="password"
              value={userInfo.password}
              onChange={handleChange}
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 나이 </label>
            <input
              type="text"
              defaultValue={userInfo.age}
              onChange={handleChange}
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 휴대폰번호 </label>
            <input
              type="text"
              value={userInfo.phoneNum}
              readOnly
              className="px-4 py-2 rounded-2xl shadow-button bg-[#EAEAEA]"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex gap-[132px]">
            성별
            <div className="flex gap-[20px]">
              <label>
                <input
                  type="radio"
                  defaultValue={1}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-2xl shadow-button"
                />
                남{" "}
              </label>
              <label>
                <input
                  type="radio"
                  defaultValue={2}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-2xl shadow-button"
                />
                여{" "}
              </label>
            </div>
          </div>
        </form>
        <button
          onClick={handleConfirmBtn}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          {" "}
          확인{" "}
        </button>
      </div>
    </>
  );
}
