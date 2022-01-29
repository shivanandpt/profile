
import { Container } from 'react-bootstrap';
import Header from './Header';
import PageRouter from '../Router/PageRouter';
import Intro from './pages/Intro';

function Layout() {

    return (
        <Container className='container-fluid'>
            <Header></Header>
            <PageRouter></PageRouter>
        </Container>
    );
}

export default Layout;
