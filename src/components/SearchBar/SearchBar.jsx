import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";

const notify = () => toast("You forgot to describe the image");

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            notify();
          } else {
            onSearch(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IoSearchOutline className={css.icon} size="20" />
          </button>
          <Toaster position="top-right" />
        </Form>
      </Formik>
    </header>
  );
}
