import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setLoading(true);
    let { data, status } = await axios.get(
      `https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6`
    );
    if (status === 200) {
      setLoading(false);
      setProductList(productList.concat(data.products));
    } else {
      setProductList([]);
    }
  };

  // call the api when the scroll end the page end
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchProduct();
    }
  };

  return (
    <div>
      <div className='center-title'>Welcome To Product</div>
      <div>
        <ProductList productList={productList} loading={loading} />
      </div>
    </div>
  );
};

export default App;
