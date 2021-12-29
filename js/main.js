$(function(){
    var $balance = $('#amount');
   


// Posting to backend //
/*
$('#submit').on('click',function(){
    var userinfo ={
        $balance=$amount.val()
    };
    $.ajax({
        type: 'POST',
        // url of userinfo
        url:'',
        headers:{
            "Authorization": "Basic" + btoa (email + ":" + password),
             token : localStorage.getItem('token')},
        //data: userinfo,     
        data: { $balance=$amount.val()},
        success: function(newuserinfo){
            // not sure which one is the right form
            console.log(newuserinfo.$balance)
            //$userinfo.append('<label> balance:' + newuserinfo.$balance +'</label>')
        },
        error: function(){
            alert('error saving data');
        }
    })
});

});
*/



function getToken(name)
        {
            var cookieValue = null;
            if (document.cookie && document.cookie !=='')
            {
                var cookies = document.cookie.split(';');
                for (var i = 0;i<cookies.length;i++)
                {
                    var cookie = cookies[i].trim();
                    if (cookie.substring(0,name.length+1)===(name + '='))
                    {
                        cookieValue = decodeURIComponent(cookie.substring(name.length +1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
		
var csrftoken = getToken('csrftoken');

let data = {
    'file': file,
    'fileName': file.name,
};

let csrftoken = Cookies.get('csrftoken');
let response = fetch("/upload/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "X-CSRFToken": csrftoken },
})