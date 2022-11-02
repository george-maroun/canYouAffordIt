// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
// var contents = $('#contents');
// var contentsParent = contents.parent();
// contents.remove();
// var message = contentsParent.prepend('<div class="container" > <img id="theImg" width="50%"/> <h1> Work work work work work </h1> </div>');
// message.addClass('beautText');
// var myImg;

// $.ajax({
//     method: 'GET',
//     url: 'https://picsum.photos/list',
//     success: function(result) {
//      // result is whatever the URL sends back from the request
//      var random = Math.floor(Math.random() * 1000);
//      var myURL = "https://unsplash.it/1200/800?image=" + result[random]["id"];

//      document.getElementById('theImg').src = myURL;
//     },
//     error: function(err) {
//      console.log('err');
//     }
//   });

const shopping = $("[id*='shopping']");
if (shopping) alert('can you really afford this??')

 