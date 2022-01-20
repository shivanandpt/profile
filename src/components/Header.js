import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { ProfileContext } from "../contexts/ProfileContext";
function Header() {
    const { profileName,profileIntro } = useContext(ProfileContext);
    return (
        <Container>
            <Navbar>
                <a className="navbar-brand" href="#">{profileName.split(" ")[0]}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </Navbar>
            <Container className="p-3">
                <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1 className="header">{profileName}</h1>
                    <h3 className="header"> {profileIntro}</h3>
                </Container>
            </Container>
        </Container>
    );
}

export default Header
    ;