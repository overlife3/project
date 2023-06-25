import React from "react";
import Avatar from "./Avatar/Avatar";
import Body from "./Body/Body";
import Tags from "./Tags/Tags";
import { MessageContext } from "../../context/messageContext";

import style from "./Message.module.scss";

const Message = ({ message }) => {
  return (
    <MessageContext.Provider value={{ message }}>
      {/* Создал контекст для того чтобы иметь доступ к данным сообщения в компоненте с любой вложенностью */}
      <div className={style.message}>
        <div className={style.message_wrapper}>
          <Avatar date={message.date} />
          <Body
            author={message.author}
            text={message.content}
            channel={message.channel}
            attachments={message.attachments}
          />
        </div>
        <Tags />
      </div>
    </MessageContext.Provider>
  );
};

export default Message;
