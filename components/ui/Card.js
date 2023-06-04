import style from "./Card.module.css";

function Card(props) {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>{props.children}</div>;
    </div>
  );
}

export default Card;
