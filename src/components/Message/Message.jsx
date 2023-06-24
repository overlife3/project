import React from "react";
import Avatar from "./Avatar/Avatar";
import Body from "./Body/Body";
import Tags from "./Tags/Tags";

import style from "./Message.module.scss";

const Message = () => {
  return (
    <div className={style.message}>
      <div className={style.message_wrapper}>
        <Avatar />
        <Body />
      </div>
      <Tags />
    </div>
  );
};

export default Message;
