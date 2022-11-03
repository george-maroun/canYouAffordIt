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

const shopping = $("[id$='shopping']");
// const cart =  $("[id*='cart']");
if (shopping[0]) alert('worked shopping')
const cart = $("[id*='hplo']");
// const cart =  $("[id*='cart']");
if (cart[0]) alert('worked hplogo')

// const shopping = $("[id$='hplogo']");
// // const cart =  $("[id*='cart']");
// if (shopping) console.log(shopping[0])


function displayPopUp() {
  const popUp = document.createElement('div')
  popUp.classList.add('pop-up');
 
  const question = document.createElement('div');
  popUp.appendChild(question);
  question.classList.add('question');
  question.innerHTML = "are you sure?"
  
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  popUp.appendChild(buttons);
  
  const yesButton = document.createElement('a');
  const noButton = document.createElement('a');
  yesButton.classList.add('yesButton');
  noButton.classList.add('noButton');
  noButton.innerHTML = "NO";
  noButton.href = "https://www.nerdwallet.com/article/finance/how-to-save-money";
  yesButton.innerHTML = "YES";
  buttons.appendChild(yesButton);
  buttons.appendChild(noButton);



  const body = document.querySelector('body');
  body.appendChild(popUp)
}

if (window.location.href.includes('amazon.com')) {
  displayPopUp();
}

 