import React from 'react'

function ComponentB(props) { //props are read only
    console.log(props)
  return (
    <div>
      <h1>It's a {props.pronoun}</h1>    
      {props.children}
    </div>
  )
}

export default ComponentB;
