$(document).ready(function(){

    $('#mc-embedded-subscribe').click(function(event){
        var current_button = $(this);
        event.preventDefault();
        var formdata =  $("#mc-embedded-subscribe-form").serializeArray();
        current_button.val('thanks!');
        $.ajax({
            url: "http://128.199.96.134/api/v1/action.php",
            type: "POST",
            dataType: 'json',
            data: formdata,
            crossDomain : true,
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

$('.about-button').click(function(){
    mixpanel.track("About link clicked");
});

$('.presskit').click(function(){
    mixpanel.track("About link clicked");
    window.open("https://www.dropbox.com/s/x6euqsg3b7x863c/presskit_teleportcall.zip?dl=0", '_blank');
});

$('.android-download').click(function(event){
    event.preventDefault();
    mixpanel.track("Android download link clicked");
    window.open("https://play.google.com/store/apps/details?id=com.gazematic.teleportcall", '_blank');
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