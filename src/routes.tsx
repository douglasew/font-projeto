import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Pacientes from './pages/pacienetes';
import Paciente from './pages/Paciente';
import PacienteEdit from './pages/PacienteEdit';
import Marcacao from './pages/Marcacao';
import Ficha from './pages/Ficha';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pacientes} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/paciente/:id" exact component={Paciente} />
                <Route path="/paciente/:id/editar" component={PacienteEdit} />
                <Route path="/marcacao" component={Marcacao} />
                <Route path="/ficha/:id" component={Ficha} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;