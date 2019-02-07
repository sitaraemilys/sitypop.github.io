$(document).ready(function() {


    $('.shape-one').draggable();
    $('.gif').draggable();

    var naked = false;

    $( ".gif" ).mousedown(function() {
      if (naked == false) {
          $('.gif').attr('src','./images/gif/dancin-naked.gif');
          naked = true;
      } else {
          $('.gif').attr('src','./images/gif/dancin.gif');
          naked = false;
      }
    });


});
