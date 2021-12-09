import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';

const Filters = () => {
    const { filters: { search, category, shipping, price }, updateFilters, sorted, } = useContext(ProductContext);
    return (
        <div>
            <section className="filters-section">
                <h2 className="section-title">search products</h2>
                <form className="filters-form">
                    <div>
                        <div className="form-group">
                            <label htmlFor="search">search</label>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                value={search}
                                onChange={updateFilters}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">category</label>
                            <select
                                name="category"
                                id="category"
                                className="form-control"
                                value={category}
                                onChange={updateFilters}
                            >
                                <option value="all">all</option>
                                <option value="phone">phone</option>
                                <option value="computer">computer</option>
                                <option value="radio">radio</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />
                            <label htmlFor="shipping">free shipping</label>
                        </div>
                    </div>
                    <div className="price-group">
                        <p>price</p>
                        <label>
                            <input type="radio" name="price" value="all" checked={price === 'all'}
                                onChange={updateFilters} />
                            all
                        </label>

                        <label>
                            <input type="radio" name="price" value="0" checked={price === 0}
                                onChange={updateFilters} />
                            $0-$200
                        </label>

                        <label>
                            <input type="radio" name="price" value="200" checked={price === 200}
                                onChange={updateFilters} />
                            $200-$300
                        </label>

                        <label>
                            <input type="radio" name="price" value="300" checked={price === 300}
                                onChange={updateFilters} />
                            $300-$400
                        </label>

                        <label>
                            <input type="radio" name="price" value="400" checked={price === 400}
                                onChange={updateFilters} />
                            $400-$500
                        </label>

                        <label>
                            <input type="radio" name="price" value="500" checked={price === 500}
                                onChange={updateFilters} />
                            $500-$600
                        </label>

                        <label>
                            <input type="radio" name="price" value="600" checked={price === 600}
                                onChange={updateFilters} />
                            over $600
                        </label>

                    </div>
                </form>
                <h6>total products: {sorted.flat().length}</h6>
                <hr />
            </section>
        </div >
    );
};

export default Filters;