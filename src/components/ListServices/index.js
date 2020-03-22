import React from 'react';

import {List, Button} from './styles'

import manutencao from '../../assets/manutencao-piscina.jpg'

const ListServices = () => {
  return (
    <List>
            <div className='servicos'>

                <h1>Serviços prestados</h1>

                <div className="list-servicos">
                <ul className="list">
                    <li>
                        <div className="item">
                            <div className="imagem-servico">
                                <img src={manutencao}/>
                            </div>
                            <div className="nome-servico">
                                <h3>Piscina</h3>
                                <p>
                                    Esse servico tem como obrigacao cumprir 
                                    segundo os termos de condicoes e caso o 
                                    servico seja a parte tera um valor cobrado 
                                    a mais por hora ou como desejar o contratado
                                </p>
                            </div>
                            <div className="detalhe">
                                <Button>Contratar</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="imagem-servico">
                                <img src={manutencao}/>
                            </div>
                            <div className="nome-servico">
                                <h3>Jardinagem</h3>
                                <p>
                                    Esse servico tem como obrigacao cumprir 
                                    segundo os termos de condicoes e caso o 
                                    servico seja a parte tera um valor cobrado 
                                    a mais por hora ou como desejar o contratado
                                </p>
                            </div>
                            <div className="detalhe">
                                <Button>Contratar</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="imagem-servico">
                                <img src={manutencao}/>
                            </div>
                            <div className="nome-servico">
                                <h3>Campo</h3>
                                <p>
                                    Esse servico tem como obrigacao cumprir 
                                    segundo os termos de condicoes e caso o 
                                    servico seja a parte tera um valor cobrado 
                                    a mais por hora ou como desejar o contratado
                                </p>
                            </div>
                            <div className="detalhe">
                                <Button>Contratar</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="imagem-servico">
                                <img src={manutencao}/>
                            </div>
                            <div className="nome-servico">
                                <h3>Eletricidade</h3>
                                <p>
                                    Esse servico tem como obrigacao cumprir 
                                    segundo os termos de condicoes e caso o 
                                    servico seja a parte tera um valor cobrado 
                                    a mais por hora ou como desejar o contratado
                                </p>
                            </div>
                            <div className="detalhe">
                                <Button>Contratar</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="imagem-servico">
                                <img src={manutencao}/>
                            </div>
                            <div className="nome-servico">
                                <h3>Manutencao em Geral</h3>
                                <p>
                                    Esse servico tem como obrigacao cumprir 
                                    segundo os termos de condicoes e caso o 
                                    servico seja a parte tera um valor cobrado 
                                    a mais por hora ou como desejar o contratado
                                </p>
                            </div>
                            <div className="detalhe">
                                <Button>Contratar</Button>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            
            </div>
        </List>
  );
}

export default ListServices