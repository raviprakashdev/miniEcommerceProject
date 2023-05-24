import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product1 from '../product1.webp';
import { Link } from "react-router-dom";
function productCard() {
  return <div className="productCard">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='product-img' src={Product1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text >
         <div className='pricing'>$300</div> 
        </Card.Text>
       <Link to="/product"><Button variant="primary" className='product-view'>View Product</Button></Link> 
      </Card.Body>
    </Card>
  </div>
}
export default productCard;
