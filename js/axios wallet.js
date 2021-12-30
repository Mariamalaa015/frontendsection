const postBtn = document.getElementById('submit');

const getData = () => {
    axios.get('backendurl',
    {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }).then(response => {
    console.log(response);
  });
};

const sendData = () => {
  const balancevalue = document.getElementById('wallet').value
  console.log(balancevalue)
    axios
      .post(
        'backendurl',
        {
         balance:balancevalue
          
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  window.onload(getData);
  postBtn.addEventListener('click', sendData);