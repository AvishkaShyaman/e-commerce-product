import { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';

function App() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((products) => setProduct(products));
  }, []);

  return (
    <div className="App">
      <h1 className="p-5 text-center">{product.title}</h1>
      <Container className="">
        <Row className="justify-content-md-center">
          <Card
            className="m-2 custom-card"
            style={{ width: '30rem' }}
            key={product.id}
          >
            <Row className="justify-content-md-center">
              <Card.Img
                style={{ width: '12rem' }}
                variant="top"
                src={product.image}
              />
            </Row>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className="my-2">
                <label className="m-1">Rating</label>
                <div className="badge bg-success">
                  {product.rating && product.rating.rate}
                </div>
              </div>
              <Button variant="primary">Buy {product.price}</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
