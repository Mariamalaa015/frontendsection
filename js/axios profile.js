const gettokenvalue = () => {
  

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
        //const v= response.data(user => {return ` ${user.name} `})
       document.getElementById('name').innerHTML=response.data.user.name
       document.getElementById('email').innerHTML=response.data.user.email
       document.getElementById('region').innerHTML=response.data.user.region
       document.getElementById('profileimage').innerHTML=response.data.user.image
       //FileDownload(response.data.user.image,'profileimage')
      })
      .catch(err => {
        console.log(err, err.response);
      });
};

  window.onload = gettokenvalue
  