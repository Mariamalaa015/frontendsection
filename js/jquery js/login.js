$(function(){
    var $email = $('#mail');
    var $password = $('#pass');
   


// Posting to backend //
$('#login').on('click',function(){
    var userinfo ={
        
        $email=$email.val(),
        $password=$password.val()

    };
    $.ajax({
        type:'GET',
        url:'',
        //localStorage.setItem('token',data.id_token),
    })
    $.ajax({
        type: 'POST',
        // url of userinfo
        url:'',
        //data: userinfo,
        data: {
            $email=$email.val(),
        $password=$password.val()
        },
        success: function(newuserinfo){
            localStorage.setItem('token',data.id_token);
            // Post data to backend
            console.log('email:'+ newuserinfo.$email +'password:' + newuserinfo.$password )
            
        },
        error: function(){
            alert('error saving data');
        }
    })
});

});