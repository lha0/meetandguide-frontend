import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center font-pre">
        {props.children}
      </div>

      <Footer />
    </>
  );
}
