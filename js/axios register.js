const getBtn = documet.getElementById('register');
const postBtn = document.getElementById('#register');

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
          name:$('name'),
          username:$('#usrname'),
          region:$('#Region'),
          email:$('#mail'),
          password:$('#pass'),
        },
        {
          headers: {
          
          'Authorziation': `basic ${token}`,
          //'Authorization': localStorage.getitem(access_token),
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