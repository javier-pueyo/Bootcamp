import './pagination.scss';
import React from 'react';

function Pagination() {
  return (
    <nav aria-label="page navigation">
        <ul className="pagination">
            <li className="pagination__item">
                <a className="pagination__link" href="">Previous</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__link" href="">2</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__link" href="">Next</a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination