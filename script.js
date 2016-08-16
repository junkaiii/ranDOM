// var request = new XMLHttpRequest();

$(function() { // good that you declare all variables here
  var $request = $('#request');
  var $bio = $('#bio'); //index.html does not have an id called bio
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
      .fail(failFunction); //good to declare all three done fail and always function
    //
  });

  function successFunction(data) { //check documentation for qXHR.done (the success function) - it requires 3 parameters just like the fail function http://api.jquery.com/jquery.ajax/


    // $bio.css('border', '1px solid grey');
    // console.log(data);
    // loader.hide();
    $bio.html("Quote:" + data.quote + "Author:" + data.author);


  }
  //
  function failFunction(request, textStatus, errorThrown) {
    $bio.html("an error occured during your request: " + request.status + '' + textStatus + '' + errorThrown); //see variable declaration
  }
});
