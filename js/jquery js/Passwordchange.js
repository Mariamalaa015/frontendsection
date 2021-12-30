$(function(){
    // newpassword is the name saved in the backend
    var $newpassword = $('#newpassword');
   


// Posting to backend //
$('#save').on('click',function(){
    var userinfo ={
        $newpassword=$newpassword.val()
    };
    $.ajax({
        type: 'POST',
        // url of userinfo
        url:'',
        headers:{
            "Authorization": "Basic" + btoa (email + ":" + password),
             token : localStorage.getItem('token')},
        data: {
            $newpassword=$newpassword.val()
        },
        success: function(newuserinfo){
            // not sure which one is the right form
            //console.log(newuserinfo.$newpassword)
            $userinfo.append('<label> balance:' + newuserinfo.$newpassword +'</label>')
        },
        error: function(){
            alert('error saving data');
        }
    })
});

});