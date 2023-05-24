import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product10 from "../product-1-0.jpeg";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
function productDetail() {
  return (
    <div className="productDetail">
      <Container>
        <Row md={12} lg={12}>
          <Col md={5} className="part-1">
            <div className="product-detail-img-wrapper">
              <img src={Product10} className="product-detail-img"></img>
            </div>
          </Col>
          <Col md={4} className="part-2">
            <div className="product-detail">
              <div className="product-name">Tajmahal</div>

              <div className="product-price">Price: $300</div>

              <div className="product-desc">
                Description: Tajmahal is the next generation in the
                award-winning Flip series; it is a portable Bluetooth speaker
                that delivers surprisingly powerful stereo sound. This compact
                speaker is powered by a 3000mAh rechargeable Li-ion battery that
                offers up to 12 hours of continuous, high-quality audio
                playtime.
              </div>
            </div>
          </Col>
          <Col md={3} className="part-3">
            <div className="add-to-cart">
              <div className="bordet-bottom">
                <Container>
                  <Row md={12} lg={12}>
                    <Col className="part-4">
                      <div className="product-price-cart">Price:</div>
                    </Col>
                    <Col className="part-4">
                      <div className="product-price-cart">$300</div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="bordet-bottom">
                <Container>
                  <Row md={12} lg={12}>
                    <Col className="part-4">
                      <div className="product-status">Status:</div>
                    </Col>
                    <Col className="part-4">
                      <div className="product-status">In Stock</div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="bordet-bottom">
                <Container>
                  <Row md={12} lg={12}>
                    <Col className="part-4">
                      <div className="product-qty">Qty</div>
                    </Col>
                    <Col className="part-4">
                      <div className="product-qty">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Dropdown Button
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="cart-btn">
                <Button variant="primary" className="product-view">
                  Add to Cart
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row xs={1} md={2}>
        <Col >1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
        {/* <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
      </Container>
    </div>
  );
}
export default productDetail;
