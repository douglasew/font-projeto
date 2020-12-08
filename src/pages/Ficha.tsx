import React, {ChangeEvent,useEffect,useState,FormEvent} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import { Button,Form,Container,Table,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import {useParams} from 'react-router-dom'
import api from '../services/api';

interface Paciente {

    ficha: string;
    
}

interface PacienteParams {
    id: string;
}

function Ficha (){

    const params = useParams<PacienteParams>();

    const [model,setModel] = useState<Paciente>({

        ficha: ''

    })

    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        
        setModel({
            ...model,
            [e.target.name]: e.target.value

        })
    } 

    useEffect(() =>{
        FindFicha(params.id)
    }, [params.id])

    async function FindFicha (id: string){
     
        const response = await api.get(`paciente/${params.id}`);

        setModel({

            ficha: response.data.ficha
            
        })
         
    }
    return (
        <Container>
           
            <Form>
                <h2>Ficha:</h2>
                <Form.Group>
                    
                    <Form.Control as="textarea" rows={30}
                        type="textarea" 
                        name="ficha"
                        disabled 
                        
                        value={model.ficha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>  uptadeModel(e)}
                    />
                </Form.Group>

            </Form>


        </Container>
        
    );

    

}

export default Ficha;