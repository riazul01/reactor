import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import './pagination.css';

const Pagination = ({ currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, totalItems }) => {
    const [totalPages, setTotalPages] = useState(100);

    useEffect(() => {
        setTotalPages(parseInt(totalItems / itemsPerPage));
    }, [itemsPerPage, totalItems]);

    const nextPage = () => {
        if (currentPage === totalPages) {
            return null;
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }

    const multiNextPage = () => {
        if (currentPage + 3 >= totalPages) {
            setCurrentPage(totalPages - 1);
        } else {
            setCurrentPage(currentPage + 3);
        }
    }

    const multiPrevPage = () => {
        if (currentPage - 3 <= 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage - 2);
        }
    }

    const handleItemsPerPage = (e) => {
        setItemsPerPage(e.target.value);
    }

    return (
        <div className="paginationBox">
            <ul className="paginationBtns">
                <li className="paginationBtn"><button className="arrowBtn arrowLeft" onClick={prevPage}><MdKeyboardDoubleArrowLeft /></button></li>
                {(currentPage > 2) && <li className="paginationBtn"><button onClick={() => setCurrentPage(1)}>1</button></li>}
                {(currentPage > 3) && <li className="paginationBtn"><button onClick={multiPrevPage}>...</button></li>}
                {(currentPage > 1) && <li className="paginationBtn"><button onClick={prevPage}>{currentPage - 1}</button></li>}
                <li className="paginationBtn"><button disabled className="activeBtn">{currentPage}</button></li>
                {(currentPage < totalPages) && <li className="paginationBtn"><button onClick={nextPage}>{currentPage + 1}</button></li>}
                {(currentPage + 2 < totalPages) && <li className="paginationBtn"><button onClick={multiNextPage}>...</button></li>}
                {(currentPage + 1 < totalPages) && <li className="paginationBtn"><button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button></li>}                
                <li className="paginationBtn"><button className="arrowBtn arrowRight" onClick={nextPage}><MdKeyboardDoubleArrowRight /></button></li>
            </ul>

            <label className="itemsPerPage" htmlFor="itemsPerPage">
                <span>Items Per Page</span>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="itemsPerPage" id="itemsPerPage">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="80">80</option>
                    <option value="100">100</option>
                </select>
            </label>
        </div>
    );
}

export default Pagination;