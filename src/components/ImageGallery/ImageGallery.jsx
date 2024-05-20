import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard imgLink={item.urls.small} imgDescr={item.description} />
        </li>
      ))}
    </ul>
  );
}
