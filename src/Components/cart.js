import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Cart from "./cartCard";
function cart() {
  return (
    <div className="cart">
      <Container>
        <Row md={12} lg={12}>
          <Col md={8} className="part-1">
            <div className="cart-product-list">
              <h1>Shopping Cart</h1>
              <Cart />
            </div>
          </Col>
          <Col md={4} className="part-1">
            <div className="checkout-card">
                <div className="subtotal">Subtotal (5) items</div>
                <div className="total-price bordet-bottom">$2037.00</div>
                <div className="checkout-btn"> <Button variant="primary" className='product-view'>Proceed to Checkout</Button></div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default cart;
