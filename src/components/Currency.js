import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const currencyOpts = [
        { value: "£", display: "£ Pound" },
        { value: "$", display: "$ Dollar" },
        { value: "€", display: "€ Euro" },
        { value: "₹", display: "₹ Ruppee" }
    ];
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    useEffect(() => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    },[newCurrency]);
  return (
    <div className='alert alert-success'>
    <span>Currency:</span>
    <select style={{ borderColor: '#0f5132', marginLeft: '5px', backgroundColor: "#d1e7dd", color:"#0f5132", borderRadius: "4px"}} name="currency" id="currs" onChange={handleCurrencyChange}>
        {currencyOpts?
            currencyOpts.map((opt) => {
                return <option value={opt.value} >{opt.display}</option>
            }):
        null}
    </select>
    </div>
  );
};
export default Currency;
