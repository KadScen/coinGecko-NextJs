import React, { useContext, useEffect, useState } from 'react';
import { CurrencyDataContext } from '../contexts/currency-data.context.jsx';
import { AddToFavButton, SelectedCoinInfo } from '../styles/coinInfo.styles.jsx';

export default function CoinInfo() {
    const {selectedCoinInfoData, favCoins, setFavCoins} = useContext(CurrencyDataContext);
    const [alreadyInFavMessage, setAlReadyInFavMessage] = useState('');
  
    useEffect(() => {
      const win = window.sessionStorage;
      win.setItem("favCoins", JSON.stringify(favCoins));
    }, [favCoins]);

    const handleSetFavoriteCoins = () => {
      const existingFavCoin = favCoins.find(({ name }) => name === selectedCoinInfoData.name);
      if (!existingFavCoin) {
        return setFavCoins([...favCoins, selectedCoinInfoData]);
      } else if (existingFavCoin) {
        setAlReadyInFavMessage("Coin already added to favorite");
      }
    }
    
useEffect(() => {
  setAlReadyInFavMessage('');
}, [selectedCoinInfoData]);

    return (
      <SelectedCoinInfo>
        <h3>
          <img
            alt={selectedCoinInfoData.id}
            src={selectedCoinInfoData.image}
            width="30"
            height="30"
          />
          {selectedCoinInfoData.name} ({selectedCoinInfoData.symbol})
        </h3>
        <br />
        <p>
          CURRENT PRICE: <span>{selectedCoinInfoData.current_price}</span>
        </p>
        <p>
          MARKET CAP: <span>{selectedCoinInfoData.market_cap}</span>
        </p>
        <p>
          LOW 24H: <span>{selectedCoinInfoData.low_24h}</span>
        </p>
        <p>
          HIGH 24H: <span>{selectedCoinInfoData.high_24h}</span>
        </p>
        <p>
          CIRCULATING SUPPLY: <span>{selectedCoinInfoData.circulating_supply}</span>
        </p>
        <p>
          TOTAL SUPPLY: <span>{selectedCoinInfoData.total_supply}</span>
        </p>
        <p>
          MARKET CAP RANK: <span>{selectedCoinInfoData.market_cap_rank}</span>
        </p>
        <br />
        <AddToFavButton onClick={() => handleSetFavoriteCoins()}>
          + ADD TO FAVORITES
        </AddToFavButton>
        {/* <span id="alreadyInFavMessage" className="isVisible">
          Currency already added to favorite
        </span> */}
        {alreadyInFavMessage}
      </SelectedCoinInfo>
    )
}
