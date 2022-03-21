import React, {Component} from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { DivCenterPR } from '../../_assets/js/StylesDiv';
import api from '../../_config/api/binance';
import './styles.css';

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


{/*criptos: "id",
                criptos: "symbol",
                criptos: "name",
                criptos: "image",
                criptos: "current_price",
                criptos: "market_cap",
                criptos: "market_cap_rank",
                criptos: "fully_diluted_valuation",
                criptos:  "total_volume",
                criptos:  "high_24h",
                criptos: "low_24h",
                criptos: "price_change_24h",
                criptos: "price_change_percentage_24h",
                criptos:  "market_cap_change_24h",
                criptos:  "market_cap_change_percentage_24h",
                criptos:  "circulating_supply",
                criptos:  "total_supply",
                criptos:  "max_supply",
                criptos:  "ath",
                criptos:  "ath_change_percentage",
                criptos: "ath_date",
                criptos:  "atl",
                criptos: "atl_change_percentage",
                criptos:  "atl_date",
                criptos: "roi",
                criptos: "last_updated",*/}