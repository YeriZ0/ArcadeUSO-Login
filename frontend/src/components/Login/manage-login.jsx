import { useState } from "react";

import "../../styles/manege-login.css";
import Modal from "../modal.jsx";
import RegisterForm from "./register.jsx";
import LoginForm from "./login.jsx";
import AuthTypeSelector from "./auth-type-selector.jsx";

const ManegeLogin = ({ onClose }) => {
  const [authType, setAuthType] = useState('local');
  const [application, setApplication] = useState('login');

  const title = (application === 'register' 
    ? 'Registrate en ArcadeUSO' 
    : 'Inicia sesión en ArcadeUSO');
  
  const description = (application === 'register'
    ? 'Para poder participar debes tener un usuario.'
    : 'Ingresa a tu cuenta para jugar y obtener premios!');

  return (
    <>
      <Modal title={title} onClose={onClose}>
      <p>{description}</p>
      
      {application === 'register' && (
        <AuthTypeSelector 
          authType={authType} 
          setAuthType={setAuthType} 
        />
      )}
      
      {application === 'register' ? (
        <RegisterForm 
          authType={authType}
          setAuthType={setAuthType}
          switchToLogin={() => setApplication('login')}
        />
      ) : (
        <LoginForm 
          switchToRegister={() => setApplication('register')}
        />
      )}
    </Modal>
    </>
  );
};

export default ManegeLogin;