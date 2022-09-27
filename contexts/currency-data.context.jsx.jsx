import { createContext, useState } from "react";

export const CurrencyDataContext = createContext({
    selectedCurrenciesData:[],
    selectedCoinInfoData: [],
});

export const CurrencyDataProvider = ({ children }) => {
    const [selectedCurrenciesData, setSelectedCurrenciesData] = useState([]);
    const [selectedCoinInfoData, setSelectedCoinInfoData] = useState([]);

    const value ={selectedCurrenciesData, setSelectedCurrenciesData, selectedCoinInfoData, setSelectedCoinInfoData};

    return (
        <CurrencyDataContext.Provider value={value}>{children}</CurrencyDataContext.Provider>
    )
}

