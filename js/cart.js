const gettokenvalue = () => {
  axios
    .get("https://the-outlet.herokuapp.com/api/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    //ana msh 3rfa w msh fahma homa 3amleen eh fl cart esra7aa 
    .then((response) => {
      console.log(response.data);
      document.getElementById("Totalno").innerHTML = response.data.user.balance;
      document.getElementById("TotalPrice").innerHTML = response.data.user.balance;
      document.getElementById("imgcart").innerHTML = response.data.user.image;
      document.getElementById("number").innerHTML = response.data.user.balance;
      document.getElementById("price").innerHTML = response.data.user.balance;
      document.getElementById("Quantity").innerHTML = response.data.user.balance;
      document.getElementById("totalpriceproduct").innerHTML = response.data.user.balance;

    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

window.onload = gettokenvalue;
