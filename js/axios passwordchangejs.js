const getBtn = documet.getElementById('save');
const postBtn = document.getElementById('save');

const getData = () => {
    axios.get('backendurl',{headers={'Authorziation' : token}}
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
          newpassword:$('#newpassword')
          
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