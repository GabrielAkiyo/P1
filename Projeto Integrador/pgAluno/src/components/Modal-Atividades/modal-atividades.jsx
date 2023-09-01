import React, { useState } from 'react'
import './modal-atividades.css'

const ModalAtividades = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (

        <div className='atividades-browser'>     
            <p>Unidade Curricular: </p>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Unidades Curriculares</option>
                <option value="opcao1">UC1</option>
                <option value="opcao2">UC2</option>
                <option value="opcao3">UC3</option>
                <option value="opcao4">UC4</option>
            </select>
            {/* <p>Opção selecionada: {selectedOption}</p> */}
            <p>Atividades Realizadas: </p>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Atividades Realizadas</option>
                <option value="opcao1">Atividade 1</option>
                <option value="opcao2">Atividade 2</option>
                <option value="opcao3">Atividade 3</option>
                <option value="opcao4">Atividade 4</option>
            </select>
        </div>

    )

}
export default ModalAtividades;
