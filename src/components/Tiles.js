import { CardGroup } from "react-bootstrap";
import Tile from "./Tile";

function Tiles({ tiles }) {
    return (
        <CardGroup>
            {tiles.map(tile => <Tile key={tile.id} {...tile} ></Tile>)}
        </CardGroup>

    );
}

export default Tiles;