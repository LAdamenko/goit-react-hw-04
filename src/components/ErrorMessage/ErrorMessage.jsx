import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.message}>Something wrong... Try reloading this page</p>
  );
}
