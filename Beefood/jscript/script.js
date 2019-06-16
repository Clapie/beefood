// var menuContainer = document.getElementsByClassName("li");

// var menu = menuContainer.getElementsByClassName("menu");

// for (let i = 0; i < menu.length; i++) {
//     menu[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active");

//         if(current.length > 0){
//             current[0].className = current[0].className.replace(" active", "");
//         }

//         this.className += " active";
//     })
    
// }

// $('.header ul li a').click(function(){
//     $('.header ul li a').removeClass('active');
//     $(this).addClass('active');
// })

$('.navbar-nav li a').click(function(e){
    e.preventDefault();
    $('.navbar-nav li a').removeClass('active').addClass('inactive');
    $(this).addClass('active');
  })