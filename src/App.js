import './App.css';
import { ProfileContextProvider } from './contexts/ProfileContext';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <ProfileContextProvider initialProfileName='Shivanand Patil'>
        <Layout />
      </ProfileContextProvider>
    </BrowserRouter>
  );
}

export default App;
