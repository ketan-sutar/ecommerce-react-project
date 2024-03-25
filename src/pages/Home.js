import React, { useState } from "react";
import { CartState } from "../context/Context";
import Cards from "../components/Cards";
import Filters from "../components/Filters";
import { Button, ButtonGroup, Container, Nav, Sidebar, Sidenav } from "rsuite";

const Home = () => {
  const {
    state: { products },
    productState: { sort },
  } = CartState();

  const transProduct = () => {
    let sortpro = products.slice();

    if (sort) {
      sortpro = sortpro.sort((x, y) => {
        return sort === "lowToHigh" ? x.price - y.price : y.price - x.price;
      });
    }

    return sortpro;
  };

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterItems = (categoryId) => {
    let filtered = products;

    if (categoryId !== "") {
      filtered = products.filter(
        (product) => product.categoryId === categoryId
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={260}
        >
          <Sidenav appearance="subtle">
            <Sidenav.Body>
              <Nav className="flex flex-col ml-5">
                <Nav.Item>
                  <h4>Filter</h4>
                </Nav.Item>
                <div className="mt-5" >
                  <Filters />
                </div>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Sidebar>
        <Container>
          <div className="flex items-center justify-between">
            <ButtonGroup variant="outlined" aria-label="Basic button group" >
              <Button   onClick={() => filterItems("")}>All</Button>
              <Button onClick={() => filterItems("fgsa2142fa")}>
                Keyboards
              </Button>
              <Button onClick={() => filterItems("xasgy42fa")}>
                Headphones
              </Button>
            </ButtonGroup>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2 mb-5 ">
            {transProduct().map((product) => {
              if (filteredProducts.some((p) => p.id === product.id)) {
                return <Cards key={product.id} product={product} />;
              }
              return null;
            })}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Home;
