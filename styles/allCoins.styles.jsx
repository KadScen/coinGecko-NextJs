import styled from 'styled-components';

export const AllCoinsStyled = styled.div`
    padding: 5% 15%;
`

export const TableStyled = styled.table`
    border: 1px solid black;
    padding: 40px;
    margin: 50px 0;
    width: 100%;
`
export const ThNameStyled = styled.th`
    text-align: left;
`

export const ThRegStyled = styled.th`
    text-align: right;
`

export const ThRegStyledBigScreen = styled.th`
    text-align: right;
    @media (max-width: 660px){
        display: none;
    }
`

export const TdNameStyled = styled.td`
    text-align: left;
`

export const TdRegStyled = styled.td`
    text-align: right;
`

export const TdRegStyledBigScreen = styled.td`
    text-align: right;
    @media (max-width: 660px){
        display: none;
    }
`

// table,
// td {
//     text-align: right;
// }
  
// .thName,
// .tdName {
//     text-align: left;
// }