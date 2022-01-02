const getID = () => {
  axios
    .get("backend URL ", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("id")}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      //const v= response.data(user => {return ` ${user.name} `})
      document.getElementById("name").innerHTML = response.data.user.name;
      document.getElementById("type").innerHTML = response.data.user.type;
      document.getElementById("description").innerHTML =
        response.data.user.description;
      document.getElementById("price").innerHTML = response.data.user.price;
      document.getElementById("img1").src = response.data.user.image;
      document.getElementById("img2").src = response.data.user.image;
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

window.onload = getID;
