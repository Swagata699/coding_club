// ==================== #STICKY NAVBAR ====================
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("header");
var logo = document.getElementById("desktop_web_logo");
var desktop_web_logo_box=document.getElementById("desktop_web_logo_box");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    logo.classList.add("desk_logo");
    desktop_web_logo_box.classList.add("desktop_web_logo_box_addclass");
  } 
  else {
    navbar.classList.remove("sticky");
    logo.classList.remove("desk_logo");
    desktop_web_logo_box.classList.remove("desktop_web_logo_box_addclass");
  }
}


// ==================== #DROPDOWN ====================
$(document).ready(function(){
  $("#toggler_bars").click(function(){
    $("#nav_toggle_ul").toggle();
  });
});



// ==================== #SLIDER ====================
const nextIcon = '<img src="arrow-left.svg" alt="next">'
const prevIcon = '<img src="arrow-right.svg" alt="prev">'
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    mouseDrag:true,
    touchDrag:true,
    rewind:true,
    dots:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoHeight:true,
    navText:[
        nextIcon,
        prevIcon
    ],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        985:{
          items:2,
        },
        1000:{
            items:3,
        }
    }
})
})


// ==================== #NEWS BOARD ====================
$(function(){
    var tickerLength = $('#leatest_news ul li').length;
    var tickerHeight = $('#leatest_news ul li').outerHeight();
    $('#leatest_news ul li:last-child').prependTo('#leatest_news ul');
    $('#leatest_news ul').css('marginTop',-tickerHeight);
    function moveTop(){
      $('#leatest_news ul').animate({
        top : -tickerHeight
      },500, function(){
       $('#leatest_news ul li:first-child').appendTo('#leatest_news ul');
        $('#leatest_news ul').css('top','');
      });
     }
    setInterval( function(){
      moveTop();
    }, 3000);
});

// var interval;
// function ticker(){
//     if($("#leatest_news ul li").length > 3)
//     {
//         $("#leatest_news ul li:first").slideUp(function(){
//             $(this).appendTo("#leatest_news").slideDown();
//         });
//     }
//     function stop(){
//         clearInterval(interval);
//     }
// }
// $(document).ready(function(){
//     interval = setInterval(ticker,2000);
//     $("#leatest_news").hover(function(){
//         stop();
//     },function(){
//     interval = setInterval(ticker,2000);
//     });
// })


// ==================== #LOGIN VALIDATION   ====================
function onType(){
    document.getElementById("User_message").innerHTML="";
    document.getElementById("Pass_message").innerHTML="";
    document.getElementById("check_message").innerHTML="";
}
function loginFun(){
    let a = document.getElementById("User_name").value;
    let b = document.getElementById("Password").value;
    let c = document.getElementById("check").checked;
     
    if(a==''){
        document.getElementById("User_message").innerHTML="*";
        return false;
    }    
    if(b==''){
        document.getElementById("Pass_message").innerHTML="*";
        return false;
    }
    if(c==false){
        document.getElementById("check_message").innerHTML="*";
        return false;
    }
    else{
        // document.getElementById("form_data").reset();
        window.open("https://www.cclms.org/");
    }
}



// ===================== #FOOTER EMAIL VALIDATION ====================
function emailFun(){
    let a=document.getElementById("footer_input").value;

    if(a==''){
        document.getElementById("user_email_message").innerHTML="*";
        return false;
    }
    else{
        // document.getElementById("footer_form_data").reset();
        window.open("mailto:admin@cclms.org");
    }
}
function onTypeEmail(){
    document.getElementById("user_email_message").innerHTML="";
}



// ===================== #CHAT POP UP ====================
function openForm(){
    document.getElementById("myForm").style.display = "block";    
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";    
}



// function openForm(){
//     let a = document.getElementById("chat_message").value;

//     if(a==''){
        
//     }
// }


// CODE CLUB AREA VALIDATION
function onKey(){
    document.getElementById("u_message").innerHTML="";
    document.getElementById("l_message").innerHTML="";
    document.getElementById("u_email_message").innerHTML="";
    document.getElementById("u_num_mess").innerHTML="";
    document.getElementById("dropdown_message").innerHTML="";
    document.getElementById("u_town_message").innerHTML="";
}

function submitForm(){
    let a = document.getElementById("u_name").value;
    let b = document.getElementById("l_name").value;
    let c = document.getElementById("u_mail").value;
    let d = document.getElementById("u_numb").value;
    let e = document.getElementById("dropdown").value;
    let f = document.getElementById("u_town").value;
    if(a==''){
        document.getElementById("u_message").innerHTML="**";
        return false;
    }
    if(b.length!=10 || isNaN(b)){
        document.getElementById("l_message").innerHTML="**";
        return false;
    }
    if (c==''){
         document.getElementById("u_email_message").innerHTML="**";
         return false;
    }
    if(d==""){
        document.getElementById("u_num_mess").innerHTML="**";
        return false;
    }
    if(e=="select"){
        document.getElementById("dropdown_message").innerHTML="**";
        return false;
    }
    if(f==""){
        document.getElementById("u_town_message").innerHTML="**";
        return false;
    }
    else{
        window.alert("mailto:admin@cclms.org");
    }
}