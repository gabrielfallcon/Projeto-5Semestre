import React from 'react';
import {Link} from 'react-router-dom'

import {Container, ListService, FilterService, Button} from './styles'

import ListServices from '../../components/ListServices'

const Servicos = () => {
  return (
    <Container>
        <ListServices/>  
        <FilterService>
          <Link to='/'>X</Link>      
        </FilterService>  
    </Container>
  );
}

export default Servicos