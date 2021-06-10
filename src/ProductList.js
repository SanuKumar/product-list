import React, { useState } from 'react';
import { Card, Toast, Button, Spinner } from 'react-bootstrap';

const ProductList = ({ productList, loading }) => {
  const [show, setShow] = useState(false);

  return (
    <div id='infinite-list'>
      <div style={{ position: 'fixed', right: '0px', zIndex: '999' }}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded me-2'
              alt=''
            />
            <strong className='me-auto'>Success!!</strong>
          </Toast.Header>
          <Toast.Body>
            Woohoo, you're have added successfully this product to cart
          </Toast.Body>
        </Toast>
      </div>
      <div className='card-wrapper'>
        {productList &&
          productList.map((p) => {
            return (
              <div
                style={{
                  paddingBottom: '10px',
                  paddingRight: '10px',
                }}
                key={p.productId}
              >
                <Card className='card-div'>
                  <div>
                    <span style={{ fontWeight: '600' }}>Gender</span>:{' '}
                    {p.gender}
                    <span style={{ float: 'right' }}>
                      <span style={{ fontWeight: '600' }}>Color</span>:{' '}
                      {p.primaryColour}
                    </span>
                  </div>
                  <Card.Img variant='top' src={p.searchImage} alt={p.product} />
                  <Card.Body>
                    <Card.Title>{p.brand}</Card.Title>
                    <Card.Text>{p.product}</Card.Text>
                    <Card.Text>Cost : {p.price}</Card.Text>
                    <Button onClick={() => setShow(true)} variant='primary'>
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
      {!loading ? (
        <div className='spinner-wrapper'>
          Loading product list...
          <Spinner animation='border' />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductList;
