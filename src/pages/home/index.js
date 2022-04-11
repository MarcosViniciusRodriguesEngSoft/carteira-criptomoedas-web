import Carteira from "../../components/card";
import { Container } from "react-bootstrap";
import './styles.css';

function Home () {

    return (
    <>
        <Container fluid className="fundo-color">
            <Carteira/>
            {/*<DivCenter>
                <ArrowLeftSquare className="arrow"/><ArrowRightSquare className="arrow"/>
            </DivCenter>*/}
        </Container> 
    </>
    );
}

export default Home;