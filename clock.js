(function($) {

  var $clock = $('#clock');

  function setClock() {
    $clock.text(new Date().toLocaleTimeString());
  }

  var myTimer = setInterval(setClock, 1000);

})(jQuery);
