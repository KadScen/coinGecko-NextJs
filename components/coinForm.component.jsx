import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { CurrencyDataContext } from '../contexts/currency-data.context.jsx';

import { SelectedCoinFormContainerStyled, SelectedCoinFormButtonsStyled, ButtonStyled } from '../styles/coinForm.styles'

export default function CoinForm() {
    const {selectedCurrenciesData, selectedCoinInfoData} = useContext(CurrencyDataContext);
    const [submitMessage, setSubmitMessage] = useState('') 
    const [buyOrSell, setBuyOrSell] = useState('');
    const [buyBgColor, setBuyBgColor] = useState('');
    const [sellBgColor, setSellBgColor] = useState('');
    const [buyTextColor, setBuyTextColor] = useState('');
    const [sellTextColor, setSellTextColor] = useState('');
    const [currencyToBuyOrSell, setCurrencyToBuyOrSell] = useState('');
    const [amountToBuyOrSell, setAmountToBuyOrSell] = useState('');
    const [currenciesValueComparaison, setCurrenciesValueComparaison] = useState('')
    const [currencyToBuyOrSellData, setCurrencyToBuyOrSellData] = useState('');
    const [readUseEffectMessage, setReadUseEffectMessage] = useState(0);

    const handleBuyOrSell = (isBuyOrSell) => {
        if(isBuyOrSell === "buy") {
            setSellBgColor(null)
            setSellTextColor(null)
            setBuyBgColor("#ff962e")
            setBuyTextColor("white")
        } else if(isBuyOrSell === "sell") {
            setBuyBgColor(null)
            setBuyTextColor(null)
            setSellBgColor("#ff962e")
            setSellTextColor("white")
        }
        setBuyOrSell(isBuyOrSell);
    }

    useEffect(() => {
        const findInCurrencies = () => {
          selectedCurrenciesData.map((currency) => {
            if ( currency.name === currencyToBuyOrSell ) {
              setCurrencyToBuyOrSellData(currency);
            }
          });
        };
        findInCurrencies();
      }, [currencyToBuyOrSell]);

    useEffect(() => {
        const currenciesDiffPrice = async () => {
          axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoinInfoData.id}&vs_currencies=${currencyToBuyOrSellData.symbol}`).then(response => {
            setCurrenciesValueComparaison(response.data[selectedCoinInfoData.id][currencyToBuyOrSellData.symbol])
          })
        };
        currenciesDiffPrice();
      }, [selectedCoinInfoData, currencyToBuyOrSellData]);

      const handleSubmit = (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const currency = e.target.currency.value;
        setCurrencyToBuyOrSell(currency);
        setAmountToBuyOrSell(amount);
        setReadUseEffectMessage(readUseEffectMessage + 1);
        setSubmitMessage(`Please Select BUY or SELL Above`);
        }

      useEffect(() => {
        if (amountToBuyOrSell, currencyToBuyOrSellData, buyOrSell, currenciesValueComparaison, selectedCoinInfoData.name)
        console.log(amountToBuyOrSell, currencyToBuyOrSell, buyOrSell, selectedCoinInfoData.name)
        if (buyOrSell === 'buy') {
            setSubmitMessage(`You Have Purchased ${amountToBuyOrSell} ${selectedCoinInfoData.name} For ${" "}
            ${currenciesValueComparaison * amountToBuyOrSell} ${currencyToBuyOrSellData.symbol}`)
        } else if (buyOrSell === 'sell') {
            setSubmitMessage(`You Have Sold ${amountToBuyOrSell} ${selectedCoinInfoData.name} For ${" "}
            ${currenciesValueComparaison * amountToBuyOrSell} ${currencyToBuyOrSellData.symbol}`)
        }
      }, [readUseEffectMessage, currenciesValueComparaison]);

      return (
        <SelectedCoinFormContainerStyled>
            <SelectedCoinFormButtonsStyled>
                <ButtonStyled bgColor={buyBgColor} textColor={buyTextColor} onClick={() => handleBuyOrSell("buy")}>
                    BUY
                </ButtonStyled>
                <ButtonStyled bgColor={sellBgColor} textColor={sellTextColor} onClick={() => handleBuyOrSell("sell")}>
                    SELL
                </ButtonStyled>
            </SelectedCoinFormButtonsStyled>
            <form onSubmit={handleSubmit}>
                <select name="currency">
                    {selectedCurrenciesData.map((coin) => {
                        return <option key={coin.id}>{coin.name}</option>
                    })}
                </select>
                <input 
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    step=".000001"
                    required 
                />
                <input type="submit" value="SUBMIT"></input>
            </form>
            {submitMessage}
    </SelectedCoinFormContainerStyled>
  )
}
