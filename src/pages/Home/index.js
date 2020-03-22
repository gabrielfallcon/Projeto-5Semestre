import React, {useState} from 'react'
import { Link }  from 'react-router-dom'

import {Container, Content, Header, Nav, Button, Text, Img, ModalLogin, Input} from './styles'
import img from '../../assets/quebrado.png'

const Home = () => {
    const [login, setLogin] = useState(false)
    const [modalOn, setModalOn] = useState(false) 
    
    const handleModal = () =>{
        
        if(modalOn == false){
            setModalOn(true)
        }else{
            setModalOn(false)
        }
    }

    return(
        <Container>
            <Content style={modalOn == false ? {display: 'none'} : {display: 'flex'}}>
                <ModalLogin>
                    <div onClick={() => handleModal()} className="close">X</div>
                    <div className='parteA'>
                        <h1>Login</h1>
                        <p>Faça o login, nos conte sobre seu problema e resolveremos o mais rápido possivel</p>
                        <p>Não tem login? Cadastre-se!</p>
                        <Button style={{border:'1px solid #0e0f0f', color:'#0e0f0f'}}>Cadastre-se</Button>
                    </div>
                    <div className='parteB'>
                        <Input type='text' placeholder="Digite seu email" />
                        <Input type='password' placeholder="Digite sua senha"/>
                        <Button>Entrar</Button>
                    </div>
                </ModalLogin>
            </Content>
            <Header>
                <Text>
                    <h2>A Casa caiu? O Piso quebrou? a Reformar chegou!</h2>
                    <Button><Link to="/services">Serviços</Link></Button>
                </Text>
                <Button onClick={() => handleModal()}>Quebrou!</Button>
            </Header>
        </Container>
    )
}

export default Home