import './assets/styles/custom.scss';
import './App.css';

import AppRoutes from 'AppRoutes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';


const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
