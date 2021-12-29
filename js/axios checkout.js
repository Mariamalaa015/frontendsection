const getBtn = documet.getElementById('order');
const postBtn = document.getElementById('order');

const getData = () => {
    axios.get('backendurl',{headers={'Authorziation' : "token"}}
    ).then(response => {
    console.log(response);
    //localStorage.setItem(access_token,"token");
  });
};

const sendData = () => {
    axios
      .post(
        'backendurl',
        {
        firstname : $('#firstname'),
        lastname : $('#lastname'),
        username : $('#username'),
        email : $('#email'),
        address : $('#address'),
        country : $('#country'),
        region : $('#region'),
        postalcode : $('#postcode')
        },
        {
          headers: {
          'Authorization': localStorage.getitem(access_token),
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  
  getBtn.addEventListener('click', getData);
  postBtn.addEventListener('click', sendData);