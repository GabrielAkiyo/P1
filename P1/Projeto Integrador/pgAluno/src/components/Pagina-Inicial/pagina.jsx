import React from "react";
import Header from "../Header/Header";
import DadosInfos from '../Dados-Infos/Dados-Infos';
import "./pagina.css"
import '../../App.css';

function Inicial() {
    return (
        <div >

            <nav className='nav-aluno'> <Header />  </nav>

            <div className="App">



                <DadosInfos />





            </div>
        </div>
    )
}

export default Inicial;