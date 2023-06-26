import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { updateMessagesWithScrollThunk } from "../../../redux/asyncActions/updateMessageWithScrollThunk";
import Loader from "../../share/Loader/Loader";
import style from "./Informant.module.scss";

const Informant = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((store) => store.informant);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      dispatch(updateMessagesWithScrollThunk());
    }
  }, [inView]);

  const handleClick = () => {
    dispatch(updateMessagesWithScrollThunk());
  };

  return (
    <>
      <div className={style.informant} ref={ref}>
        {loading && <Loader cn={style.loader} />}
        {error && (
          <p className={style.error}>
            Произошла ошибка. <button onClick={handleClick}>Повторить</button>
          </p>
        )}
        {!loading && !error && <p>Новых сообщений пока нет</p>}
      </div>
    </>
  );
};

export default Informant;
