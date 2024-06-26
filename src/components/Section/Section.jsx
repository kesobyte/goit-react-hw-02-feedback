import PropTypes from "prop-types";
import css from "./Section.module.css";

export const Section = ({ title, children }) => {
  return (
    <section>
      <h3 className={css.title}>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
