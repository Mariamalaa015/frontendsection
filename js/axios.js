const getBtn = documet.getElementById('login');
const postBtn = document.getElementById('login');

const getData = () => {
    axios.get('backendurl',{headers={'Authorziation' : "token"}}
    ).then(response => {
    console.log(response);
    localStorage.setItem(access_token,"token");
  });
};

const sendData = () => {
    axios
      .post(
        'backendurl',
        {
          email:$('#mail'),
          password:$('#pass')
          
        }
        /*{
          headers: {
          'Authorization': localStorage.getitem(access_token),
          }
        }*/
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