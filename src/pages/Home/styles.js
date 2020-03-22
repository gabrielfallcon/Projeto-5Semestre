import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    padding: 0;
    margin: 0;
`

export const Header = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0e0f0f;
    display: flex;
    justify-content: space-around;
    align-items: center;
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

    a{
        text-decoration: none;
        color: #ED145B;
    }
    
`

export const Input = styled.input`
    width: 230px;
    padding: 20px;
    border: none;
    border-bottom: 1px solid #ED145B;
    background-color: transparent;
    color: #ED145B;
    margin-bottom: 20px;
    transition: .3s ease-in-out;
    outline: none;
    text-transform: uppercase;
    text-align: center;

    :focus{
        transition: .3s ease-in-out;
        width: 300px;

    }
`

export const Img = styled.img`
    width: 30%;
`

export const Text = styled.div`
    width: 500px;
    height: 500px;
    background-color: #0e0f0f;
    box-shadow: 100px 4px 166px 50px rgba(0,0,0,0.6);
    border-radius: 10px;
    
    h2{
        color: #ED145B;
        font-size: 64px;
        font-family: 'Montserrat', sans-serif;
        text-shadow: rgba(237, 20, 91, 0.75) 4px 0px 20px;

    }
`

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
`

export const ModalLogin = styled.div`
    width: 80%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .close{
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
    }

    .parteA{
        width: 30%;
        height: 250px;
        padding: 15px;
        border: none;
        z-index: 98;
        background-color: #ED145B;
        font-family: 'Montserrat', sans-serif;

        h1{
            font-weight: bold;
            font-size: 32px;

        }
    }
    .parteB{
        width: 40%;
        height: 350px;
        border: none;
        z-index: 99;
        background-color: #0e0f0f;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
    }
`

