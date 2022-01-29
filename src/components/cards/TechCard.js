import { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
function TechCard({
    techName,
    techImg,
    techDesc,
    proficiency,
    techExperince,
    projects,
    keyAreas }) {
    const [viewDetails, setViewDetails] = useState(false);
    return (
        <Card className="m-2">
            {techImg ? <img src={techImg} className="card-img-top" alt="..." /> : null}
            <div className="card-body">
                <h5 className="card-title">{techName}</h5>
                <div className="card-text">
                    <p>
                        <strong>Experience: {techExperince} Yrs </strong>
                    </p>
                    <p>
                        Proficiency{
                            [...new Array(5).fill(1)]
                                .map((star, i) => <span className={(i + 1) > proficiency ? 'fa fa-star unchecked"' : 'fa fa-star checked"'}></span>)

                        }
                    </p>

                    <div> {projects.map(x => <Badge className="bg-success m-1">{x}</Badge>)}</div>
                    <Button className="btn-light" onClick={(e) => setViewDetails(!viewDetails)}>{viewDetails ? 'Hide Details' : 'View Details'}</Button>
                    {viewDetails ? (<>
                        <p>{techDesc}</p>
                        <ul>
                            {keyAreas.map(x => <li>{x}</li>)}
                        </ul>
                    </>) : null}
                </div>
            </div>
        </Card>
    );
}

export default TechCard;