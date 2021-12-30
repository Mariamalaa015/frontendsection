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
      })
      .catch(err => {
        console.log(err, err.response);
      });
};

  window.onload = gettokenvalue
  