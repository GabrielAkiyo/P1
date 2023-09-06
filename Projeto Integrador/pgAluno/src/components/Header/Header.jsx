import React, { useEffect, useState } from 'react';
import Logo from '../../icons/logo.png'
import Clock from './Relogio'

export default function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">


            <div className="data">
                <img id='logo' src={Logo}></img>
                <h1>Área do aluno</h1>
                <p>{currentDate}</p>
                <Clock />
            </div>


        </div>
    )
}