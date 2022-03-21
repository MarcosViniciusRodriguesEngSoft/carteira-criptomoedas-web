import React, {Component} from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { DivCenterPR } from '../../helpers/StylesDiv';
import api from '../../_config/api/binance';
import '../../_config/style/index';

class Carteira extends Component {
    
    state = {
        criptos: [
            {
                
            }
        ]
    }
        async componentDidMount(){
            const criptos_api = await api.get('cripto');

            this.setState({
                criptos: criptos_api.data
            })
        }

    render () {
        return (
        <>
            <DivCenterPR className="ajust-container">
                {this.state.criptos.map( cripto =>
                
                    <Col className="alin-card">
                        <Image className="confg-img" src={cripto.image} />
                        <Card.Title className="confg-title">{cripto.name}</Card.Title>
                        <Card.Text className="confg-text">Cotação: R${cripto.current_price}</Card.Text>
                        <Card.Text className="confg-text">Menor Preço: R${cripto.low_24h} 24H</Card.Text>
                        <Card.Text className="confg-text">Maior Preço: R${cripto.high_24h} 24H</Card.Text>
                        <Card.Text className="confg-text">Rank: <strong>{cripto.market_cap_rank}</strong></Card.Text>
                    </Col>
                )}
            </DivCenterPR>
        </>
        )
    }
}

export default Carteira;


