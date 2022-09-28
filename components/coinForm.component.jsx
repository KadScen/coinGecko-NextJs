import { useContext } from 'react';

import { CurrencyDataContext } from '../contexts/currency-data.context.jsx';

import { SelectedCoinFormContainerStyled,SelectedCoinFormButtonsStyled } from '../styles/selectedCoinForm.styles'

export default function CoinForm() {
    const {selectedCurrenciesData} = useContext(CurrencyDataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submited")
    }

    return (
        <SelectedCoinFormContainerStyled>
            <SelectedCoinFormButtonsStyled>
                <button>
                    BUY
                </button>
                <button>
                    SELL
                </button>
            </SelectedCoinFormButtonsStyled>
            <form onSubmit={handleSubmit}>
                <select>
                    {selectedCurrenciesData.map((coin) => {
                        return <option key={coin.id}>{coin.name}</option>
                    })}
                </select>
                <input type="number" />
                <input type="submit" value="SUBMIT"></input>
            </form>
    </SelectedCoinFormContainerStyled>
  )
}
