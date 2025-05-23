import "../../styles/login.css"
import { useState } from "react";

import iconGoogle from "/Images/Google.png";
import iconSeePassword from "/Images/See Password.png";
import iconBlockPassword from "/Images/Block Password.png";

const Login = ({ switchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="auth-container">
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
                  {!showPassword ?
                  <img src={iconSeePassword} alt="Mostrar contraseña" /> : 
                  <img src={iconBlockPassword} alt="Ocultar contraseña"/>}
                </button>
              </div>
            </div>
            <button type="submit" className="login">Iniciar Sesión</button>
          </form>
      </div>

      <div className="google-auth-section auth-content">
        <p>O también puedes:</p>
        <button className="google-auth-button">
          <img src={iconGoogle} alt="Google" />
          Iniciar sesión con Google
        </button>
      </div>

      <div className="switchApplication">
        <button className="switch-button" onClick={switchToRegister}>
          <span>¿No tienes cuenta? </span> 
          <span>Regístrate aquí</span>
        </button>
      </div>
    </>
  );
};

export default Login;