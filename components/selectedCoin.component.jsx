import React, {useContext} from 'react'
import CoinInfo from './coinInfo.component'
import { CurrencyDataContext } from '../contexts/currency-data.context.jsx'

import { SelectedCoinStyled } from '../styles/selectedCoin.styles'
import CoinForm from './coinForm.component';

export default function SelectedCoin() {
    const {selectedCoinInfoData} = useContext(CurrencyDataContext);
 
    if (selectedCoinInfoData.length <= 0) {
        return (
            <SelectedCoinStyled>
                <p>Select a coin to view more information</p>
            </SelectedCoinStyled>
        )
    } else {
        return (
            <SelectedCoinStyled>
                <CoinInfo/>
                <CoinForm/>
            </SelectedCoinStyled>
        )
    }

}
