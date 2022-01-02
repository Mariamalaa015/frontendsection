//const getBtn = documet.getElementById('register');
const postBtn = document.getElementById('register');

/*const getData = () => {
    axios.get('backendurl',{headers={'Authorziation' : "token"}}
    ).then(response => {
    console.log(response);
    //localStorage.setItem(access_token,"token");
  });
};*/

const sendData = () => {
  const nameValue = document.getElementById('name').value
  const usernameValue = document.getElementById('usrname').value 
  const regionValue = document.getElementById('Region').value
  const emailValue = document.getElementById('mail').value 
  const passwordValue = document.getElementById('pass').value
  const Imageval = document.getElementById('pic').src 

  console.log(nameValue)
  console.log(usernameValue)
  console.log(regionValue)
  console.log(emailValue)
  console.log(passwordValue)
  console.log(Imageval)
    axios
      .post(
        'https://the-outlet.herokuapp.com/api/register',
        {
          name:nameValue,
          username:usernameValue,
          region:regionValue,
          email:emailValue,
          password:passwordValue,
          //image.src = Imageval,
        },{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
      .then(response => {
        console.log(response)
        ;window.location.href = 'Mainpage.html'; 
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  
  //getBtn.addEventListener('click', getData);
  postBtn.addEventListener('click', sendData);