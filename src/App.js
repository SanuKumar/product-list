import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    let { data, status } = await axios.get(
      `https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6`
    );
    if (status === 200) {
      setProductList(data.products);
    } else {
      setProductList([]);
    }
  };

  return (
    <div>
      <div className='center-title'>Welcome To Product</div>
      <div>
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default App;
