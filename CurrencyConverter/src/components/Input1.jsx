import React, { useCallback, useState } from 'react'
import "../styles/Input1.css"



function Input1(props) {

  return (
    <>
    <label className="label1"htmlFor="input1">{props.label || "Amount"}</label>
    <div className='Input1Box'>
      <select name="" id="" value={props.currencyValue} onChange={props.handleOnChange}>
       {
          props.currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))
       }
      </select>
    </div>
    </>
  )
}

export default Input1
