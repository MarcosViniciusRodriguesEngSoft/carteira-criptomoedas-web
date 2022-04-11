import React from 'react'
import { DivCenterPR } from '../../helpers/StylesDiv';
import './styles.css';

const Pagination = ({pages, currentPage, setCurrentPage}) => {
  
  return (
    <DivCenterPR>
        {Array.from(Array(pages), (item, index) => {
            return <button className="btn-paginatiion" style={index === currentPage ? {backgroundColor: "lime"} : null} key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
    </DivCenterPR>
  );
}

export default Pagination;