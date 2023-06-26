import React from "react";
import style from "./Direction.module.scss";

const Direction = () => {
  return (
    <div className={style.direction}>
      <button>Левый</button>
      <button>Центр</button>
      <button>Правый</button>
    </div>
  );
};

export default Direction;
