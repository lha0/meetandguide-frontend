import { Link } from "react-router-dom";

export default function HeaderButton({ url, imgUrl, content, alt }) {
  return (
    <Link
      to={url}
      className="w-[50px] flex gap-[5px] justify-center sm:w-[110px]"
    >
      <img src={imgUrl} className="w-[15px] h-[15px]" alt={alt} />
      <div className="w-[80%]">{content}</div>
    </Link>
  );
}
