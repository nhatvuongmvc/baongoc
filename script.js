(function($){

    $(function(){
  
      var $heart  = $('.heart'),
          $h1     = $('h1'),
          $q      = $('q'),
          $close  = $('.close');
  
      function showQuote(){
        var $this = $(this);
        $q = $('q#' + $this.data('partner'));
        $close.show();
        $h1.removeClass('show').addClass('hide');
        $this.siblings('.heart').addClass('shrink');
        $q.slideDown();
      }
  
      function hideQuote(){
        var $this = $(this);
        $this.hide();
        $h1.removeClass('hide').addClass('show');
        $q.slideUp(function(){
          $heart.removeClass('shrink');
        });
      }
  
      $heart.on('click', showQuote);
      $close.on('click', hideQuote);
  
    });
  
  })(jQuery);