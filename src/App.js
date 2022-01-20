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
      <Container>
        <Header></Header>
        <TilesSection sectionName='Blogs' data={data}></TilesSection>
        <TilesSection sectionName='Projects' data={data}></TilesSection>
        <Technologies></Technologies>
      </Container>
    </ProfileContextProvider>
  );
}

export default App;
