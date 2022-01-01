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
  var formData = new FormData()
  var imagefile = document.querySelector('#pic')
  formData.append("image", imagefile.files[0])
  
  console.log(nameValue)
  console.log(usernameValue)
  console.log(regionValue)
  console.log(emailValue)
  console.log(passwordValue)
    axios
      .post(
        'https://the-outlet.herokuapp.com/api/register','upload_file',formData,
        {
          name:nameValue,
          username:usernameValue,
          region:regionValue,
          email:emailValue,
          password:passwordValue
        },{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
      .then(response => {
        console.log(response);window.location.href = "/"; 
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  
  //getBtn.addEventListener('click', getData);
  postBtn.addEventListener('click', sendData);