import data from '../../technologies.json'
import TechCard from './TechCard';

function Technologies(props) {
    return (<>
        <h2 className='title'>Technologies</h2>
        {data.map(tech => <div className='row'><TechCard key={tech.id} {...tech}></TechCard></div>)}
    </>);
}

export default Technologies;