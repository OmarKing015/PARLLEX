$('span').mouseover(function(){
    $('span').addClass("border-dark");
    $('span').css("color", "#666");
   $('span').mouseout(function(){ 
        $('span').removeClass("border-dark"); 
   $('span').css("color", "#ddd");
});
});