$(function() {
//Touch_Start = 0;  // Коорд нач. точки
//Touch_End = 0;    // Коорд кон. точки
//Touch_Moove = 0;  // Коорд текущ. точки 
	
var choised_element;//--выбраный елемент
var this_category;	//--выбраная категория
var ative_point_of_list;//-- актиная точка в списке
  
$(".point").on("touchstart", function(e) {     
     //event.preventDefault();
     //event.stopPropagation();
     //Touch_Start = event.targetTouches[0].screenY;	 
});//---touchstart

	
	
$(".Left_Info_Block_2_Frame > div").on("touchstart", function(e) {    
    choised_element = "";
    choised_element = $(this).attr("id");
    //console.log($("#" + choised_element + "> ul"), "----------------==============----------------");
    $("#" + choised_element).addClass("acivision_block");
    choised_element = $("#" + choised_element + "> .swiper-wrapper");
    this_category = $(".btn_active").attr("id");
    //console.log(this_category,"this_category up")
});


$(".Left_Info_Block_2_Frame > div").on("touchmove", function(e) {//--------------передвижение ползунка
     event.preventDefault();
     event.stopPropagation();
     Touch_Moove =  event.targetTouches[0].pageY;   

     var  up_moove = $(choised_element).css("transform");
     up_moove = up_moove.substring(22, 26);
     up_moove = parseInt(up_moove);
     up_moove = up_moove + 10;

     //console.log(up_moove, "up_moove");
     if(up_moove <= -144){
         up_moove = -300
     }

     up_moove = up_moove - (up_moove*2);
     scroller($(".scroller"), up_moove);
});//---touchmove 


 $(".buttons > div").on("touchstart", function(e) {//--- обнуляем координаты скролера и меню
     //event.preventDefault();
     //event.stopPropagation();
     Touch_End   =  event.changedTouches[0].pageY;
     Touch_Start = 0;//---обнуляем координаты нач.точки
     scroller($(".scroller"), 0); 
     $(choised_element).css({"transform" : "translate3d(0px, 0px, 0px)"}); 
          
});//---touchend
	


         
	
var scroller = function(el,y){
   startY = parseInt(y);
if(startY < 1){
   startY = 0;
   $(el).css({"top" : startY });
}else if(startY > 280){
   startY = 280;
   $(el).css({"top" : startY });
}else if(startY < 280){
   $(el).css({"top" : startY });
}
}  


















});