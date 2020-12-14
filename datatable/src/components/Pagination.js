import React from "react";
import  { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
     const [currentPage, setCurrentPage] = useState(0)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <nav>
    //   <ul className="pagination">
    //     {pageNumbers.map((number) => (
    //       <li key={number} className="page-item">
    //         <a onClick={() => paginate(number)} href="!#" className="page-link">
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>

    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.includes(currentPage - 1) && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                paginate(currentPage - 1);
              }}
            >
              Prev
            </a>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}

        {pageNumbers.includes(currentPage + 1) && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                paginate(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
