import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import SvgSelector from "../../../assets/SvgSelector";
import { MessageContext } from "../../../context/messageContext";
import classnames from "classnames";
import { toggleFavoriteMessage } from "../../../redux/actions/server";
import style from "./Settings.module.scss";
const Settings = () => {
  const { message } = useContext(MessageContext);
  const dispatch = useDispatch();
  const { favoriteMessages } = useSelector((store) => store.server);

  const toggleFavorite = () => {
    dispatch(toggleFavoriteMessage(message.id));
  };

  const cnStar = classnames(style.star, {
    [style.active]: favoriteMessages.includes(message.id),
  });

  return (
    <div className={style.settings}>
      <SvgSelector name="send" cn={style.send} />
      <SvgSelector name="hide" cn={style.hide} />
      <SvgSelector name="setting" cn={style.setting} />
      <SvgSelector name="star" cn={cnStar} onClick={toggleFavorite} />
    </div>
  );
};

export default Settings;
