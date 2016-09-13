jQuery(function($) {
  "use strict";

$('.navigation').singlePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        offset: 40,
        filter: ':not(.external)',
        easing: 'swing'

    });

    $.noConflict();
     $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



// wow animation

 new WOW().init();


 });

 // ghost typer

//  $("#title").ghosttyper({
//   messages: ['Frontend Developer', 'Web Designer', 'Artist', 'Surfer Yogi Chick' ],
//   // animation speed for typing effect
//   timeWrite: 100,
//   // animation speed for deleting effect
//   timeDelete: 50,
//   // animation delay
//   timePause: 1000,
//   callback: function(){}
// });
