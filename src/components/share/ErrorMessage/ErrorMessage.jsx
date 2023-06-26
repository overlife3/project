import React from "react";
import PropTypes from "prop-types";
import style from "./ErrorMessage.module.scss";

const ErrorMessage = ({ onClick }) => {
  return (
    <div className={style.error_message}>
      <p>Произошла ошибка.</p>
      <p>
        <button onClick={onClick}>Повторить</button>
      </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  onClick: PropTypes.func,
};

export default ErrorMessage;
