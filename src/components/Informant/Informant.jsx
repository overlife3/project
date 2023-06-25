import React from "react";
import style from "./Informant.module.scss";

const Informant = () => {
  return (
    <div className={style.informant}>
      Запросы в процессе:
      <div className={style.row}>Pooling:</div>
      <div className={style.row}></div>
    </div>
  );
};

export default Informant;
