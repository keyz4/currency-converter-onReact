import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usdd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  useEffect(()=>{
    setConvertedAmount(amount*currencyInfo[to])
  },[from,to,amount])


  return (
    <>
      <div className="container">
        <div className="converter">
          {/* <div className="from">
            <div className="left">
              <label htmlFor="from">FROM</label>
              <input id="from" type="number" placeholder='0' value={0} />
            </div>
            <div className="right">
              <label htmlFor="type">Currency Type</label>
              <select id="type">
                <option value={"USD"}>USD</option>

              </select>
            </div>
          </div> */}
          {/* <div className="to">
          <div className="left">
              <label htmlFor="from">TO</label>
              <input id="from" type="number" placeholder='0' value={0} />
            </div>
            <div className="right">
              <label htmlFor="type">Currency Type</label>
              <select id="type">
                <option value={"INR"}>INR</option>
              </select>
            </div>
          </div> */}
          <InputBox 
          label = 'FROM'
          amount={amount}
          currencyArray = {options}
          selectCurrency={from}
          onCurrencyChange={(newCurrency)=>{
            setFrom(newCurrency)
          }}
          onAmountChange={(amount)=>{
            setAmount(amount)
          }}
          />
          <InputBox 
          label = 'TO'
          amount={convertedAmount}
          currencyArray = {options}
          selectCurrency={to}
          onCurrencyChange={(to)=>{
            setTo(to)}}
          />
          <div onClick={convert} className="text">Convert {from.toUpperCase()} to {to.toUpperCase()}</div>
        </div>
      </div>
    </>
  )
}

export default App
