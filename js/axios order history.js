const gettokenvalue = () => {
    //const namevalue=document.getElementById('name')
  
      axios
        .get(
          'https://the-outlet.herokuapp.com/api/profile',
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          }
        )
        .then(response => {
          console.log(response.data)
         document.getElementById('ordernumber').innerHTML="Order no #" +response.data.purchased[0].id
         document.getElementById('product').innerHTML= response.data.purchased[0].name
         document.getElementById('type').innerHTML="Type: " + response.data.purchased[0].type
         document.getElementById('price').innerHTML="Price: " + response.data.purchased[0].price
         document.getElementById('orderimage').src=response.data.purchased[0].image
         
        })
        .catch(err => {
          console.log(err, err.response);
        });
  };
  
    window.onload = gettokenvalue
    