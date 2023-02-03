import { useState } from "react"
import { useContext } from 'react'
import { Auth } from "../../context/AuthenticationProvider"
import './styles.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export function Register() {

    const { registerUser } = useContext(Auth);
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [user, setUser] = useState({
        email: "",
        email2: "",
        password: "",
        password2: ""
    })
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const getErrorMessage = (errorCode, originalMessage) => {
        if (errorCode === "auth/email-already-in-use") {
            return "Este email ya está en uso, ingrese otro."
        } else if (errorCode === "auth/invalid-email") {
            return "Este email es inválido, ingrese otro."
        }
        else {
            return originalMessage
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if ((user.email === user.email2) && (user.password === user.password2) && (user.password.trim().length > 5)) {
            try {
                await registerUser(user.email, user.password)
                navigate("/")
                
            } catch (error) {
                setError(getErrorMessage(error.code, error.message))
            }
        } else {
            if (user.password !== user.password2) {
                setError("Las contraseñas deben ser iguales")
            } else if (user.password.trim().length < 6) {
                setError("Contraseña inválida (menor a 6 caracteres)")
            }
        }

    }
    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <h1 className="py-5">Crear cuenta</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-12 d-flex justify-content-center">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <p>{error}</p>
                            <div className="mb-3 user-data">
                                <input className="form-control" type="email" placeholder="email@ejemplo.com" name="email" onChange={handleChange} />
                            </div>
                            <div className="mb-3 user-data">
                                <input className="form-control" type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
                            </div>
                            <div className="mb-3 user-data">
                                <input className="form-control" type="password" placeholder="re ingrese la contraseña" name="password2" onChange={handleChange} />
                            </div>
                            <div className="mb-5 pb-5">
                                <button className="boton-aceptar">Crear</button>
                                <br />
                                <Link to="/login" className="textLink">Cancelar</Link>
                                <br />
                                <br />
                                <p>Te enviaremos un correo con un <br /> link para validar tu email.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>


    )
}