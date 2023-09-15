import {React, useState} from "react";
import './TelaLogin.css'
import { Link } from 'react-router-dom';


const Login = () => {

    const loginUser = "login@login"
    const loginSenha = "login123"

    const [inputUser, setInputUser] = useState(''); 
    const [inputSenha, setInputSenha] = useState('');

    var { path } = { path: { pathname: "/" } };

    const verificarLogin = () => {
        if (loginUser === inputUser && loginSenha === inputSenha) {
            alert("Login valido")
            path.pathname = "/Home"
        } else {
            alert("Login invalido")
        }
    };


    return (

        <div className="background-login">

            <div className="container">

                <p>Login</p>

                <br />

                <label> Email </label>
                <input placeholder="Email" type="text" value={inputUser} onChange={e => setInputUser(e.target.value)}/>

                <br /><br />

                <label> Senha </label>
                <input placeholder="Senha" type="password" value={inputSenha} onChange={e => setInputSenha(e.target.value)}/>

                <br />

                <a >
                    <Link to={path}>
                        <button className="btt-login" onClick={verificarLogin} > Login </button>
                    </Link>
                </a>

            </div>


        </div>
         
         
    )



}

export default Login;