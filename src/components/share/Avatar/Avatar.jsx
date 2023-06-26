import React from "react";
import { getValidTime } from "../../../util/getValidTime";
import img from "../../../assets/img/default_avatar.png";
import PropTypes from "prop-types";
import style from "./Avatar.module.scss";

const Avatar = ({ date }) => {
  const time = getValidTime(new Date(date));
  return (
    <div className={style.avatar}>
      <img src={img} />
      <p>{time}</p>
    </div>
  );
};

Avatar.propTypes = {
  date: PropTypes.string,
};

export default Avatar;
