import React, {ChangeEvent,useEffect,useState,FormEvent} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import { Button,Form,Container,Table,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillDelete, AiOutlinePlus,AiOutlineForm} from 'react-icons/ai'

import moment from  'moment';

import {useParams} from 'react-router-dom'
import api from '../services/api';
import { time } from 'console';

interface Marcacao {

    
    nome: string;
    telefone: string;
    dataConsulta: Date;

}

interface MarcacaoList {

    id: number;
    nome: string;
    telefone: string;
    dataConsulta: Date;
    
}
/*
interface MarcacaoParams {
    id: string;
}
*/

function Marcacao (){
    
    const history = useHistory();
    //const params = useParams<MarcacaoParams>();

    const [marcacoes, setMarcacoes] = useState<MarcacaoList[]>([])
    
    
    const [model,setModel] = useState<Marcacao>({

        
        nome: '',
        telefone: '',
        dataConsulta: (new Date())
        
    })

    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        
        setModel({
            ...model,
            [e.target.name]: e.target.value

        })
    } 

    useEffect(() =>{
        FindMarcacao()
    }, [])

    async function FindMarcacao (){
        
    
        const response = await api.get('marcacoes');
        setMarcacoes(response.data)
            
    }

    async function Deletar(){
        
    
        const response = await api.delete(`marcacao/delete`)

        alert("Marcação deletada!");

        
            
    }

    async function SubmitForm (e: FormEvent){
        e.preventDefault()
    
        const response = await api.post('marcacao', model);

        alert("Marco realizada!");

        history.push('/marcacao');

            
    }
    return (
        
        <Container>
            
            <Form onSubmit={SubmitForm}>
                <Form.Row>
                    <Form.Group as={Col} xs={5}>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="nome"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="telefone"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Data:</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="dataConsulta"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Hora:</Form.Label>
                        <Form.Control 
                            type="time" 
                            
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <AiOutlinePlus />
                    </Button>
                </Form.Row>
            </Form>

            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>id</th>
                    <th style={{textAlign:'center'}}>Cadastrar</th>
                    <th style={{textAlign:'center'}}>Deletar</th>
                    
                    </tr>
                </thead>
                
                {   
                   marcacoes.map(marcacoes => (
                    <tbody>
                        <tr >
                        <td>{marcacoes.nome}</td>
                        <td>{marcacoes.telefone}</td>
                        <td>{marcacoes.dataConsulta}</td>
                        <td>{marcacoes.id}</td>
                        <td style={{textAlign:'center'}}>
                            <Button variant="primary"type="button" href="/cadastro" >
                                <AiOutlineForm /> 
                            </Button>
                        </td>
                        <td style={{textAlign:'center'}}>
                            <Button variant="danger" onClick={Deletar} type="button">
                                <AiFillDelete />
                            </Button>
                        </td>
                        </tr>
                    </tbody>
                    ))
                }
                
            </Table>
            
        </Container>

        
    )

}

export default Marcacao;
