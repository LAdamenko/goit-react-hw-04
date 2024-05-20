import css from "./ImageCard.module.css";

export default function ImageCard({ imgLink, imgDescr }) {
  return (
    <div>
      <img className={css.card} src={imgLink} alt={imgDescr} />
    </div>
  );
}
