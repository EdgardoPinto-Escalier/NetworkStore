import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NetworkProduct from '../components/NetworkProduct'
import networkPproducts from '../network-products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {networkPproducts.map(networkProduct => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <NetworkProduct networkProduct={networkProduct} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
