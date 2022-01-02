const postBtn = document.getElementById('createpost');

const sendData = () => {
  
  const nameValue = document.getElementById('Name').value
  const descriptionValue = document.getElementById('des').value 
  const pricevalue = document.getElementById('price').value
  const typevalue = document.getElementById('type').value
  console.log(nameValue)
  console.log(descriptionValue)
  console.log(pricevalue)
  console.log(typevalue)
    axios
      .post(
        'https://the-outlet.herokuapp.com/api/product',
        {
          id:"2",
          name:nameValue,
          description:descriptionValue,
          price:pricevalue,
          type:typevalue
        }
      )
      .then(response => {
        console.log(response);
        console.log(response);
        window.location.href = "Available.html"; 
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
/*const gettokenvalue = () => {
  //const namevalue=document.getElementById('name')

  axios
    .get("https://the-outlet.herokuapp.com/api/all-products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response.data);
     
      
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};


window.onload = gettokenvalue;*/

postBtn.addEventListener('click', sendData);

