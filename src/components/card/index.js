import { React, useState, useEffect } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { DivCenterPR } from '../../helpers/StylesDiv';
import '../../_config/style/index';
import Pagination from '../pagination/Pagination';
import PaginationSelect from '../pagination/PaginationSelect';

function Carteira () {
    const [itens, setItens] = useState([])
    const [itensPerPage, setItensPerPage] = useState(100)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex, endIndex)

    useEffect(() => {
        const fetchData = async () => {
        const result = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=1000&page=${pages}&sparkline=false`)
        .then(response => response.json())
        .then(data => data)

        setItens(result)
    }
    fetchData()
    },[])

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])

    return (
        <>
        <PaginationSelect itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}/>  
            <DivCenterPR className="ajust-container">
                {currentItens.map(item => 
                    
                    <Col className="alin-card">
                        <Image className="confg-img" src={item.image} />
                        <Card.Title className="confg-title">{item.name}</Card.Title>
                        <Card.Text className="confg-text">Cotação: R${item.current_price}</Card.Text>
                        <Card.Text className="confg-text">Menor Preço: R${item.low_24h} 24H</Card.Text>
                        <Card.Text className="confg-text">Maior Preço: R${item.high_24h} 24H</Card.Text>
                        <Card.Text className="confg-text">Rank: <strong>{item.market_cap_rank}</strong></Card.Text>
                    </Col>

                )}
            </DivCenterPR>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
        );
}

export default Carteira;


