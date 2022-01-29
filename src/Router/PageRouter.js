
import { Route, Routes } from 'react-router-dom';
import Blogs from '../components/pages/Blogs';
import Intro from '../components/pages/Intro';
import Projects from '../components/pages/Projects';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';

function PageRouter() {
    return <>
        <Routes>
            <Route path='/' element={<Intro></Intro>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/projects' element={<Projects></Projects>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
    </>;
}

export default PageRouter;