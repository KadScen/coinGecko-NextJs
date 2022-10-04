import { useContext, useEffect } from "react";

import { CurrencyDataContext } from "../contexts/currency-data.context.jsx";

import { FavoriteCoinsStyled, FavoriteCoinsButtonsContainerStyled, FavoriteCoinButton, FavoriteCoinButtonContent, RemoveButtonStyled } from "../styles/favoriteCoins.styles";

function FavoriteCoins() {
    const {favCoins, setFavCoins} = useContext(CurrencyDataContext);

    useEffect(() => {
        const win = window.sessionStorage;
        if (win.getItem("favCoins"))
            setFavCoins(JSON.parse(win.getItem("favCoins")));
        }, []);

    const handleRemoveFavoriteCoin = (currencyToDelete) => {
        const newCoins = favCoins.filter(
          (coinToRemove) => coinToRemove.id !== currencyToDelete.id
        );
        console.log("currency to delete is: ", newCoins);
        setFavCoins(newCoins);
      };

    if (favCoins.length > 0) {
        return (
            <FavoriteCoinsStyled>
                <h1>Favorite Coins</h1>
                <FavoriteCoinsButtonsContainerStyled>
                    {favCoins.map((favCoin) => {
                        return (
                            <FavoriteCoinButton
                            onClick={() => handleRemoveFavoriteCoin(favCoin)}
                            key={favCoin.id}
                            >
                                <FavoriteCoinButtonContent>
                                    <img
                                    width="30"
                                    height="30"
                                    alt={favCoin.name}
                                    src={favCoin.image}
                                    />
                                    <span>{favCoin.name}</span>
                                </FavoriteCoinButtonContent>
                                <RemoveButtonStyled>Remove</RemoveButtonStyled>
                            </FavoriteCoinButton>
                        )
                    })} 
                </FavoriteCoinsButtonsContainerStyled>
            </FavoriteCoinsStyled>
        )
    } else {
        return (
            <FavoriteCoinsStyled>
                <h1>Favorite Coins</h1>
                <p>No Favourite Coins Added</p>
            </FavoriteCoinsStyled>
        )
    }
}

export default FavoriteCoins;