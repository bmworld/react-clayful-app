import React from 'react';
import Clayful from 'clayful/client-js';


function LandingPage() {

  const Product = Clayful.Product;

  const options = {
      query: {
          page: 1
      }
  };

  Product.list(options, function(err, response) {

      if (err) {
          console.log(err.isClayful);
          console.log(err.model);
          console.log(err.method);
          console.log(err.status);
          console.log(err.headers);
          console.log(err.code);
          console.log(err.message);
      }
      
      console.log(response.status);
      console.log(response.headers);
      console.log(response.data);

  });

  return (
    <div>LandingPage!!</div>
  )
}

export default LandingPage;