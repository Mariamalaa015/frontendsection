const postBtn = document.getElementById('login');

const sendData = () => {
  
  const emailValue = document.getElementById('mail').value
  const passwordValue = document.getElementById('pass').value 
  console.log(emailValue)
  console.log(passwordValue)
    axios
      .post(
        'http://localhost:8000/api/login',
        {
          email:emailValue,
          password:passwordValue
          
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

const getProduct = () => {
    axios
      .get(
        'http://localhost:8000/api/all-products',
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

  window.onload = getProduct
  postBtn.addEventListener('click', sendData);
