import useCurrency from "./hooks/useCurrency.js"
import { useEffect, useState } from "react"
import "./App.css"
import Input1 from "./components/Input1"
import Input2 from "./components/Input2"


function App() {
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)
  const [amount , setAmount] = useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)
  const [oneCurrencyFrom , setOneCurrencyFrom] = useState(0);
  const [oneCurrencyTo , setOneCurrencyTo] = useState(0);

  
  const onAmountChange = (e)=>{
    if(Number(e.target.value)>=0){
      setAmount(Number(e.target.value))
    }
  }
  
  const onFromChange = (e)=>{   
    setFrom(e.target.value)
  }
  const onToChange = (e)=>{
    setTo(e.target.value)
    console.log(to)
  }
  
  
  const ConvertCurrency = (amnt)=>{
    const dataFrom = useCurrency(from)
    const dataTo = useCurrency(to)
    useEffect(()=>{
      setOneCurrencyFrom(1*dataFrom[to])
      setOneCurrencyTo(1*dataTo[from])
      setConvertedAmount(amnt*dataFrom[to])
    },[amnt , onAmountChange])  
  } 
  ConvertCurrency(amount)
  
  return (
    <>
     <div className="container">
      <h2>Currency Converter</h2>
        <div className="main">
          <h2>Exchange Rate Today</h2>
          <div className="line"> 
          </div>
          <div className="boxes">
            <Input2 label="Amount" amount = {amount} onAmountChange={onAmountChange} />
            <Input1 label="From"currencyOptions = {options} currencyValue = {from} handleOnChange={onFromChange} to={to} from={from}/>
            <Input1 label="To" currencyOptions={options} to={to} from={from} currencyValue = {to} handleOnChange={onToChange}/>
          </div>
          <div className="result">
            {
              to!=from?
              <h3><span>Converted Amount: </span><b> {convertedAmount!=0?convertedAmount.toFixed(3):convertedAmount.toFixed(0)}</b></h3>:
              <h3><span>Converted Amount: </span><b> {convertedAmount!=0?convertedAmount.toFixed(2):convertedAmount.toFixed(0)}</b></h3>
            }
          </div>
          
          {
          to!=from?
          <h3>1 {to.toUpperCase()} = {oneCurrencyFrom.toFixed(4)} {from.toUpperCase()} | 1 {from.toUpperCase()} = {oneCurrencyTo.toFixed(5)} {to.toUpperCase()} </h3>:
          ""
          } 
        </div>
     </div>
    </>
  )
}

export default App
