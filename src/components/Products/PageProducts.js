import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';
import ProductList from './ProductList';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const PageProducts = () => {
    const { sorted, page, changePage } = useContext(ProductContext);
    if (sorted[page]) {
        return <>
            <ProductList products={sorted[page]}></ProductList>
            {sorted.length > 1 && <article className="pagination-buttons">
                {page > 0 && <button className="prev-page-btn" onClick={() => changePage(page - 1)}>
                    <FaAngleDoubleLeft></FaAngleDoubleLeft>
                </button>}
                {sorted.map((_, index) => {
                    return <button
                        onClick={() => changePage(index)}
                        key={index}
                        className={`page-btn ${page === index && `page-btn-current`}`}>
                        {index + 1}
                    </button>
                })}

                {page < sorted.length - 1 && <button className="next-page-btn" onClick={() => changePage(page + 1)}>
                    <FaAngleDoubleRight></FaAngleDoubleRight>
                </button>}

            </article>


            }
        </>

    } else {
        return <h3 className="search-errors">
            {" "}
            unfortunately you search query did not match any products
            </h3>
    }
};

export default PageProducts;