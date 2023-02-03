import { useState } from "react";
import { useContext } from 'react';
import { Auth } from "../../context/AuthenticationProvider";
import './styles.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function ResetPassword() {
    const { resetPassword } = useContext(Auth);
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleChange = ({ target: { value } }) => {
        setEmail(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        await resetPassword(email)
        navigate("/login")
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <h1 className="py-5">Restablecer tu contraseña</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <p className="centrar">Te enviaremos un e-mail para <br /> restablecer tu contraseña</p>
                            <div className="mb-3 user-login">
                                <input className="user-data" type="email" placeholder="email@ejemplo.com" name ="email" onChange={handleChange} />
                            </div>
                            <div className="mb-5 pb-5 justify-content-center">
                                <button type="submit" className="boton-aceptar">Enviar</button>
                                <br />
                                <Link to="/login" className="textLink">Cancelar</Link>
                            </div>                            
                        </form>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
        </>

    )
}