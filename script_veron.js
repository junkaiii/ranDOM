// var request = new XMLHttpRequest();

$(function() {
  var $request = $('#request');
  var $bio = $('#bio');
  var $output = $('#output');
  var url_api = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
  // var url_api = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
  var api_key = '5YLQrzUFnSmshxGAypr5wO73X8Uzp1BoNthjsnXFYT8XutFo0x';
  var api_type = 'application/x-www-form-urlencoded';

  $request.on('click', function(e) {
    // alert('test');
    e.preventDefault();
    console.log('clicked');

    $.ajax({
        url: url_api,
        dataType: 'json',
        headers: {
          'X-Mashape-Key': api_key,
          'Content-type' : api_type},


        // data: {'application/x-www-form-urlencoded'}


        // type: 'GET',

        // data: {
        // sentence: $output.val()

        // dataType: 'html',
        // beforeSend: function(xhr) {
        //   $loader.show();
        //   xhr.setRequestHeader('X-Mashape-Key', '5YLQrzUFnSmshxGAypr5wO73X8Uzp1BoNthjsnXFYT8XutFo0x')
        // },

      }).done(successFunction)
      .fail(failFunction);
    //
  });

  function successFunction(data) {

    // $bio.css('border', '1px solid grey');
    // console.log(data);
    // loader.hide();
    $bio.html("Quote:" + data.quote + "Author:" + data.author);
    //
  }
  //
  function failFunction(request, textStatus, errorThrown) {
    $bio.html("an error occured during your request: " + request.status + '' + textStatus + '' + errorThrown);
  }
});
