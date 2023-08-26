import React , {useState} from 'react'
import './modal-atividades.css'

const ModalAtivdade = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal);
    };

    return( 
        <nav clasname="navbar">

        <div className='navbar-buttons'>
            <button className='atividade-button' onClick={handleModalClick}>
             Atividades
            </button>
        </div>

        {showModal && (
            
            <div className='atividade-form'>

                <div className='parte-alta-atividade'>
                    
                <label>Atividades Pendentes:</label>
                <textarea className='pedentes-area' readOnly />

                <label>Atividades Realizadas:</label>
                <textarea className='realizadas-area' readOnly/>
                
                <label>Anotações:</label>
                <textarea className='anotações-area' readOnly/>

                </div>

            </div>
        )}

        </nav>
    )

}
export default ModalAtivdade;