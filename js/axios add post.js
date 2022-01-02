const postBtn = document.getElementById('createpost');

const getData = () => {
    axios.get('backendurl',
    {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }).then(response => {
    console.log(response);
  });
};


const sendData = () => {
  const ProductName = document.getElementById('Name').value
  const Description = document.getElementById('Description').value 
  const PriceValue = document.getElementById('price').value
  const TypeValue = document.getElementById('type').value
  const BrandName = document.getElementById('Brand').value 
  //const passwordValue = document.getElementById('imageinserted').value
  //var formData = new FormData()
  //var imagefile = document.querySelector('#pic')
  //formData.append("image", imagefile.files[0])
  
  console.log(ProductName)
  console.log(Description)
  console.log(PriceValue)
  console.log(TypeValue)
  console.log(BrandName)
    axios
      .post(
        'Backenurl',/*'upload_file',formData,*/
        {
          name :ProductName,
          type :TypeValue,
          description : Description,
          price :PriceValue,
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
 // window.onload = getData
