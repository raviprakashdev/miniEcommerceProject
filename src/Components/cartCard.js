import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product1 from "../product1.webp";
import Delete from "../delete-icon.png";
import Dropdown from "react-bootstrap/Dropdown";
function cartCard() {
  return (
    <div className="cart">
      <Container>
        <Row md={12} lg={12} className="product-cart-list-wrapper">
          <Col md={3} className="product-list-img-wrapper">
            <img src={Product1} className="product-list-img"></img>
          </Col>
          <Col md={5} className="all-center">
            <div>PlayStation 5</div>
          </Col>
          <Col md={1}  className="all-center">
            <div>$499</div>
          </Col>
          <Col md={2}  className="all-center">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={1}  className="all-center">
            <button>
                <img src={Delete}></img>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default cartCard;
