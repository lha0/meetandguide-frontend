import { Link } from "react-router-dom";

export default function HeaderButton({ url, imgUrl, content, alt }) {
  return (
    <Link to={url} className="w-[110px] flex gap-[5px] justify-center">
      <img src={imgUrl} className="w-[15px] h-[15px]" alt={alt} />
      <div>{content}</div>
    </Link>
  );
}
