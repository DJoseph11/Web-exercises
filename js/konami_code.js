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
$(document).keyup(function(e) {

	var code = [38, 40, 37, 39, 66, 65, 13];
	var codeKey = e.keyCode
	var count = 0;
	for(var i = 0; i < code.length; i++) {
		if(code[i] === codeKey) {

			console.log(code[i] + " You have added 30 lives!")
		}
	}


	if( codeKey === "") {
		count = count + 1
		console.log("wrong key")
	}

	if(count > 3) {
		alert("refresh page")
	}
//          console.log("hey")
//    }
})






