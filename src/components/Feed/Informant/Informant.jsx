import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { getOldMessagesThunk } from "../../../redux/asyncActions/getOldMessagesThunk";
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
      dispatch(getOldMessagesThunk());
    }
  }, [inView]);

  const handleClick = () => {
    dispatch(getOldMessagesThunk());
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
        {!loading && !error && <div>Более старых сообщений нет</div>}
      </div>
    </>
  );
};

export default Informant;
