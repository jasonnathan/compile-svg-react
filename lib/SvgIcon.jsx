import React from 'react'

// this is a named export to be consistent with other packages
export const SvgIcon = ({name}) => {
  const content = {__html: $('.svg-sprite.' + name).html()}
  return <div dangerouslySetInnerHTML={content} />
}

SvgIcon.propTypes = {
  name: React.PropTypes.string.isRequired
}
