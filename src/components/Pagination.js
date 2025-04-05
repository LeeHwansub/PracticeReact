function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxVisiblePages = 5;
  
    // 현재 페이지 기준으로 시작 번호 계산
    const startPage =
      Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
    // 페이지 버튼 배열 만들기
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lsaquo;
        </button>
  
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            style={{
              margin: "0 4px",
              backgroundColor: currentPage === num ? "#007bff" : "white",
              color: currentPage === num ? "white" : "#333",
              border: "1px solid #ccc",
              padding: "6px 10px",
              cursor: "pointer",
              fontWeight: currentPage === num ? "bold" : "normal"
            }}
          >
            {num}
          </button>
        ))}
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rsaquo;
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    );
  }
  
  export default Pagination;
  