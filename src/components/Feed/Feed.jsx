import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesThunk } from "../../redux/asyncActions/getAllMessagesThunk";
import Menu from "./Menu/Menu";
import Loader from "../share/Loader/Loader";
import { usePolling } from "../../hooks/usePolling";
import { updateMessagesWithPoolingThunk } from "../../redux/asyncActions/updateMessagesWithPoolingThunk";
import { POOLING_DURATION } from "../../constants/request";
import List from "./List/List";
import ErrorMessage from "../share/ErrorMessage/ErrorMessage";
import style from "./Feed.module.scss";

const Feed = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.server.messages);
  const { loading, error, direction } = useSelector((store) => store.feed);
  usePolling(updateMessagesWithPoolingThunk, POOLING_DURATION);
  useEffect(() => {
    dispatch(getAllMessagesThunk());
  }, []);

  const listMessages = [...messages];

  const handleError = () => {
    dispatch(getAllMessagesThunk());
  };

  if (direction === "descending") {
    listMessages.reverse();
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage onClick={handleError} />;
  }

  return (
    <div className={style.feed}>
      <List messages={listMessages} direction={direction} />
      <Menu />
    </div>
  );
};

export default Feed;
