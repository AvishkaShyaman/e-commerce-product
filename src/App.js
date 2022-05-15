import {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";

function App() {

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(products=>setProduct(products))
  }, []);


  return (
      <div className="App">
        {/* <h1 className="p-5 text-center">{product.title}</h1> */}
        <div className="d-flex">
          {

                <Card className="m-2" style={{ width: '18rem' }} key={product.id}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Button variant="primary">Buy {product.price}</Button>
                  </Card.Body>
                </Card>
          }
          <div className="badge bg-success">
              { product.rating && product.rating.rate}
          </div>
        </div>
      </div>
  );
}

export default App;
