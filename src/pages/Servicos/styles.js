import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    background-color: #0e0f0f;  
    
`

export const FilterService = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        border: 1px solid #ED145B;
        color: #ED145B;
        font-weight: bold;
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        text-decoration: none;
    }
`

export const Button = styled.button`
    width: 250px;
    padding: 20px;
    border: 1px solid #ED145B;
    background-color: transparent;
    color: #ED145B;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: rgba(237, 20, 91, 0.75) 4px 0px 20px;
    outline: none;
    margin-bottom: 30px;
    font-family: 'Montserrat', sans-serif;

`