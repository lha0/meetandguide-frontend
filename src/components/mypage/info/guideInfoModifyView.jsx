export default function GuideInfoModifyView({
  guideParams,
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
              value={guideParams.password}
              onChange={handleChange}
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 나이 </label>
            <input
              id="age"
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
                  name="gender"
                  type="radio"
                  defaultChecked={guideParams.gender}
                  checked={guideParams.gender === 1}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-2xl shadow-button"
                />
                남{" "}
              </label>
              <label>
                <input
                  name="gender"
                  type="radio"
                  defaultChecked={guideParams.gender}
                  checked={guideParams.gender === 2}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-2xl shadow-button"
                />
                여{" "}
              </label>
            </div>
          </div>
          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 가이드경력 </label>
            <select
              id="career"
              defaultValue={userInfo.career}
              onChange={handleChange}
              className="w-[60%] px-4 py-2 rounded-2xl shadow-button"
            >
              <option value={0}> 경력 없음</option>
              <option value={1}> ~ 1년 </option>
              <option value={2}> 1 ~ 3년 </option>
              <option value={3}> 3 ~ 5년 </option>
              <option value={4}> 5 ~ 8년 </option>
              <option value={5}> 8년 이상 </option>
            </select>
          </div>

          <div className="w-[400px] h-[50px] leading-[50px] flex gap-[132px]">
            활동범위
            <div className="flex gap-[20px]">
              <label>
                <input
                  type="checkbox"
                  id="online"
                  defaultChecked={guideParams.online}
                  checked={guideParams.online === 1}
                  onChange={handleChange}
                />
                온라인
              </label>
              <label>
                <input
                  type="checkbox"
                  id="offline"
                  defaultChecked={guideParams.offline}
                  checked={guideParams.offline === 1}
                  onChange={handleChange}
                />
                오프라인
              </label>
            </div>
          </div>

          <div className="w-[400px] h-[200px] leading-[50px] flex justify-between">
            <label> 한 줄 소개 </label>
            <textarea
              className="w-[60%] h-[200px] px-4 py-2 rounded-2xl shadow-button"
              id="comment"
              defaultValue={userInfo.comment}
              onChange={handleChange}
            />
          </div>
        </form>

        <button
          onClick={handleConfirmBtn}
          className="w-[100px] mt-[20px] px-3 py-2 rounded-2xl shadow-button font-bold text-white bg-[#9CB7D6]"
        >
          확인
        </button>
      </div>
    </>
  );
}
