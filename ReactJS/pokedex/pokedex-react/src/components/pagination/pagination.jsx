import './pagination.scss';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const linkPage = [];
const numberPages = 3;
const startNumerPages = -numberPages +1;
for (let i = startNumerPages; i < numberPages; i++) {
    linkPage.push(i);
}

function Pagination() {
    const { filter } = useSelector((state) => state.pokemons);
    const location = useLocation();
    let pageId = Number(location.pathname.slice(1));
    if (!pageId) pageId = 1;
    
  return (
    <nav aria-label="page navigation">
    { !filter &&
        <ul className="pagination">
            <li className="pagination__item">
                {pageId > 0 && <NavLink to={`/${pageId - 1}`} className="pagination__link">Previous</NavLink>}
            </li>
            {
                linkPage.map ( (number) => {
                    if(pageId + number > 0) {
                        return(
                            <li className="pagination__item" key = {number}>
                                <NavLink to={`/${pageId + number}`} className="pagination__link">{`${pageId + number}`}</NavLink>
                            </li>
                        )
                    }
                })
            }

            <li className="pagination__item">
                <NavLink to={`/${pageId + 1}`} className="pagination__link">Next</NavLink>
            </li>
        </ul>
    }
    </nav>
  )
}

export default Pagination