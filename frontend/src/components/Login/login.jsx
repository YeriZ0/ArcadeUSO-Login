import { useState } from "react";
import iconGoogle from "../../../public/Images/Google.png";
import "./login.css"; 


const Login = ({onClose}) => {
    const [authType, setAuthType] = useState('local'); // Pra seleccionar el tipo de autenticación

    return (
        <div className="overlay">            
            <div className="modal-container">
                <button className="close-button" onClick={onClose}>X</button>
                <h1>Inicia Sesión en ArcadeUSO</h1>
                <p>Para poder participar debes tener un usuario.</p>
                
                {/* Selector de tipo de autenticación */}
                <div className="auth-type-selector">
                    <button className={authType === 'local' ? 'active' : ''}
                            onClick={() => setAuthType('local')}>
                        Cuenta Local
                    </button>
                    <button className={authType === 'google' ? 'active' : ''}
                            onClick={() => setAuthType('google')}>
                        Google
                    </button>
                </div>
                
                {/* Sección de verificación de nickname (común a ambos métodos) */}
                <div className="form-group">
                    <label htmlFor="username">Nickname</label>
                    <input type="text" id="username" name="username" required/>
                    <div className="verification-icon">
                        <span className="verification-message">Verificado</span>
                        <button type="button" className="btn-verify">
                            Verificar
                        </button>
                    </div>
                </div>
                
                <div className="auth-transition-container">
                    {authType === 'local' ? (
                        <form id="login-form" className="auth-content">
                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" id="email" name="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Comprobar contraseña</label>
                                <input type="password" id="passwordVerify" name="passwordVerify" required/>
                            </div>
                            <button type="submit" className="register">Registrarse</button>
                        </form>
                    ) : (
                        <div className="google-auth-section auth-content">
                            <p>Verifica tu nickname primero, luego:</p>
                            <button className="google-auth-button">
                                <img src={iconGoogle} alt="Google" />
                                Iniciar sesión con Google
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;