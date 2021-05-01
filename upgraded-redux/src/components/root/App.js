import { Row,Col,Container } from "reactstrap";
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList";
import Header from "../navi/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <Row>
        <Col xs="3">
          <CategoryList/>
        </Col>
        <Col>
          <ProductList/>  
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
