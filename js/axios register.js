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
  const chooseFile = document.getElementById('pic')
  const imgPreview = document.getElementById('col-lg-7')
  chooseFile.addEventListener("change", function () {
    getImgData();
  })
  console.log(nameValue)
  console.log(usernameValue)
  console.log(regionValue)
  console.log(emailValue)
  console.log(passwordValue)
  
    axios
      .post(
        'https://the-outlet.herokuapp.com/api/register',
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
        console.log(response);
        window.location.href = "Mainpage.html"; 
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  
  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
  }
  //getBtn.addEventListener('click', getData);
  postBtn.addEventListener('click', sendData);
  