$(function(){
    var $name = $('#name');
    var $username = $('#usrname');
    var $region = $('#Region');
    var $email = $('#mail');
    var $password = $('#pass');

// Posting to backend //
$('#register').on('click',function(){
    var userinfo ={
         $name = $name.val(),
         $username = $username.val(),
         $region = $region.val(),
         $email = $email.val(),
         $password = $password.val()
    };
    $.ajax({
        type: 'POST',
        // url of userinfo
        url:'',
        headers:{
            "Authorization": "Basic" + btoa (email + ":" + password),
             token :localStorage.getItem('token')},
        //data: userinfo,
        data:{
            $name = $name.val(),
            $username = $username.val(),
            $region = $region.val(),
            $email = $email.val(),
            $password = $password.val()},
        success: function(newuser){
            // not sure which one is the right form
            console.log('name:' + newuser.$name + 'username:' + newuser.$username + 'region:' + newuser.$region+
            'email:' + newuser.$email + 'password:' + newuser.$password)
        },
        error: function(){
            alert('error saving data');
        }
    })
});

});