import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SvgSelector from "../../../assets/SvgSelector";
import { toggleDirection } from "../../../redux/actions/actions";
import style from "./Menu.module.scss";

const Menu = () => {
  const direction = useSelector((store) => store.feed.direction);
  const dispatch = useDispatch();
  const toggleDirectionFeed = () => {
    dispatch(toggleDirection());
  };
  const arrowCn = classNames(style.arrow, {
    [style.reverse]: direction === "ascending",
  });
  return (
    <div className={style.menu}>
      <SvgSelector name="arrow" onClick={toggleDirectionFeed} cn={arrowCn} />
    </div>
  );
};

export default Menu;
