import React, {ChangeEvent, FormEvent, useEffect,useState} from 'react';

import { Button,Form,Container,Col,Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'

import api from '../services/api';



function Cadastro(){

    

    
        
    return (
        <Container>
           
            <Form >
                <h2>Dados Pessoais:</h2>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nome" 
                        name="nome" 
                         />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                         />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Telefone" 
                            name="telefone"
                             />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="CPF" 
                            name="cpf"
                             />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Data Nascimento:</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                <Form.Label>Sexo:</Form.Label>
                    <Form.Check 
                        type="radio"
                        label="M"
                        name="sexo"
                        value="M"
                        
                    />
                    <Form.Check 
                        type="radio"
                        label="F"
                        name="sexo"
                        value="F"
                        
                    />
                </Form.Group>
                <h2>Endereço:</h2>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Cep:</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="cep" 
                            id="cep"
                            
                            maxLength={9}
                            
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Logradouro:</Form.Label>
                        <Form.Control 
                        type="text" 
                        id="logradouro"
                        name="logradouro" 
                        
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control 
                        type="text" 
                        id="bairro"
                        name="bairro" 
                        
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Localidade:</Form.Label>
                        <Form.Control 
                        type="text" 
                        id="localidade"
                        name="localidade" 
                        
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>UF:</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="uf" 
                        id="uf"
                        
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Group   >
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        type="textarea" 
                        name="complemento" 
                        
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>

        </Container>

        
    );

    

}

{
    const cep = document.querySelector("#cep")

    const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

    cep.addEventListener("blur",(e)=>{
        let search = cep.value.replace("-","")
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response =>{ response.json()
            .then( data => showData(data))
        })
        .catch(e => console.log('Deu Erro: '+ e,message))
    })
}





export default Cadastro;