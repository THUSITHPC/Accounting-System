$(document).ready(function() {

    // var Admin = $.session.get("Login");
    // $('#lblLogin').html($.session.get("Login"));

    var person = new Object();
    var Username = $("#username").val();
    var Password = $("#password").val();

    $('#lblLogin a').text(sessionStorage.getItem("lastname"));
    // $.ajax({
    //     url: 'http://localhost:43089/api/first/register',
    //     type: 'POST',
    //     dataType: 'json',
    //     data: {
    //         Username: Username,
    //         Password: Password
    //     },
    //     success: function(data) {
    //         if (data.Msg == "OK") {

    //             myFunction();
    //         } else {
    //             $('#lblLogin').html(data.name);

    //         }

    //     },
    //     error: function(xhr, textStatus, errorThrown) {
    //         console.log('Error in Operation');
    //     }
    // });


});