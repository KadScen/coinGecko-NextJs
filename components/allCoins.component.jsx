import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { CurrencyDataContext } from '../contexts/currency-data.context.jsx';

import { AllCoinsStyled, TableStyled, TrStyled, TdNameStyled, TdRegStyled, TdRegStyledBigScreen, ThNameStyled, ThRegStyled, ThRegStyledBigScreen } from '../styles/allCoins.styles';

export const AllCoins = () => {
    const [listCoinsData, setListCoinsData] = useState([]);
    const {selectedCurrenciesData, setSelectedCurrenciesData, selectedCoinInfoData, setSelectedCoinInfoData, coinsToUse} = useContext(CurrencyDataContext);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad`).then(response => {
            setListCoinsData(response.data)
        })
    }, []);

    useEffect(() => {
        const filterListCoinsData = () => {
            const coinsTempContainer = [];
            Object.values(listCoinsData).forEach((currency) => {
                if (coinsToUse.indexOf(currency.name) !== -1) {
                    coinsTempContainer.push(currency);
                    setSelectedCurrenciesData(coinsTempContainer);
                }
            });
        };
        filterListCoinsData();
    }, [listCoinsData]);

    const handleSelectedCoin = (currency) => {
        setSelectedCoinInfoData(currency);
    }

  return (
    <AllCoinsStyled>
        <h2>All Coins</h2>
        <TableStyled>
            <thead>
                <tr>
                    <ThNameStyled>NAME</ThNameStyled>
                    <ThRegStyledBigScreen>TOTAL SUPPLY</ThRegStyledBigScreen>
                    <ThRegStyledBigScreen>MARKET CAP</ThRegStyledBigScreen>
                    <ThRegStyled>CURRENT PRICE</ThRegStyled>
                </tr>
            </thead>
            <tbody>
                {selectedCurrenciesData.map((currency) => {
                    return (
                        <TrStyled key={currency.id} onClick={() => handleSelectedCoin(currency)}>
                            <TdNameStyled>{currency.name}</TdNameStyled>
                            <TdRegStyledBigScreen>{currency.total_volume}</TdRegStyledBigScreen>
                            <TdRegStyledBigScreen>{currency.market_cap}</TdRegStyledBigScreen>
                            <TdRegStyled>{currency.current_price}</TdRegStyled>
                        </TrStyled>
                    )
                })}
            </tbody>
        </TableStyled>
    </AllCoinsStyled>
  )
}
