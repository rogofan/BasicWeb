import style from "./Image.module.css";

function Image(props) {
  return (
    <div>
      <div className={style.card}>{props.children}</div>;
    </div>
  );
}

export default Image;
