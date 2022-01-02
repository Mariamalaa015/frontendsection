const postBtn = document.getElementById("search");

const getData = () => {
  axios
    .get("backendurl", {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    })
    .then((response) => {
      console.log(response);
    });
};

const sendData = () => {
  const searchItem = document.getElementById("query").value;

  console.log(searchItem);
  axios
    .post(
      "Backenurl" /*'upload_file',formData,*/,
      {
        //msh 3rfa fl back esmaha ehh
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      console.log(response);
      window.location.href = "Search.html";
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

//getBtn.addEventListener('click', getData);
postBtn.addEventListener("click", sendData);
// window.onload = getData
