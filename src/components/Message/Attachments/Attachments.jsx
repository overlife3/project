import React, { useEffect, useRef, useState } from "react";
import {
  ATTACHMENT_HEIGHT,
  ATTACHMENT_WIDTH,
} from "../../../constants/message";
import style from "./Attachments.module.scss";

const Video = ({ url }) => {
  return (
    <video controls className={style.video}>
      <source src={url} type="video/mp4" />
      Извините, но ваш браузер не поддерживает видео
    </video>
  );
};

const Image = ({ url }) => {
  return <img src={url} alt="Картинка" className={style.image} />;
};

const initialState = {
  countAttachment: 0,
  isAccommodates: false,
};

const Attachments = ({ attachments }) => {
  const sizeAttachmentStyle = {
    width: ATTACHMENT_WIDTH,
    height: ATTACHMENT_HEIGHT,
  };

  return (
    <div className={style.attachments}>
      {attachments.map((item) => {
        if (item.type === "video")
          return (
            <div
              className={style.attachment_wrapper}
              style={sizeAttachmentStyle}
            >
              <Video url={item.url} />
            </div>
          );
        if (item.type === "image")
          return (
            <div
              className={style.attachment_wrapper}
              style={sizeAttachmentStyle}
            >
              <Image url={item.url} />;
            </div>
          );
      })}
    </div>
  );
};

export default Attachments;
