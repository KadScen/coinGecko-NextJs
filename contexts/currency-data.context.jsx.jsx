import { createContext, useContext, useState } from "react";

const listCoinsToUse = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Litecoin'];

export const CurrencyDataContext = createContext({
    selectedCurrenciesData:[],
    selectedCoinInfoData: [],
    favCoins: [],
    coinsToUse: listCoinsToUse
});

export const CurrencyDataProvider = ({ children }) => {
    const [selectedCurrenciesData, setSelectedCurrenciesData] = useState([]);
    const [selectedCoinInfoData, setSelectedCoinInfoData] = useState([]);
    const [favCoins, setFavCoins] = useState([]);
    const [coinsToUse] = useState(listCoinsToUse);

    const value = {
        selectedCurrenciesData, 
        setSelectedCurrenciesData, 
        selectedCoinInfoData, 
        setSelectedCoinInfoData,
        favCoins,
        setFavCoins,
        coinsToUse
    };

    return (
        <CurrencyDataContext.Provider value={value}>{children}</CurrencyDataContext.Provider>
    )
}

