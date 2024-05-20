import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.btnLoadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
