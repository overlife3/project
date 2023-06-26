import React, { useEffect, useRef } from "react";
import Message from "../../Message/Message";
import Informant from "../Informant/Informant";
import PropTypes from "prop-types";
import { messagePropTypes } from "../../../proptypes/proptypes";
import style from "./List.module.scss";

const List = ({ messages, direction }) => {
  const listRef = useRef();
  const isAscending = direction === "ascending";
  const isDescending = direction === "descending";

  useEffect(() => {
    if (isAscending) {
      listRef.current.scrollTop = 0;
    }
    if (isDescending) {
      const scrollHeight = listRef.current.scrollHeight;
      listRef.current.scrollTop = scrollHeight;
    }
  }, [direction]);

  return (
    <div className={style.list} ref={listRef}>
      {isDescending && <Informant />}
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
      {isAscending && <Informant />}
    </div>
  );
};

List.propTypes = {
  messages: PropTypes.arrayOf(messagePropTypes),
  direction: PropTypes.string,
};

export default List;
