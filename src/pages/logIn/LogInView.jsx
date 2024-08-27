import { Link } from "react-router-dom";

export default function LogInView({
  values,
  handleChange,
  handleLogInBtn,
  handleSignUpBtn,
  handleKeyDown,
}) {
  return (
    <section className="w-[546px] h-[520px] mt-[100px] mb-[130px] flex flex-col justify-center items-center rounded-2xl shadow-button bg-[#F1F1F1]">
      <h1 className="pt-[60px] font-bold text-[30px]"> 로그인 </h1>
      <div className="mt-[40px] flex flex-col gap-[22px]">
        <input
          className="w-[350px] h-[50px] px-4 py-2 rounded-2xl shadow-button"
          onChange={handleChange}
          id="username"
          value={values.username}
          placeholder="ID"
        />
        <input
          className="w-[350px] h-[50px] px-4 py-2 rounded-2xl shadow-button"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="password"
          type="password"
          value={values.password}
          placeholder="PASSWORD"
        />
      </div>
      <div className="mt-[47px] pb-[69px] flex flex-col gap-[10px]">
        <button
          onClick={handleLogInBtn}
          className="w-[350px] h-[50px] px-4 py-2 rounded-2xl shadow-button font-bold text-[12px] text-white bg-[#9CB7D6]"
        >
          LOG IN
        </button>
        <button
          onClick={handleSignUpBtn}
          className="flex justify-center items-center w-[350px] h-[50px] px-4 py-2 rounded-2xl shadow-button font-bold text-[12px] bg-white"
        >
          SIGN UP
        </button>
      </div>
    </section>
  );
}
