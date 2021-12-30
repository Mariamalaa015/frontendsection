const postBtn = document.getElementById('login');

const sendData = () => {
  
  const emailValue = document.getElementById('mail').value
  const passwordValue = document.getElementById('pass').value 
  console.log(emailValue)
  console.log(passwordValue)
    axios
      .post(
        'https://the-outlet.herokuapp.com/api/login',
        {
          email:emailValue,
          password:passwordValue
          
        }
      )
      .then(response => {
        console.log(response);
        localStorage.setItem("token",response.data.token)
        window.location.href = "/"; 
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

const getProduct = () => {
    axios
      .get(
        'https://the-outlet.herokuapp.com/api/all-products',
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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

  window.onload = getProduct
  postBtn.addEventListener('click', sendData);
