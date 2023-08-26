import React , {useState} from 'react'
import './modal-dados.css'

const ModalDados = () => {
    const [showModal, setShowModal] = useState(false);
    
    const nomeUsuario = "Samuel Costa"
    const emailUsuario = "samuelcosta@gmail.com"
    const cpfUsuario = "527.721.410-04"
    const enderecoUsuario = "Rua Tchurubengos"
    const telefoneUsuario = "(11)94358-5819"
    
   
    const handleModalClick = () => {
        setShowModal(!showModal);
    };

    return( 
        <nav clasname="navbar">

        <div className='navbar-buttons'>
            <button className='dados-button' onClick={handleModalClick}>
             Meus Dados
            </button>
        </div>

        {showModal && (
            
            <div className='dados-form'>

                <div className='parte-alta'>
                    
                <label>Nome:</label>
                <textarea value={nomeUsuario} className='nome-area' readOnly />

                <label>Email:</label>
                <textarea value={emailUsuario} className='email-area' readOnly/>
                
                <label>CPF:</label>
                <textarea value={cpfUsuario} className='cpf-area' readOnly/>
               
                </div>


                <div className='parte-baixa'>

                <label>Endereço:</label>
                <textarea value={enderecoUsuario} className='endereco-area' readOnly/>
                
                <label>Telefone:</label>
                <textarea value={telefoneUsuario} className='telefone-area' readOnly/>
                
                </div>

            </div>
        )}

        </nav>
    )

}
export default ModalDados;