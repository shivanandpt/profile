import './App.css';
import { Container } from 'react-bootstrap';
import data from './data.json';
import Header from './components/Header';
import TilesSection from './components/TilesSection';
import Technologies from './components/Technologies';
import { ProfileContextProvider } from './contexts/ProfileContext';

function App() {
  return (
    <ProfileContextProvider initialProfileName='Shivanand Patil'>
      <Container className='container-fluid'>
        <Header></Header>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <div className='row'>
              <TilesSection sectionName='Blogs' data={data}></TilesSection>
              <TilesSection sectionName='Projects' data={data}></TilesSection>
            </div>
          </div>
          <div className='col-12 col-lg-4'>

            <Technologies></Technologies>
          </div>
        </div>

      </Container>
    </ProfileContextProvider>
  );
}

export default App;
