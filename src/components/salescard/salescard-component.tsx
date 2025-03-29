

const SalesCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      {/* Sales This Month */}
      <div className="text-3xl font-bold mb-1">5,337</div>
      <div className="text-sm text-gray-500 mb-6">Sales This Month</div>

      {/* Comparison to Last Month - Sales */}
      <div className="flex items-center mb-2">
        <div className="bg-green-100 rounded-full p-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
        <span className="text-sm text-green-600">
          95% More Sales In Comparison To Last Month.
        </span>
      </div>

      {/* Comparison to Last Month - Revenue Per Sale */}
      <div className="flex items-center mb-6">
        <div className="bg-red-100 rounded-full p-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <span className="text-sm text-red-600">
          98% Revenue Per Sale In Comparison To Last Month.
        </span>
      </div>

      {/* View Details Button */}
      <button className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded w-full">
        View Details
      </button>
    </div>
  );
};

export default SalesCard;