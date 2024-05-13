// SearchProduct.jsx
import React from 'react';

const SearchProduct = ({ searchResults }) => {
  return (
    <div>
      {/* <h2 className='mx-2 mt-3' style={{fontSize:'18px'}}>Search Results</h2> */}
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Dish</th>
            <th>Title</th>
            <th>Price</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(product => (
            <tr key={product.id}>
              <td><img src={product.img} alt={product.dish} style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.dish}</td>
              <td>{product.Title}</td>
              <td>{product.Price}</td>
              <td><button className="btn btn-primary">Add to Cart</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchProduct;
