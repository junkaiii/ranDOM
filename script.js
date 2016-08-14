// var request = new XMLHttpRequest();

$(function() { // good that you declare all variables here
  var $request = $('#request');
  var $bio = $('#bio'); //index.html does not have an id called bio
  var $output = $('#output');
  var url_api = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies' // we want the famous quote one so its =famous
  // var url_api = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
  var api_key = '5YLQrzUFnSmshxGAypr5wO73X8Uzp1BoNthjsnXFYT8XutFo0x'  // check your yoda talk app to see how to send mashap api key. you need X-Mashape-Key': xxxx
  var api_type = 'application/x-www-form-urlencoded'

  $request.on('click', function(e) {
    // alert('test');
    e.preventDefault();
    console.log('clicked');

    $.ajax({
        url: url_api,
        dataType: 'json', //how do you know it is json?
        content_Type: api_type, //not needed
        data: api_key, //use headers instead of data


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

    $bio.css('border', '1px solid grey'); //see variable declaration
    $loader.hide();
    $bio.html("hello" + data); //see variable declaration
    //
  }
  //
  function failFunction(request, textStatus, errorThrown) {
    $bio.html("an error occured during your request: " + request.status + '' + textStatus + '' + errorThrown); //see variable declaration
  }
});
