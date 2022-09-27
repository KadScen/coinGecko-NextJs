import React from 'react'
import { SelectedCoinFormContainerStyled,SelectedCoinFormButtonsStyled } from '../styles/selectedCoinForm.styles'

export default function CoinForm() {

    const handleSubmit = () => {

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
            <form>
                <select>
                    <option>currency1</option>
                    <option>currency2</option>
                </select>
                <input type="number" />
                <input type="submit" value="SUBMIT"></input>
            </form>
    </SelectedCoinFormContainerStyled>
  )
}
