$(function(){
    var $firstname = $('#firstname');
    var $lastname = $('#lastname');
    var $username = $('#username');
    var $email = $('#email');
    var $address = $('#address');
    var $country = $('#country');
    var $region = $('#region');
    var $postalcode = $('#postcode');

// Posting to backend //
$('#order').on('click',function(){
    var userinfo ={
        
        $firstname = $firstname.val(),
        $lastname = $lastname.val(),
        $username = $username.val(),
        $email=$email.val(),
        $address=$address.val(),
        $country = $country.val(),
        $region = $region.val(),
        $postalcode = $postalcode.val()

    };
    $.ajax({
        type: 'POST',
        // url of userinfo
        url:'',
        //data: userinfo,
        headers:{
            "Authorization": "Basic" + btoa (email + ":" + password),
             token :localStorage.getItem('token')},
        data: {
        $firstname = $firstname.val(),
        $lastname = $lastname.val(),
        $username = $username.val(),
        $email=$email.val(),
        $address=$address.val(),
        $country = $country.val(),
        $region = $region.val(),
        $postalcode = $postalcode.val()
        },
        success: function(newuserinfo){
            localStorage.setItem('token',data.id_token);
            // not sure which one is the right form
            console.log('firstname:'+ newuserinfo.$firstname +'lastname:' + newuserinfo.$lastname +'username:' + newuserinfo.$username +
            'email:' + newuserinfo.$email +'address:' + newuserinfo.$address + 'country:'+ newuserinfo.$country +
            'region:'+ newuserinfo.$region + 'postalcode:' + newuserinfo.$postalcode )
            
            /*$userinfo.append('firstname:'+ newuserinfo.$firstname +'lastname:' + newuserinfo.$lastname +'username:' + newuserinfo.$username +
            'email:' + newuserinfo.$email +'address:' + newuserinfo.$address + 'country:'+ newuserinfo.$country +
            'region:'+ newuserinfo.$region + 'postalcode:' + newuserinfo.$postalcode )*/
        },
        error: function(){
            alert('error saving data');
        }
    })
});

});