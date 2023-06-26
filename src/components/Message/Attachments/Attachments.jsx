import React from "react";
import {
  ATTACHMENT_HEIGHT,
  ATTACHMENT_WIDTH,
} from "../../../constants/message";
import Video from "../../share/Video/Video";
import Image from "../../share/Image/Image";
import PropTypes from "prop-types";
import { attachmentPropTypes } from "../../../proptypes/proptypes";
import style from "./Attachments.module.scss";

const Attachments = ({ attachments }) => {
  const sizeAttachmentStyle = {
    width: ATTACHMENT_WIDTH,
    height: ATTACHMENT_HEIGHT,
  };

  return (
    <div className={style.attachments}>
      {attachments.map((item, index) => {
        if (item.type === "video")
          return (
            <div
              className={style.attachment_wrapper}
              style={sizeAttachmentStyle}
              key={index}
            >
              <Video url={item.url} cn={style.video} />
            </div>
          );
        if (item.type === "image")
          return (
            <div
              className={style.attachment_wrapper}
              style={sizeAttachmentStyle}
              key={index}
            >
              <Image url={item.url} cn={style.image} />;
            </div>
          );
      })}
    </div>
  );
};

Attachments.propTypes = {
  attachments: PropTypes.arrayOf(attachmentPropTypes),
};

export default Attachments;
