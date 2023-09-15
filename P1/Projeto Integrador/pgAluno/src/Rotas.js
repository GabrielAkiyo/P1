import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Tela-Login/TelaLogin";
import Inicial from "./components/Pagina-Inicial/pagina";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Inicial }  path="/Home" />
       </BrowserRouter>
   )
}

export default Routes;