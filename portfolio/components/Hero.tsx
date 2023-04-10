import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div>
        <Typewriter 
        words= {["Hello, this is a coding tutorial", "I am just messing around with the code"]}
        loop= {0}
        cursor
        cursorStyle= "_"
        typeSpeed={70}
        deleteSpeed={50}
        />
    </div>
  )
}