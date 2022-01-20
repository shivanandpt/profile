import { Card } from "react-bootstrap";
function Tile({ cardTitle, cardDesc, cardLink, cardImg, cardLinkTitle }) {
    return (
        <Card className="m-2">
            <img src={cardImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardDesc}</p>
                <a href={cardLink} className="btn btn-primary">{cardLinkTitle}</a>
            </div>
        </Card>
    );
}

export default Tile;