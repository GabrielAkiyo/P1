import '../../App.css'
import './Dados-Infos.css'
import ModalDados from '../Modal-Dados/modal-dados'
import React, { useState } from 'react'
import ModalAtividades from '../Modal-Atividades/modal-atividades'
import HorariosInfos from '../Horarios/Horarios-Infos'

const DadosInfos = () => {
    const [showModal, setShowModal] = useState(false);
    const [ showAtividades, setShowAtividades] = useState (false);
    const [ showHorarios, setShowHorarios] = useState (false);
    const [ showTeste, setShowTeste ] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal); 

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showHorarios? setShowHorarios(!showHorarios): setShowHorarios(showHorarios);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
    };

    const handleAtividadesClick = () => {
        setShowAtividades(!showAtividades);

        showModal? setShowModal(!showModal):setShowModal(showModal);
        showHorarios? setShowHorarios(!showHorarios): setShowHorarios(showHorarios);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
    };

    const handleHorariosClick = () => {
        setShowHorarios(!showHorarios);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
    };


    return (

        <div className='navbar-alinhamento'>

            <nav clasname="navbar-main">

                <div className='background-app'>
                    <button className='dados-button' onClick={handleModalClick}>
                        Meus Dados
                    </button>
                 
                    <button className='atividades-button' onClick={handleAtividadesClick}>
                        Atividade
                    </button>
                
                    <button className='horarios-button' onClick={handleHorariosClick}>
                        Horários
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

           
        </div>
    )

}
export default DadosInfos;