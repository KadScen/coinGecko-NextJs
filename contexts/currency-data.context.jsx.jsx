import { createContext, useContext, useState } from "react";

export const CurrencyDataContext = createContext({
    selectedCurrenciesData:[],
    selectedCoinInfoData: [],
    favCoins: [],
});

export const CurrencyDataProvider = ({ children }) => {
    const [selectedCurrenciesData, setSelectedCurrenciesData] = useState([]);
    const [selectedCoinInfoData, setSelectedCoinInfoData] = useState([]);
    const [favCoins, setFavCoins] = useState([]);

    const value = {
        selectedCurrenciesData, 
        setSelectedCurrenciesData, 
        selectedCoinInfoData, 
        setSelectedCoinInfoData,
        favCoins,
        setFavCoins
    };

    return (
        <CurrencyDataContext.Provider value={value}>{children}</CurrencyDataContext.Provider>
    )
}

