import { Carousel, CarouselItem } from 'react-bootstrap';
import useWindowDimensions from './../hooks/useWindowDimensions';
import _ from "lodash";
import Tiles from './Tiles';
function TilesSection({ sectionName, data }) {
    const { width } = useWindowDimensions();
    const getChunkSize = (width) => {
        if (width < 576) {
            return 1;
        }
        if (width >= 576 && width < 768) {
            return 2;
        }
        if (width >= 768 && width < 992) {
            return 3;
        }
        return 4;
    }
    const tilesData = _.chunk(data, getChunkSize(width))
    return (
        <>
            <h2 className='title'>{sectionName}</h2>
            <Carousel>
                {
                    tilesData.map(tileData => <CarouselItem >
                        <Tiles tiles={tileData}>
                        </Tiles>
                    </CarouselItem>)
                }
            </Carousel>
        </>
    );
}

export default TilesSection;