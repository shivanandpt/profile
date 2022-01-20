import { Container } from 'react-bootstrap';


import Tiles from './Tiles';
function TilesSection({ sectionName, data}) {
    return (
        <Container>
            <h2 className='title'>{sectionName}</h2>
            <Tiles tiles={data}>
            </Tiles>
        </Container>
    );
}

export default TilesSection;