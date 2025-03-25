import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import UserContext from './context/UserContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <UserContext>
        <App />
        <ToastContainer /> {/* Ensure this is rendered */}
      </UserContext>
    </Provider>
  </StrictMode>
);