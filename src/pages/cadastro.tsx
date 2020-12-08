import React, {ChangeEvent, FormEvent, useEffect,useState} from 'react';

import { Button,Form,Container,Col,Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom';

import moment from  'moment';

import api from '../services/api';

interface Paciente {

    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    sexo: string;
    cep: string;
    logradouro: string;
    bairro: string
    localidade: string;
    uf: string;
    complemento: string;
    dataNascimento: Date;
    

}

function Cadastro(){

    const history = useHistory();

    const [model,setModel] = useState<Paciente>({

        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        sexo: '',
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
        complemento: '',
        dataNascimento: (new Date())
        


    })
   
    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        
        setModel({
            ...model,
            [e.target.name]: e.target.value

        })
    } 
    async function SubmitForm (e: FormEvent){
        e.preventDefault()
    
        const response = await api.post('paciente/cadastro', model);

        alert("Cadastro realizado!");

        history.push('/');

            
    }

    return (
        <Container>
           
            <Form onSubmit={SubmitForm} >
                <h2>Dados Pessoais:</h2>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control 
                        
                        type="text" 
                        placeholder="Nome" 
                        name="nome" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Telefone" 
                            name="telefone"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="CPF" 
                            name="cpf"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Data Nascimento:</Form.Label>
                        <Form.Control 
                        type="date" 
                        name="dataNascimento"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                <Form.Label>Sexo:</Form.Label>
                    <Form.Check 
                        type="radio"
                        label="M"
                        name="sexo"
                        value="M"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                    />
                    <Form.Check 
                        type="radio"
                        label="F"
                        name="sexo"
                        value="F"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control 
                        type="text" 
                        id="bairro"
                        name="bairro" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Localidade:</Form.Label>
                        <Form.Control 
                        type="text" 
                        id="localidade"
                        name="localidade" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>UF:</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="uf" 
                        id="uf"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Group   >
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        type="textarea" 
                        name="complemento" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>

        </Container>

        
    );

}

export default Cadastro;