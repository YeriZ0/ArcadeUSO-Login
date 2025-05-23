import "../../styles/auth-type-selector.css";

const AuthTypeSelector = ({ authType, setAuthType }) => {
  return (
    <div className="auth-type-selector">
      <button
        className={authType === 'local' ? 'active' : ''}
        onClick={() => setAuthType('local')}
      >
        Cuenta Local
      </button>
      <button
        className={authType === 'google' ? 'active' : ''}
        onClick={() => setAuthType('google')}
      >
        Google
      </button>
    </div>
  );
};

export default AuthTypeSelector;