import React from "react";
import { getValidTime } from "../../../util/getValidTime";
import img from "../../../assets/img/default_avatar.png";
import style from "./Avatar.module.scss";

const Avatar = ({ date }) => {
  const time = getValidTime(new Date(date));
  return (
    <div className={style.avatar}>
      <img src={img} />
      {time}
    </div>
  );
};

export default Avatar;
