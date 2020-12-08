import React, {useEffect,useState} from 'react';

import {Link} from 'react-router-dom';
import { Button,Form,Container,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaUserCog,FaUserEdit} from 'react-icons/fa'
import {AiFillInfoCircle} from 'react-icons/ai'


import api from '../services/api';

interface Pacienete {
    id: number;
    nome: string;
    telefone: string;
}

function Pacientes(){
    const [pacientes, setPacientes] = useState<Pacienete[]>([]);

    useEffect(() =>{
        api.get('pacientes').then(response => {
            setPacientes(response.data);
        })
    }, [])
    return (
        <Container>
            
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th style={{textAlign:'center'}}>Detalhes</th>
                    <th style={{textAlign:'center'}}>Editar</th>
                    <th style={{textAlign:'center'}}>Ficha</th>
                    </tr>
                </thead>
                {pacientes.map(paciente =>{
                    return (
                    <tbody>
                        <tr key={paciente.id} >
                        <td>{paciente.id}</td>
                        <td>{paciente.nome}</td>
                        <td>{paciente.telefone}</td>
                        <td style={{textAlign:'center'}}>
                        <Button variant="primary">
                            <Link to={`/paciente/${paciente.id}`}>
                                <FaUserCog color="black" />
                            </Link>
                        </Button>
                        </td>
                        <td style={{textAlign:'center'}}>
                            <Button variant="warning">
                                <Link to={`/paciente/${paciente.id}/editar`}>
                                    <FaUserEdit color="black" />
                                </Link>
                            </Button>
                        </td>
                        <td style={{textAlign:'center'}}>
                            <Button variant="info">
                                <Link to={`/ficha/${paciente.id}`}>
                                    <AiFillInfoCircle color="black" />
                                </Link>
                            </Button>
                        </td>
                        </tr>
                    </tbody>
                    )
                })}
            </Table>

        </Container>
    );
}

export default Pacientes;