import { AreaCode } from "../../data/AreaCode";

export default function AreaSelect({ css, id, title, areaCode, handleChange }) {
  const data = AreaCode;

  if (title === "지역") {
    return (
      <select className={css} id={id} onChange={handleChange}>
        {data.map((item, idx) => {
          if (item.sigunguCode == null)
            return (
              <option key={idx} value={item.areaCode}>
                {" "}
                {item.name}{" "}
              </option>
            );
        })}
      </select>
    );
  } else {
    return (
      <select className={css} id={id} onChange={handleChange}>
        {areaCode == null} && <option> 지역을 선택해주세요 </option>
        {data.map((item, idx) => {
          if (item.sigunguCode !== null && item.areaCode == areaCode)
            return (
              <option key={idx} value={item.sigunguCode}>
                {" "}
                {item.name}{" "}
              </option>
            );
        })}
      </select>
    );
  }
}
