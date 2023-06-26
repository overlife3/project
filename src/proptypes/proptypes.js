import PropTypes from "prop-types";

export const attachmentPropTypes = PropTypes.shape({
  type: PropTypes.string,
  url: PropTypes.string,
});

export const messagePropTypes = PropTypes.shape({
  author: PropTypes.string,
  content: PropTypes.string,
  channel: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // новые данные которые приходят с сервера имеют другой тип
  date: PropTypes.string,
  attachments: PropTypes.arrayOf(attachmentPropTypes),
  senderNumber: PropTypes.string,
  region: PropTypes.string,
});
