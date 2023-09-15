import '../../App.css'
import '../Modal-Dados/modal-dados.css'
import './Dados-Infos.css'
import ModalDados from '../Modal-Dados/modal-dados'
import React, { useState } from 'react'
import ModalAtividades from '../Modal-Atividades/modal-atividades'
import HorariosInfos from '../Horarios/Horarios-Infos'
import NotasInfos from '../Notas/Notas'
import MaterialInfos from '../Material-Infos/Material'

import Livro from "../../icons/livro.svg"
import Lapis from "../../icons/lapis.svg"
import Relogio from "../../icons/relogio.svg"
import Licao from "../../icons/licao.svg"
import Usuario from "../../icons/usu.svg"

const DadosInfos = () => {
    const [showModal, setShowModal] = useState(false);
    const [ showAtividades, setShowAtividades] = useState (false);
    const [ showHorarios, setShowHorarios] = useState (false);
    const [ showTeste, setShowTeste ] = useState(false);
    const [ showNotas, setShowNotas ] = useState(false);
    const [ showMaterial, setShowMaterial ] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal); 

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showHorarios? setShowHorarios(!showHorarios): setShowHorarios(showHorarios);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNotas? setShowNotas(!showNotas):setShowNotas(showNotas);
        showMaterial? setShowMaterial(!showMaterial):setShowMaterial(showMaterial);
    };

    const handleAtividadesClick = () => {
        setShowAtividades(!showAtividades);

        showModal? setShowModal(!showModal):setShowModal(showModal);
        showHorarios? setShowHorarios(!showHorarios): setShowHorarios(showHorarios);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNotas? setShowNotas(!showNotas):setShowNotas(showNotas);
        showMaterial? setShowMaterial(!showMaterial):setShowMaterial(showMaterial);
    };

    const handleHorariosClick = () => {
        setShowHorarios(!showHorarios);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNotas? setShowNotas(!showNotas):setShowNotas(showNotas);
        showMaterial? setShowMaterial(!showMaterial):setShowMaterial(showMaterial);
    };
    
    const handleNotasClick = () => {
        setShowNotas(!showNotas);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showHorarios? setShowHorarios(!showHorarios): setShowHorarios(showHorarios);
        showMaterial? setShowMaterial(!showMaterial):setShowMaterial(showMaterial);
    };
    
    const handleMaterialClick = () => {
        setShowMaterial(!showMaterial);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showHorarios? setShowHorarios(!showHorarios): setShowHorarios(showHorarios);
        showNotas? setShowNotas(!showNotas):setShowNotas(showNotas);
    };


    return (

        <div className='navbar-alinhamento'>

            <nav clasname="navbar-main">

                <div className='background-app'>
                    <button className='dados-button button-nav' onClick={handleModalClick}>
                        <img src={Usuario}/> Meus Dados
                    </button>
                 
                    <button className='atividades-button button-nav' onClick={handleAtividadesClick}>
                        <img src={Licao}/> Atividade
                    </button>
                
                    <button className='horarios-button button-nav' onClick={handleHorariosClick}>
                        <img src={Relogio}/> Horários
                    </button>                         
                    
                    <button className='notas-button button-nav' onClick={handleNotasClick}>
                        <img src={Lapis}/> Notas
                    </button>                         
                     
                    <button className='apoio-button button-nav' onClick={handleMaterialClick}>
                        <img src={Livro}/> Material de Apoio
                    </button>                         
                     
                </div>

            </nav>

            {showModal && (

                <div className='infos'>
                    <ModalDados />
                </div>
            )}

            {showAtividades && (

                <div className='infos'>
                    <ModalAtividades />
                </div>
            )}

            {showHorarios && (

                <div className='infos'>
                    <HorariosInfos />
                </div>
            )}
            
            {showNotas && (

                <div className='infos'>
                    <NotasInfos />
                </div>
            )}
            
            {showMaterial && (

                <div className='infos'>
                    <MaterialInfos />
                </div>
            )}

           
        </div>
    )

}
export default DadosInfos;