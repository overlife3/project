import { useEffect, useRef, useState } from "react";
import { getTextOffsetHeight } from "../../../util/getTextOffsetHeight";
import PropTypes from "prop-types";

const initialState = {
  style: { position: "relative" },
};

export const OutgoingText = (props) => {
  const divRef = useRef();
  const { smallText, bigText, className = "", size } = props;
  const [state, setState] = useState(initialState);
  const isBig = size === "big";

  useEffect(() => {
    setState((prevState) => {
      const style = { ...prevState.style };
      if (!isBig) {
        style.height = getTextOffsetHeight(divRef, smallText, className);
      } else {
        style.height = getTextOffsetHeight(divRef, bigText, className);
      }
      return { style };
    });
  }, [isBig]);

  return (
    <div style={state.style} className={className} ref={divRef}>
      {isBig ? bigText : smallText}
      {!isBig && <span>...</span>}
    </div>
  );
};

OutgoingText.propTypes = {
  smallText: PropTypes.string,
  bigText: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};
