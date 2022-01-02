const destroytoken = () => {
  axios
    .post(
      'https://the-outlet.herokuapp.com/api/login',
      {
        headers: {
          'Authorization': `Bearer ${localStorage.clear()}`,
          
        }
      }
    )
    .then(response => {
      console.log(response.data)
      window.location.href='Mainpage.html'
    })
    .catch(err => {
      console.log(err, err.response);
    });
};
