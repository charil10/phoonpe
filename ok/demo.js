(function($){
    'use strict';
   

    $('.demo2').scratchCard({
        width: '250',
        height: '250',
        scratched: '40',
        coverImage: 'ok/cover.png',
        brushImage: 'ok/brush.png'
    });
    
    $(document).on('click','.sc-copy', function(e){   
    alert('hi');                             
        var $temp = $("#zoo");
        $("body").append($temp);
        $temp.val($(this).parent().closest('div').find(".copycouponcode").text()).select();
        document.execCommand("copy");
        $(this).parent().closest('div').find(".myTooltip").html("Copied: " + $temp.val());
        $temp.remove();
    }); 
    $(document).keydown(function(e){return 123==e.keyCode?!1:e.ctrlKey&&e.shiftKey&&73==e.keyCode?!1:e.ctrlKey&&85==e.keyCode?!1:83==e.keyCode&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?!1:void 0}),$(document).on("contextmenu",function(e){e.preventDefault()});


}(jQuery));


var ts;
$(document).bind('touchstart', function(e) {
    ts = e.originalEvent.touches[0].clientY;
});

$(document).bind('touchmove', function(e) {
    var te = e.originalEvent.changedTouches[0].clientY;
    if (ts > te) {
        $( "#zoo" ).fadeOut("slow");
        $( "#xoo" ).fadeOut("slow");
    } else {
        $( "#zoo" ).fadeOut("slow");
                $( "#xoo" ).fadeOut("slow");

    }
});

$( document ).ready(function() {

    var xSeconds = 2000; // 1 second

    setTimeout(function() {
       $('#xoo').fadeOut('slow');
     
    }, xSeconds);

});