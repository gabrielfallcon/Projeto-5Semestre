import styled from 'styled-components'

export const List = styled.div`

    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .servicos{
        width: 100%;

        h1{
            height :20%;
            font-family: 'Monoton', cursive;
            color: #ED145B;
            font-size: 50px;
        }

        .list-servicos{
            width: 100%;
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            ul.list{
                list-style: none;
                width: 90%;
                height: 72vh;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 20px;
                margin-bottom: 30px;
                
                overflow-x: hidden;
                overflow-y: scroll;
                padding: 3px 50px 0px 0px;


                li{
                    min-width: 12%;
                    width: 350px;
                    box-shadow: 100px 4px 166px 50px rgba(0,0,0,0.6);

                    :hover{
                        .detalhe{
                            display: flex;
                            cursor: pointer;
                            transition: 1s ease-in-out;
                        }
                    }

                    .item{
                        border: 1px solid black; 
                        min-height: 340px;
                        padding: 10px;
                        text-align: center;
                        margin: 10px;
                        line-height: 24px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        transition: 0.5s;
                        position: relative;

                        .imagem-servico{
                            width: 100%;

                            img{
                                width: 100%;
                            }
                        }
                        .nome-servico{
                            h3{
                                color: #ED145B;
                                font-size: 24px;
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                            }
                            p{
                                font-size: 14px;
                                font-family: 'Montserrat', sans-serif;
                                color: #ED145B;
                            }
                        }
                    }
                    .detalhe{
                        width: 100%;
                        height: 100%;
                        display: none;
                        align-items: center;
                        justify-content: center;
                        transition: .4s ease-in-out;
                        z-index: 11;
                        position: absolute;
                        background-color: rgba(0,0,0,0.8)
                        
                    }
                }
            }
        }
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