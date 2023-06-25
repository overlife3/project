import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesThunk } from "../../redux/asyncActions/getAllMessagesThunk";
import Message from "../Message/Message";
import Menu from "./Menu/Menu";
import style from "./Feed.module.scss";
import Loader from "../share/Loader/Loader";
import Informant from "../Informant/Informant";
const Feed = () => {
  const dispatch = useDispatch();
  const { messages, loading, error, direction } = useSelector(
    (store) => store.feed
  );

  useEffect(() => {
    dispatch(getAllMessagesThunk());
  }, []);

  const customMessages = [...messages];
  const isAscending = direction === "ascending";
  if (!isAscending) {
    customMessages.reverse();
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className={style.feed}>
        <div className={style.messages}>
          {customMessages?.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
        <Menu />
      </div>
      <Informant />
    </>
  );
};

export default Feed;
