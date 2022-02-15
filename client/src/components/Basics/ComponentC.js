import React from 'react'

function ComponentC({greeting, greetingFunc}) {
    console.log(greeting,greetingFunc)
  return (
    <div>
        <button onClick={()=>{greetingFunc(greeting)}}>Alert!!</button>
    </div>
  )
}

export default ComponentC;
