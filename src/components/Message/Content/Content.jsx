import React from "react";
import { useState } from "react";
import { NUMBER__CHARACTERS_IN_CONTENT } from "../../../constants/message";
import { cropText } from "../../../util/cropText";
import { OutgoingText } from "../../share/OutgoingContent/OutgoingText";
import PropTypes from "prop-types";
import style from "./Content.module.scss";

const Content = ({ text }) => {
  const [visibleBigText, setVisibleBigText] = useState(false);
  const isBigText = text.length > NUMBER__CHARACTERS_IN_CONTENT;
  const smallText = cropText(text, NUMBER__CHARACTERS_IN_CONTENT);
  const toggleVisibleBigText = () => {
    setVisibleBigText((prevState) => !prevState);
  };

  if (!isBigText) {
    return (
      <div className={style.content}>
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div className={style.content}>
      <OutgoingText
        smallText={smallText}
        className={style.outgoing_text}
        bigText={text}
        size={visibleBigText ? "big" : "small"}
      />
      <span onClick={toggleVisibleBigText}>
        {visibleBigText ? "Скрыть" : "Далее"}
      </span>
    </div>
  );
};

Content.propTypes = {
  text: PropTypes.string,
};

export default Content;
