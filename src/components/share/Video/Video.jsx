import React from "react";
import PropTypes from "prop-types";

const Video = ({ url, cn }) => {
  return (
    <video controls className={cn}>
      <source src={url} type="video/mp4" />
      Извините, но ваш браузер не поддерживает видео
    </video>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  cn: PropTypes.string,
};

export default Video;
