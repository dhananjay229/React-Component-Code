import React, { useState, useEffect } from 'react';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage] = useState(10); // Change this value as needed
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulated API call with mock data
    const fetchData = async () => {
      // Simulate delay
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Item ${index + 1}`
      }));
      
      setData(mockData);
      setTotalPages(Math.ceil(mockData.length / itemsPerPage));
    };

    fetchData();
  }, [itemsPerPage]);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPaginationControls = () => {
    const paginationControls = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationControls.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 rounded focus:outline-none ${
            i === currentPage ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => handleChangePage(i)}
        >
          {i}
        </button>
      );
    }
    return paginationControls;
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map(item => (
      <div key={item.id} className="border p-2 mb-2 rounded">
        {item.name}
      </div>
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="mb-4">{renderData()}</div>
      <div className="flex justify-center">{renderPaginationControls()}</div>
    </div>
  );
}

export default Pagination;
