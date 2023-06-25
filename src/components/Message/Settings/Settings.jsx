import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import SvgSelector from "../../../assets/SvgSelector";
import { MessageContext } from "../../../context/messageContext";
import classnames from "classnames";
import { toggleFavoriteMessage } from "../../../redux/actions/actions";
import style from "./Settings.module.scss";
const Settings = () => {
  const dispatch = useDispatch();
  const favoriteMessages = useSelector((store) => store.feed.favoriteMessages);
  const { message } = useContext(MessageContext);

  const toggleFavorite = () => {
    dispatch(toggleFavoriteMessage(message.id));
  };
  console.log(message.id);

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
