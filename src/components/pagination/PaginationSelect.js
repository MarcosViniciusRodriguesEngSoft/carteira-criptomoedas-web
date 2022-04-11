import React from 'react'
import { DivCenterPR } from '../../helpers/StylesDiv';

const PaginationSelect = ({itensPerPage, setItensPerPage}) => {

  return (
    <DivCenterPR>
        <h3>Itens por página:</h3>
        <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
        </select>
    </DivCenterPR>
  )
}

export default PaginationSelect;