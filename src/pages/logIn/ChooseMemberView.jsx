import { Link } from "react-router-dom";

export default function ChooseMemberView() {
  return (
    <div className="w-[546px] h-[520px] mt-[100px] mb-[130px] flex justify-around items-center rounded-2xl shadow-button bg-[#F1F1F1]">
      <Link
        to={"/userSignUp"}
        className="flex justify-center items-center w-[200px] h-[250px] px-4 py-2 rounded-2xl shadow-button font-bold text-[12px] bg-white"
      >
        {" "}
        일반 회원가입{" "}
      </Link>
      <Link
        to={"/guideSignUp"}
        className="flex justify-center items-center w-[200px] h-[250px] px-4 py-2 rounded-2xl shadow-button font-bold text-[12px] bg-white"
      >
        {" "}
        가이드 회원가입{" "}
      </Link>
    </div>
  );
}
