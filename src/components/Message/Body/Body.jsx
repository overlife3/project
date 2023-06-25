import React from "react";
import Attachments from "../Attachments/Attachments";
import Content from "../Content/Content";
import Direction from "../Direction/Direction";
import Settings from "../Settings/Settings";
import style from "./Body.module.scss";
const Body = (props) => {
  const { author, text, channel, attachments } = props;
  return (
    <div className={style.body}>
      <div className={style.header}>
        <div>
          <p className={style.name}>{author}</p>
          <p className={style.channel}>{channel}</p>
        </div>
        <div className={style.office}>
          <Direction />
          <Settings />
        </div>
      </div>
      <Content text={text} />
      <Attachments attachments={attachments} />
    </div>
  );
};

export default Body;
