import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessagesThunk } from "../../redux/asyncActions/getAllMessagesThunk";
import Message from "../Message/Message";
import style from "./Feed.module.scss";
const Feed = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((store) => store.feed);

  useEffect(() => {
    dispatch(getAllMessagesThunk());
  }, []);

  return (
    <div>
      {messages?.map((message) => (
        <Message />
      ))}
    </div>
  );
};

export default Feed;
