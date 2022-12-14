$( "#hamburger" ).click(function() {
$('#menu').find('#mainMenu').stop(true,true).fadeToggle( "slow", "linear");
})

 $( "#buttonClub" ).click(
    function() {
     $('#clubContent').stop(true,true).fadeToggle( "medium", "linear");
     $("html, body").animate({ scrollTop: $("#clubContent").offset().top }, 500);
     }
    )
    
    $( "#more" ).hover(function() {
    $(this).find('#moreU').stop(true,true).slideDown("slow", "linear");
    $('#mainMenu').css('border-radius', '0px')
    $(this).css('cursor', 'pointer')
    },function(){
    $(this).find('#moreU').css('display', 'none')
    $('#mainMenu').css('border-radius', '0px 0px 0px 20px')
    }
    )
    $( "#social" ).click(function() {
    $(this).find('#socialU').stop(true,true).fadeToggle("fast", "linear");
    })
    $( "#documents" ).click(function() {
    $(this).find('#documentsU').stop(true,true).fadeToggle("fast", "linear");
    })
$('#mainMenu > li').hover(
function(){
     $(this).css('opacity', '1')
     $(this).css('font-weight', 'bold')
},
function(){
     $(this).css('opacity', '0.6')
     $(this).css('font-weight', 'normal')
     }
)  

$('#banner').hover(
     function(){
     $(this).css('background-image', 'url("assets/images/bannerdark.jpg")')
     },
     function(){
     $(this).css('background-image', 'url("assets/images/banner.jpg")')
     }
    )
    

$('.clubImg').hover(
    function(){
    $(this).css('opacity', '1')
    $(this).css('cursor', 'pointer')
    },
    function(){
     $(this).css('opacity', '0.8')
     })

$('.foodItemsList').hover(
         function(){
         $(this).css('background-color', 'rgba(240, 240,240, 1)')
         },
         function(){
         $(this).css('background-color', '#fbf7f7')
         }
)

    $('#introImage1').hover(
     function(){
            $(this).attr('src', 'assets/images/img_1.jpg')
},
            function(){
            $(this).attr('src', 'assets/images/img_2.jpg')
            }
            )
            
            $('#introImage2').hover(
             function(){
             $(this).attr('src', 'assets/images/img_3.jpg')
             },
             function(){
             $(this).attr('src', 'assets/images/img_6.jpg')
             })

             $("#foodB").click(function(){
                 $('#food').css('display', 'unset')
                $('#wine').css('display', 'none')
                $('#cocktails').css('display', 'none')
                })
            
                 $("#wineB").click(function(){
                 $('#wine').css('display', 'unset')
                $('#food').css('display', 'none')
                 $('#cocktails').css('display', 'none')
                 })
                
                 $("#cocktailB").click(function(){
                 $('#cocktails').css('display', 'unset')
                 $('#food').css('display', 'none')
                 $('#wine').css('display', 'none')
                 })

$( "#A" ).click(function() {
$('#clubContent').find('#AA').stop(true,true).fadeToggle( "slow", "linear")
})
$( "#B" ).click(function() {
$('#clubContent').find('#BB').stop(true,true).fadeToggle( "slow", "linear");
})
$( "#C" ).click(function() {
$('#clubContent').find('#CC').stop(true,true).fadeToggle( "slow", "linear");
})
                    