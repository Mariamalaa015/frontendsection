const postBtn = document.getElementById('createpost');

const sendData = () => {
  
  const nameValue = document.getElementById('Name').value
  const typeinput = document.getElementById('Brand').value
  const descriptioninput = document.getElementById('Description').value 
  const pricevalue = document.getElementById('price').value
  console.log(nameValue)
  console.log(typeinput)
  console.log(descriptioninput)
  console.log(pricevalue)
    axios
      .post(
        'https://the-outlet.herokuapp.com/api/products',
        {
          name:nameValue,
          type:typeinput,
          description:descriptioninput,
          price:pricevalue,
          image:document.getElementById('imageinserted').value
          
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

const getData = () => {
    axios
      .get(
        'https://the-outlet.herokuapp.com/api/products',
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

  window.onload = getData
  postBtn.addEventListener('click', sendData);
