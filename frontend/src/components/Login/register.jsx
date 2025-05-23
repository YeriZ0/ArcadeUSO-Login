import "../../styles/register.css";
import { useState } from "react";

import iconGoogle from "/Images/Google.png";
import iconSeePassword from "/Images/See Password.png";
import iconBlockPassword from "/Images/Block Password.png";

const RegisterForm = ({ authType, switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVerify, setShowPasswordVerify] = useState(false);

  return (
    <>
      <div className="username-container">
        <label htmlFor="username">Nickname</label>
        <input type="text" id="username" name="username" required />
        <div className="verification-icon">
          <span className="verification-message">Verificado</span>
          <button type="button" className="btn-verify">
            Verificar
          </button>
        </div>
      </div>

      <div className="auth-container">
        {authType === 'local' ? (
          <form id="login-form" className="auth-content">

            {/*Email*/}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>

            {/*Password*/}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password" name="password" required/>
                <button 
                  type="button" 
                  className="toggle-password" 
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ?
                  <img src={iconSeePassword} /> : 
                  <img src={iconBlockPassword}/>}
                </button>
              </div>
            </div>

            {/*Verify Password*/}
            <div className="form-group">
              <label htmlFor="passwordVerify">Comprobar contraseña</label>
              <div className="password-input-container">
                <input
                  type={showPasswordVerify ? "text" : "password"}
                  id="passwordVerify" name="passwordVerify" required/>
                <button 
                  type="button" 
                  className="toggle-password" 
                  onClick={() => setShowPasswordVerify(!showPasswordVerify)}>
                  {showPasswordVerify ?
                  <img src={iconSeePassword} alt="Mostrar contraseña"/> : 
                  <img src={iconBlockPassword} alt="Ocultar contraseña"/>}
                </button>
              </div>
            </div>

            {/*Send Form*/}
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

      <div className="switchApplication">
        <button className="switch-button" onClick={switchToLogin}>
          <span>¿Ya tienes cuenta? </span>
          <span>Inicia sesión aquí</span>
        </button>
      </div>
    </>
  );
};

export default RegisterForm;