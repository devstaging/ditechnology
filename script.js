
jQuery(function($){
  $('.absolute-wrapper .path-class-all').on( "mouseover", function() {
    const currentPath = $(this).attr('id');
    console.log(currentPath);

    $('.members-box').removeClass('active');
    $('.members-box.' + currentPath).addClass('active');
  });
  
   $('.absolute-wrapper .path-class-all').on( "mouseout", function(){
     $('.members-box').removeClass('active');
   });
  $(document).ready(function(){
      $('.members-box').hover(
        function(){
          $(this).addClass('active');
        },
        function(){
          $(this).removeClass('active');
        }
      );
    });
});
