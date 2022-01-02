const postBtn = document.getElementById('addtocart');

const getData = () => {
    axios.get('backendurl',
    {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }).then(response => {
    console.log(response);
  });
};

//msh 3rfa ha-send eh esra7aa bs mafrod lma yedos add to cart yero7 maslan lel cart 

const sendData = () => {
    axios
    .post(
        'backendurl',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
              }
        }
    )
    //momkn yero7 3la el card maslan 
    .then(response => {
        console.log(response);window.location.href = "/"; 
      })
      .catch(err => {
        console.log(err, err.response);
      });
};
  
  window.onload = getData;
  postBtn.addEventListener("click", sendData);
