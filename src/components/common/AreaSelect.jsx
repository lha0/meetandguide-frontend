import { AreaCode } from "../../data/AreaCode";

export default function AreaSelect({ css, id, title, handleChange }) {
  const data = AreaCode;

  if (title === "지역") {
    return (
      <select className={css} id={id} onChange={handleChange}>
        {data.map((item, idx) => {
          if (item.sigunguCode == null)
            return <option value={item.areaCode}> {item.name} </option>;
        })}
      </select>
    );
  } else {
    return (
      <select className={css} id={id} onChange={handleChange}>
        {data.map((item, idx) => {
          if (item.sigunguCode !== null)
            return <option value={item.sigunguCode}> {item.name} </option>;
        })}
      </select>
    );
  }
}
