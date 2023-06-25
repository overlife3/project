import React from "react";
import loader from "../../../assets/gif/loader.gif";
const Loader = ({ cn }) => {
  return (
    <div className={cn}>
      <img src={loader} alt="Loading ..." />
    </div>
  );
};

export default Loader;
