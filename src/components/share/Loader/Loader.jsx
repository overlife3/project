import React from "react";
import PropTypes from "prop-types";
import loader from "../../../assets/gif/loader.gif";

const Loader = ({ cn }) => {
  return (
    <div className={cn}>
      <img src={loader} alt="Loading ..." />
    </div>
  );
};

Loader.propTypes = {
  cn: PropTypes.string,
};

export default Loader;
