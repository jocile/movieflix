import { useContext, useState } from 'react';

const Login = () => {

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="username"
            required
            pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
            title="Email inválido"
          />
          <div>
            Campo obrigatório
          </div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <div>
            Campo obrigatório
          </div>
        </div>
        <div>
          <h1>Fazer login</h1>
        </div>
      </form>
    </div>
  );
};

export default Login;