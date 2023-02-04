import { useEffect, useState } from "react"
import { useContext } from 'react'
import { Auth } from "../../context/AuthenticationProvider"
import './styles.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
    const { login, logedUser, logOut } = useContext(Auth);
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const getErrorMessage = (errorCode, originalMessage) => {
        if (errorCode === "auth/wrong-password") {
            return "Contraseña inválida"
        } else if (errorCode === "auth/user-not-found") {
            return "Este email no está registrado."
        }
        else {
            return originalMessage
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await login(user.email, user.password)
        } catch (error) {
            setError(getErrorMessage(error.code, error.message))
        }
    }

    useEffect(() => {
        if (logedUser){
            if (!logedUser.emailVerified){
                logOut()
                setError("Su email no está verificado")
            } else {
                navigate("/")
            }
        }
    }, [logedUser, navigate, logOut])

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <h1 className="py-5">Inicio de sesión</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <p>{error}</p>
                            <div className="mb-3 user-login">
                                <input className="login-user-data" type="email" placeholder="email@ejemplo.com" name="email" onChange={handleChange} />
                            </div>
                            <div className="mb-3 user-login">
                                <input className="login-user-data" type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
                            </div>
                            <div className="mb-5 pb-5 justify-content-center">
                                <Link to="/resetPasword" className="textLink">¿Olvidaste tu contraseña?</Link>
                                <br />
                                <button type="submit" className="boton-iniciar">Iniciar seción</button>
                                <br />                                
                                <Link to="/register" className="textLink">Crear cuenta</Link>
                            </div>
                        </form>
                        <br /> <br /> <br /> 
                    </div>
                </div>
            </div>

        </>
    )
}