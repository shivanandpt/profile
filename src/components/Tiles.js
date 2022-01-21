
import Tile from "./Tile";

function Tiles({ tiles }) {
    return (<div className="row">
        {
            tiles.map(tile =>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
                    <Tile key={tile.id} {...tile} ></Tile>
                </div>
            )
        }
    </div>


    );
}

export default Tiles;