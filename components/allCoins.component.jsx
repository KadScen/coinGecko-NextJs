import React, { useEffect, useState } from 'react';
import { AllCoinsStyled, TableStyled, TdNameStyled, TdRegStyled, TdRegStyledBigScreen, ThNameStyled, ThRegStyled, ThRegStyledBigScreen } from '../styles/allCoins.styles';

export const AllCoins = () => {
    const [listCoinsData, setListCoinsData] = useState([]);
    const [listCoinsToUseWithData, setListCoinsToUseWithData] = useState([]);
    const listCoinsToUse = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Litecoin'];
 
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
                    setListCoinsToUseWithData(coinsTempContainer);
                }
            });
        };
        filterListCoinsData();
    }, [listCoinsData]);
    
    
    // const tableCreation = () => {
        
    //     listCoinsToUseWithData.map((currency) => {
    //         return (
    //             <td>{currency.name}</td>
    //         )
    //     })
       
    // }

    // useEffect(() => {
    //     tableCreation(listCoinsToUseWithData);
    // }, [listCoinsToUseWithData])

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
                {listCoinsToUseWithData.map((currency) => {
                    return (
                        <tr key={currency.id}>
                            <TdNameStyled>{currency.name}</TdNameStyled>
                            <TdRegStyledBigScreen>{currency.total_volume}</TdRegStyledBigScreen>
                            <TdRegStyledBigScreen>{currency.market_cap}</TdRegStyledBigScreen>
                            <TdRegStyled>{currency.current_price}</TdRegStyled>
                        </tr>
                    )
                })}
            </tbody>
        </TableStyled>
    </AllCoinsStyled>
  )
}
