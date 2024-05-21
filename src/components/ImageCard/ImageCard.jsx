import css from "./ImageCard.module.css";

export default function ImageCard({ imgLink, imgDescr, onImageClick, bigUrl }) {
  return (
    <div>
      <img
        className={css.card}
        src={imgLink}
        alt={imgDescr}
        onClick={() => {
          onImageClick(bigUrl);
        }}
      />
    </div>
  );
}
