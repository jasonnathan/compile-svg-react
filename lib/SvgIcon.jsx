import React from 'react'

const SvgIcon = ({name}) => {
  const content = {__html: $('.svg-sprite.' + name).html()}
  return <div dangerouslySetInnerHTML={content} />
}

SvgIcon.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default SvgIcon
