$(document).ready(function(){

    $('#mc-embedded-subscribe').click(function(event){
        var current_button = $(this);
        event.preventDefault();
        var formdata =  $("#mc-embedded-subscribe-form").serializeArray();
        $.ajax({
            url: "subscribe/action.php",
            type: "POST",
            dataType: 'json',
            data: formdata,
            success: function(response) {
                 if (response.result == 'success') {
                    current_button.val('thanks!');
                 }else{
                    //========== error message ===========
                    //alert("error");
                 }
            }
         });

    });

//     $('#videographer').click(function(){
//         $('.popup-content').val("AWESOME WAY TO GET REWARDED FOR THE 360 DEGREE VIDEOS CAPTURED BY YOU. DROP US AN EMAIL BELOW TO 
// REQUEST EARLY ACCESS!");
//     });

//     $('.for-advertiser').click(function(){
//         $('.popup-content').val("WE ARE COMING TO YOU SOON TO TAKE YOUR BUSINESS TO NEXT LEVEL THROUGH
// VIRTUAL REALITY");
//     });

});