document.addEventListener('DOMContentLoaded', function () {
    // navbar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {

    });

    // modals
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});

function initMaterializeSelect(){
    // select
    var elems = document.querySelectorAll('select');
    
    var instances = M.FormSelect.init(elems, {});
}

//with jQuery



//$(document).ready(function(){
  //$(window).scroll(function(){
    //if($(window).scrollTop()>50){
      //  $('nav').addClass('red');
    //}else{
      
     //$('nav').removeClass('red');
    





//Inicializa el sidenav
//$(document).ready(function(){
  //  $('.sidenav').sidenav();
  //});