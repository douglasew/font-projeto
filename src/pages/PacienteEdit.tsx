import React, {ChangeEvent,useEffect,useState,FormEvent} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import { Button,Form,Container,Table,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import {useParams} from 'react-router-dom'
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
    ficha: string;
    
    
}

interface PacienteParams {
    id: string;
}

function PacienteEdit (){

    const history = useHistory();
    const params = useParams<PacienteParams>();
    

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
        ficha: ''

    })

    useEffect(() =>{
        findPaciente(params.id)
    }, [params.id])
    
    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        
        setModel({
            ...model,
            [e.target.name]: e.target.value

        })
    } 

    async function Deletar(){
        
    
        const response = await api.delete(`paciente/${params.id}/delete`)

        alert("Cadastro deletado!");

        history.push('/');
            
    }

    async function SubmitForm (e: FormEvent){
        e.preventDefault()

            
        const response = await api.put(`paciente/${params.id}/editar`, model);

        alert("Cadastro editado!");

         
    }

    async function findPaciente (id: string){
        
        const response = await api.get(`paciente/${params.id}`);
        setModel({

            nome: response.data.nome,
            telefone: response.data.telefone,
            email: response.data.email,
            cpf: response.data.cpf,
            sexo: response.data.sexo,
            cep: response.data.cep,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf,
            complemento: response.data.complemento,
            ficha: response.data.ficha
            
        })
            
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
                        value={model.nome}
                        name="nome" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        value={model.email}
                        name="email" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Telefone" 
                            value={model.telefone}
                            name="telefone"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="CPF" 
                            value={model.cpf}
                            name="cpf"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)} />
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
                        value={model.sexo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                    />
                    <Form.Check 
                        type="radio"
                        label="F"
                        name="sexo"
                        value={model.sexo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                    />
                </Form.Group>
                <h2>Endereço:</h2>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Cep:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={model.cep}
                            name="cep" 
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Logradouro:</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="logradouro" 
                        value={model.logradouro}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="bairro" 
                        value={model.bairro}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Localidade:</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="localidade" 
                        value={model.localidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>UF:</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="uf" 
                        value={model.uf}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Group   >
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        type="textarea" 
                        name="complemento" 
                        value={model.complemento}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                        />
                </Form.Group>
                <Form.Group   >
                    <Form.Label>Ficha:</Form.Label>
                    <Form.Control as="textarea" rows={30}
                        type="textarea" 
                        name="ficha" 
                        value={model.ficha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                        />
                </Form.Group>

                <Button variant="success" type="submit" >
                    Salvar
                
                </Button>
                <Button variant="danger" type="button" onClick={Deletar} >
                    Deletar

                </Button>
            </Form>

        </Container>
    )

}

export default PacienteEdit;
