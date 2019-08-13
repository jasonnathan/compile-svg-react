import React from "react";
import PropTypes from "prop-types";

const SvgIcon = ({ name }) => {
  const classes = `svg-sprite ${name}`;
  const elements = document.getElementsByClassName(classes);
  const content = elements[0].innerHTML;
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default SvgIcon;
