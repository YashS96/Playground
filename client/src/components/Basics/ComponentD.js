import React from 'react'

function ComponentD (props) {

    return(
    <div>
        <button onClick={() => yo(props.x)}></button>
        <User y={props.x}/>
    </div>
    )
}

let User = ({y}) => {
    console.log(y)
}

function yo (x) {
    console.log(x)
}

export default ComponentD;