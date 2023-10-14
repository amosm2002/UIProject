import React from "react";
import { useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

import { useState } from "react";


const Shop = () => {
  const [productsData, setProductsData] = useState([]);
  const [sortBy, setSortBy] = useState('reset');
  useEffect(() => {
    setProductsData([...products]);
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if(filterValue === "reset") {
      setProductsData(products);
    }
    if(filterValue === "sofa") {
      const filteredProducts = products.filter(item => item.category === "sofa");

      setProductsData(filteredProducts);
    }
    if(filterValue === "mobile") {
      const filteredProducts = products.filter(item => item.category === "mobile");

      setProductsData(filteredProducts);
    }
    if(filterValue === "chair") {
      const filteredProducts = products.filter(item => item.category === "chair");

      setProductsData(filteredProducts);
    }
    if(filterValue === "watch") {
      const filteredProducts = products.filter(item => item.category === "watch");

      setProductsData(filteredProducts);
    }
    if(filterValue === "wireless") {
      const filteredProducts = products.filter(item => item.category === "wireless");

      setProductsData(filteredProducts);
    }
    setSortBy('reset'); 
  }

  const handleFilterPrice = (e) => {
    const filterValue = e.target.value;
    if(filterValue === "reset") {
      setProductsData(products);
    }
    else if (filterValue === "expensive") {
      const sortedProducts = productsData.slice().sort((a, b) => b.price - a.price);
      setProductsData(sortedProducts);
      setSortBy('expensive'); 
    }
    else {
      const sortedProducts = productsData.slice().sort((a, b) => a.price - b.price);
      setProductsData(sortedProducts);
      setSortBy('cheapest'); 
    }
  }


  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }


  return (
    <Helmet title="Shop">
      <CommonSection title="Shop" />
      <section>
        <Container>
          <Row>
          <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="reset">Filter By Category</option>
                  <option value="sofa">sofa</option>
                  <option value="mobile">mobile</option>
                  <option value="chair">chair</option>
                  <option value="watch">watch</option>
                  <option value="wireless">wireless</option>

                </select>
              </div>
            </Col>
            
             <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                  <select value={sortBy} onChange={handleFilterPrice}>
                  <option value="reset">Sort By</option>
                  <option value="cheapest">Cheapest</option>
                  <option value="expensive">Expensive</option>
                </select>
              </div>
            </Col> 
            
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;