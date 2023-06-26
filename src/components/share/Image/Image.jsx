import PropTypes from "prop-types";

const Image = ({ url, cn }) => {
  return <img src={url} alt="Картинка" className={cn} />;
};

Image.propTypes = {
  url: PropTypes.string,
  cn: PropTypes.string,
};

export default Image;
