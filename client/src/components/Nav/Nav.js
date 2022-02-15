import React from 'react'
import Link from '../Link/Link.js'

function Nav() {
    let link = [
        {title: "Google", url:"https://www.google.com/"},
        {title: "Apple", url: "https://www.apple.com/in/"}
    ]
  return (
    <div>
      {link.map((lnk)=>(
          <Link link={lnk} key={lnk.title}/> 
      ))}
    </div>
  )
}

export default Nav
