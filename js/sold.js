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
       document.getElementById('name').innerHTML="chair"
       document.getElementById('description').innerHTML="rotating chair"
       document.getElementById('type').innerHTML="furniture"
       document.getElementById('price').innerHTML="500"
      })
      .catch(err => {
        console.log(err, err.response);
      });
};

  window.onload = gettokenvalue
  
  