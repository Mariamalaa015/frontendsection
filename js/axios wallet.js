const gettokenvalue = () => {
  //const namevalue=document.getElementById('name')

  axios
    .get("https://the-outlet.herokuapp.com/api/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      //const v= response.data(user => {return ` ${user.name} `})
      document.getElementById("balance").innerHTML = response.data.user.balance;
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

window.onload = gettokenvalue;
