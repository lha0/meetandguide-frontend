export default function UserSignUpView({
  values,
  handleChange,
  handleSignUpBtn,
  phoneNumber,
  email,
  verifyNum,
  displayFormattedPhoneNumber,
  handleSendSMS,
  handleVerifyNum,
  isSMSSent,
  isSMSVerified,
  handleSendEmail,
  handleVerifyEmail,
  isEmailSent,
  isEmailVerified,
  emailError,
}) {
  return (
    <section className="w-[600px] mt-[100px] mb-[130px] flex flex-col justify-center items-center rounded-2xl shadow-button bg-[#F1F1F1]">
      <h1 className="pt-[60px] font-bold text-[30px]"> 일반 회원가입 </h1>
      <div className="w-[400px] mt-[40px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>아이디</div>
        <input
          className="w-[300px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          id="username"
          value={values.username}
          onChange={handleChange}
          placeholder="ID"
        />
      </div>
      <div className="w-[400px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>비밀번호</div>
        <input
          className="w-[300px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          id="password"
          value={values.password}
          onChange={handleChange}
          placeholder="PASSWORD"
        />
      </div>
      <div className="w-[400px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>닉네임</div>
        <input
          className="w-[300px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          id="nickname"
          value={values.nickname}
          onChange={handleChange}
          placeholder="NICKNAME"
        />
      </div>
      <div className="w-[400px] mt-[40px] flex gap-[10px]">
        <label>
          <input
            type="radio"
            id="gender"
            value={1}
            checked={values.gender === 1}
            onChange={handleChange}
          />
          남
        </label>
        <label>
          <input
            type="radio"
            id="gender"
            value={2}
            checked={values.gender === 2}
            onChange={handleChange}
          />
          여
        </label>
      </div>
      <div className="w-[400px] mt-[20px] flex justify-between items-center gap-[10px] text-[15px]">
        <div>나이</div>
        <input
          className="w-[300px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
          id="age"
          value={values.age}
          onChange={handleChange}
          placeholder="AGE"
        />
      </div>
      <div className="w-[400px] mt-[40px] flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
          <label>
            <input
              type="radio"
              name="nationality"
              id="domestic"
              checked={values.nationality === "domestic"}
              onChange={() =>
                handleChange({
                  target: { id: "nationality", value: "domestic" },
                })
              }
            />
            내국인
          </label>
          <label>
            <input
              type="radio"
              name="nationality"
              id="foreign"
              checked={values.nationality === "foreign"}
              onChange={() =>
                handleChange({
                  target: { id: "nationality", value: "foreign" },
                })
              }
            />
            외국인
          </label>
        </div>

        {/* 내국인일 경우 휴대폰 인증 UI */}
        {values.nationality === "domestic" && (
          <>
            <div className="w-[400px] mt-[40px] flex justify-between gap-[10px]">
              <input
                className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
                type="text"
                id="phonenum"
                value={displayFormattedPhoneNumber(phoneNumber)}
                onChange={handleChange}
                placeholder="휴대폰 인증"
              />

              <button
                className={`w-[120px] h-[45px] px-2 py-1 ${
                  isSMSSent ? "bg-gray" : "bg-blue-500"
                } text-white rounded-2xl shadow-button`}
                onClick={handleSendSMS}
              >
                {isSMSSent ? "다시 보내기" : "인증번호 전송"}
              </button>
            </div>

            <div className="w-[400px] mt-[40px] flex justify-between gap-[10px]">
              <input
                className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
                type="number"
                id="verifynum"
                value={verifyNum}
                onChange={handleChange}
                placeholder="인증 번호"
              />

              <button
                onClick={handleVerifyNum}
                disabled={isSMSVerified}
                className={`w-[120px] h-[45px] px-2 py-1 ${
                  isSMSVerified ? "bg-gray" : " bg-blue-500"
                } text-white rounded-2xl shadow-button`}
              >
                {isSMSVerified ? "인증 완료" : "인증번호 전송"}
              </button>
            </div>
          </>
        )}

        {/* 외국인일 경우 이메일 인증 UI */}
        {values.nationality === "foreign" && (
          <>
            <div className="w-[400px] flex flex-col gap-[10px]">
              <div className="w-[400px] mt-[40px] flex justify-between gap-[10px]">
                <input
                  className={`w-[300px] h-[45px] px-4 py-2 rounded-2xl shadow-button ${
                    emailError ? "border-red-500" : ""
                  }`}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="이메일 인증"
                />

                <button
                  className={`w-[120px] h-[45px] px-2 py-1 ${
                    isEmailSent ? "bg-gray" : "bg-blue-500"
                  } text-white rounded-2xl shadow-button`}
                  onClick={handleSendEmail}
                >
                  {isEmailSent ? "다시 보내기" : "인증번호 전송"}
                </button>
              </div>

              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>

            <div className="w-[400px] mt-[40px] flex justify-between gap-[10px]">
              <input
                className="w-[270px] h-[45px] px-4 py-2 rounded-2xl shadow-button"
                type="number"
                id="verifynum"
                value={verifyNum}
                onChange={handleChange}
                placeholder="인증 번호"
              />

              <button
                onClick={handleVerifyEmail}
                disabled={isEmailVerified}
                className={`w-[120px] h-[45px] px-2 py-1 ${
                  isEmailVerified ? "bg-gray" : " bg-blue-500"
                } text-white rounded-2xl shadow-button`}
              >
                {isEmailVerified ? "인증 완료" : "인증번호 전송"}
              </button>
            </div>
          </>
        )}
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
