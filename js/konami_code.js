// $(document).ready(function() {
// 	alert("the system is ready");
//
// 	$(".item-container, li").css("font-size", "20px");
//
// 	$("h1, p, li").css("background-color", "yellow");
//
// 	var content = $("#title").text()
//
// 	alert(content)
// })

// var konami = {
// init: function(){ 
// this.cacheDom();
// this.bindEvents();
// },
// cacheDom: function(){
// this.$doc = $(document);
// },
// bindEvents: function() {
// this.$doc.keydown(function() {
// 	if(e.keyCode == 59) {
// 		console.log("hey");
// 		console.log(e.keyCode);
// 	}

// });

// },
// }


// konami.init();

// $(function() {
// 	$(document).keydown(function(e) {
// 		let code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13 ];
// 		let container = 0;
// 		console.log(e.keyCode);
// 		var key = 
	
// 	console.log(container)
		
// 	}
// 	)
// })


// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up', 
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.body.style.backgroundImage = "url('images/cheatBackground.png')";

  var audio = new Audio('audio/pling.mp3');
  audio.play();

  alert("cheats activated");
}


// $(function() {
// 	let code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13 ];
// let seq = [38, 40, 37, 39, 66, 65, 13];
// let pos = 0;

//     $(document).keydown(function(e) {

// 		var key = seq[e.keyCode]
// 		console.log(key)
// 		var requiredKey = code[pos];
// 		console.log(requiredKey);
//         if( key === requiredKey) {
//             pos ++;
//             if (pos === code.length) {
//                 alert("something");
//                 pos = 0;
//             }
//         } else {
//             pos = 0;
//         }

//     })
// })

		
		
