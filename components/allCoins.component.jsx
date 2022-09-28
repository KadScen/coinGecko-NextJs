import React, { useContext, useEffect, useState } from 'react';
import { AllCoinsStyled, TableStyled, TrStyled, TdNameStyled, TdRegStyled, TdRegStyledBigScreen, ThNameStyled, ThRegStyled, ThRegStyledBigScreen } from '../styles/allCoins.styles';
import { CurrencyDataContext } from '../contexts/currency-data.context.jsx';

export const AllCoins = () => {
    const [listCoinsData, setListCoinsData] = useState([]);
    const listCoinsToUse = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Litecoin'];
    const {selectedCurrenciesData, setSelectedCurrenciesData, selectedCoinInfoData, setSelectedCoinInfoData} = useContext(CurrencyDataContext);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then((actualData) => setListCoinsData(actualData))
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    useEffect(() => {
        const filterListCoinsData = () => {
            const coinsTempContainer = [];
            Object.values(listCoinsData).forEach((currency) => {
                if (listCoinsToUse.indexOf(currency.name) !== -1) {
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
