import Logo from "../../assets/image/logo.png";

export default function Footer() {
  return (
    <section className="h-[250px] max-w-full bg-[#ECECEC]">
      <img src={Logo} className="w-[12%] mx-[162px] py-[26px]" alt="Logo" />
    </section>
  );
}
