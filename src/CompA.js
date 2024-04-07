import React from 'react'
import ComB from './ComB'

const CompA = (dolly) => {
    console.log(dolly,"dolly chai wala");
  return (
    <div>
        <ComB  b={dolly.a}/>
    </div>
  )
}

export default CompA