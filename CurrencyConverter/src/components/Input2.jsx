import React, { useState } from 'react'
import "../styles/Input2.css"



function Input2(props) {
  
  return (
    <>
    <label className="label2" htmlFor="input1">{props.label || "Amount"}</label>
    <div className='Input2Box'>
      <input type="Number"  name="" value={props.amount} onChange={props.onAmountChange} id="input2"/>
    </div>
    </>
  )
}

export default Input2
