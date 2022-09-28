import styled from 'styled-components';

export const FavoriteCoinsStyled = styled.div`
    background-color: #ff962e;
    color: white;
    padding: 10% 15%;
`

export const FavoriteCoinsButtonsContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FavoriteCoinButton = styled.p`
    border: 1px solid white;
    margin-right: 20px;
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #ce7721;
        border: 1px solid #ce7721;
        height: 50px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        margin-right: 10px;
    }
`

export const RemoveButtonStyled = styled.span`
    display: none;
`

export const FavoriteCoinButtonContent = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    ${FavoriteCoinButton}:hover & {
        display: none;
    }

    ${RemoveButtonStyled}:hover & {
        display: block;
    }
`

// .favorite-coins-buttons-container {
 
//     .favorite-coin-button {
        
//     }

//     .favorite-coin-button-content {

//     }

// .favorite-coin-button:hover {

//         .removeButtonStyle {
//             display: block;
//         }

//         .favorite-coin-button-content {
//             display: none;
//         }
//     }

//     .removeButtonStyle {
//         display: none;
//     }
// }