const gettokenvalue = () => {
  

    axios
      .get(
        'https://the-outlet.herokuapp.com/api/all-products',
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        }
      )
      .then(response => {
        console.log(response.data)
        //const v= response.data(user => {return ` ${user.name} `})
        
       document.getElementById('name').innerHTML=(response.data)[0].name
       document.getElementById('description').innerHTML=(response.data)[0].description
       document.getElementById('type').innerHTML=(response.data)[0].type
       document.getElementById('price').innerHTML=(response.data)[0].price
       
       //document.getElementById('productimage').src="https://the-outlet.herokuapp.com/images/products/"+response.data.image
      })
      .catch(err => {
        console.log(err, err.response);
      });
};

  window.onload = gettokenvalue
  