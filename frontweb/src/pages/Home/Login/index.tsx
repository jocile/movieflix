import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const Login = () => {

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            name="username"
            required
            pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
            title="Email inválido"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div className="login-submit">
        <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;