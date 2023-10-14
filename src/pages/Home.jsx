import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/double-sofa-02.png";
import ProductsList from "../components/UI/ProductsList";


const Home = () => {

  const [data, setData] = useState(products)

  useEffect(()=> {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );

    setData(filteredProducts);
  }, []);
  
  
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2>Furnish your home beautifully with contemporary style.</h2>
                <p>
                Start shopping today to discover a world of possibilities. 
                Whether you're looking for something new or simply browsing, 
                there's something for everyone at Known Query.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6" className="image__gap">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" >
              <h2 className="section__title">Best Sellers</h2>
            </Col>
            <ProductsList data={data}/>
          </Row>
        </Container>
      </section>




    </Helmet>
  );
};

export default Home;