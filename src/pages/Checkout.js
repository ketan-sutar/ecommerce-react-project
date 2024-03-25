import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import "rsuite/dist/rsuite.min.css";
import { MdDeleteForever } from "react-icons/md";

import {
  Container,
  Header,
  Content,
  Footer,
  Sidebar,
  List,
  Button,
  Row,
  Col,
  Form,
  ButtonGroup,
  IconButton,
  Input,
  Stack,
  InputNumber,
  Avatar,
} from "rsuite";
import { CImage } from "@coreui/react";
// import "@coreui/coreui/dist/css/coreui.min.css";
const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(()=>{
    const storedCart=JSON.parse(localStorage.getItem("cart"));
    if(storedCart){
      dispatch({type:"INITIALIZE_CART",payload:storedCart})
    }

  },[])

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    localStorage.setItem("cart",JSON.stringify(cart));
  }, [cart]);

  const handleChangeQuantity = (productId, newQty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: productId,
        qty: newQty,
      },
    });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: productId },
    });
  };

  return (
    <>
      <div>
        <Container>
          <Container>
            <Header>CART</Header>

            <Content>
              <List>
                {cart.map((prod) => {
                  return (
                    <List.Item className="m-2 p-2" key={prod.id}>
                      <Row>
                        <Col xs={4}>
                          <CImage
                            className=""
                            src={prod.thumbnail}
                            alt={prod.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col xs={4}>{prod.name}</Col>
                        <Col xs={4}>{prod.price}</Col>
                        <Col xs={4}>
                          <Stack>
                            <InputNumber
                              onChange={(value) =>
                                handleChangeQuantity(prod.id, value)
                              }
                              defaultValue={1}
                              max={100}
                              min={0}
                            />
                          </Stack>
                        </Col>
                        <Col xs={4}>
                          <IconButton icon={<MdDeleteForever />} 
                          onClick={() => handleRemoveFromCart(prod.id)}
                          
                          />
                        </Col>
                      </Row>
                    </List.Item>
                  );
                })}
              </List>
            </Content>
          </Container>
          <Sidebar className="bg-cyan-200 flex flex-col ">
            <span className="title">Total({cart.length}) Products</span>

            <span className="text-xl">Total: ${total}</span>

            <Button color="primary" disabled={cart.length === 0}>
              Proceed to Checkout
            </Button>
          </Sidebar>
        </Container>
      </div>
    </>
  );
};

export default Checkout;
