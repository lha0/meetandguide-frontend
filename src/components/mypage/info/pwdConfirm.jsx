import { useState } from "react";
import InfoModify from "./infoModify";

export default function PwdConfirm({ handleModifyBtn, userInfo }) {
  const [pwd, setPwd] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const handleChange = (e) => {
    setPwd(e.target.value);
  };

  const handleConfirm = () => {
    setIsConfirm(true);
  };

  const props = { handleModifyBtn, userInfo, pwd };

  return isConfirm ? (
    <InfoModify {...props} />
  ) : (
    <>
      <h1 className="w-full h-[45px] font-bold text-[20px] leading-[45px]">
        회원정보 수정
      </h1>
      <div className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px]">
        <form action="submit" className="flex flex-col gap-[20px]">
          <div className="w-[400px] h-[50px] leading-[50px] flex justify-between">
            <label> 비밀번호 </label>
            <input
              type="password"
              onChange={handleChange}
              className="px-4 py-2 rounded-2xl shadow-button"
            />
          </div>
        </form>
        <button onClick={handleConfirm}> 비밀번호 확인 </button>
      </div>
    </>
  );
}
