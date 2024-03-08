import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
  currencyArray = [],

}) {
  return (
    <div>
        <div className="from">
            <div className="left">
              <label htmlFor="from">{label}</label>
              <input id="from" type="number" placeholder='0' value={amount} 
              onChange={(event)=>{onAmountChange && onAmountChange(Number(event.target.value))}}
              />
            </div>
            <div className="right">
              <label htmlFor="type">Currency Type</label>
              <select value={selectCurrency} id="type"
              onChange={(e)=>{ onCurrencyChange && onCurrencyChange(e.target.value)}}
              >
                {currencyArray.map((currency)=>(
                  <option key={currency} value={currency}> 
                  {currency} 
                  </option>
                ))}

              </select>
            </div>
          </div>
    </div>
  )
}

export default InputBox;