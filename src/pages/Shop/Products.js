import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CompareIcon, LikeIcon, ShareIcon } from "../../assets";
import clsx from "clsx";
import ProductDetail from "./ProductDetail";

const Products = ({ itemsPerPage, products }) => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const navigate = useNavigate();

  const getPageFromQuery = () => {
    const page = parseInt(query.get("page"), 10);
    return isNaN(page) || page < 1 ? 1 : page;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromQuery);
  useEffect(() => {
    setCurrentPage(getPageFromQuery());
  }, [useLocation().search]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      navigate(`/shop?page=${page}`);
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <ul className="flex flex-wrap px-20 py-16 gap-8">
        {" "}
        {currentProducts.map((product, index) => (
          <li key={index}>
            {product.component}
            <div>
              <Link to={`/product/${product.id}`}> Product Details</Link>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center gap-4 mb-4">
        <li className="flex flex-wrap gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-yellow-100  active:bg-yellow-200 active:text-white rounded-md flex justify-center px-6 py-4"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              onClick={() => handlePageChange(index + 1)}
              className={clsx(
                "rounded-md flex justify-center px-6 py-4",
                currentPage === index + 1 ? "bg-yellow-200" : "bg-yellow-100"
              )}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </li>

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-yellow-100 active:bg-yellow-200 active:text-white rounded-md flex justify-center px-6 py-4"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Products;
