import { useState } from 'react';
import { Container, Badge, Button, Toast } from 'react-bootstrap';
import data from './../technologies.json'
function Tech(props) {
    const { techName } = props;
    const [show, setShow] = useState(false);
    return (
        <>
        { !show ? (
            <Button
            className="bg-success m-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Click for Details"
            onClick={()=> setShow(true)}>
                {techName}
            </Button>):
            (<TechDetails show={show} setShow={setShow} {...props}></TechDetails>)
        }
        </>
    );
}

function TechDetails({ techName, techDesc, proficiency, techExperince, projects, show, setShow}) {
    return (

        <Toast show={show} onClose={() => setShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">{techName}</strong>
        </Toast.Header>
        <Toast.Body>
            <div>
                <p>{techDesc}</p>
                <div>
                 Proficiency {
                 [...new Array(5).fill(1)] 
                 .map((star, i) => <span className={ (i + 1) > proficiency ? 'fa fa-star unchecked"': 'fa fa-star checked"' }></span>)
                
                 }
                </div>
            </div>
        </Toast.Body>
      </Toast>

    );
}

function Technologies(props) {
    return (<Container>
        <h2 className='title'>Technologies</h2>
        {data.map(tech => <Tech key={tech.id} {...tech}></Tech>)}
    </Container>);
}

export default Technologies;