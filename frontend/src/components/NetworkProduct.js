import React from 'react'
import { Card } from 'react-bootstrap'

const NetworkProduct = ({ networkProduct }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${networkProduct._id}`}>
        <Card.Img src={networkProduct.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${networkProduct._id}`}>
          <Card.Title as='div'>
            <strong>{networkProduct.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>
            {networkProduct.rating} from {networkProduct.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>${networkProduct.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NetworkProduct

