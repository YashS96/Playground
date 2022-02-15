
import "./ComponentA.css";
import React from 'react'

export function ComponentA ({greeting}){ // Destructuring at work
    console.log(greeting);

    return (<h1>{greeting}</h1>)
}