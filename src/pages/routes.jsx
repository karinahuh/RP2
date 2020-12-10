import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Cadastro from "./cadastro";
import CadastroMenu from "./cadastromenu";
import DetalheEvento from "./detalheevento";
import Eventos from "./eventos";
import EventosMenu from "./eventosmenu";
import Index from "./index";
import MenuInicial from "./menuinicial";
import NossasMonitoras from "./nossasmonitoras";
import SobreNos from "./sobrenos";
import SobreNosMenu from "./sobrenosmenu";

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Index} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastro-menu" component={CadastroMenu} />
            <Route path="/detalhe-evento" exact component={DetalheEvento} />
            <Route path="/eventos" component={Eventos} />
            <Route path="/eventos-menu" exact component={EventosMenu} />
            <Route path="/menu-inicial" component={MenuInicial} />
            <Route path="/nossas-monitoras" exact component={NossasMonitoras} />
            <Route path="/sobre-nos" component={SobreNos} />
            <Route path="/sobre-nos-menu" component={SobreNosMenu} />
        </BrowserRouter>
    );
}

export default Routes;