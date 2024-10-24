// src/components/Pagination.js
import React from 'react';
import './Pagination.css'; // Optional: Create a CSS file for pagination styles

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        &lt; {/* Left Arrow */}
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        &gt; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Pagination;
