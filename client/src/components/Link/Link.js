import React from 'react'

function Link(props) {
    let websiteLink=props.link;
  return (
    <a className="NavLink" href={websiteLink.url}>{websiteLink.title}</a>
  )
}

export default Link
