

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

// $(document).ready(function() {
	
// 	alert("the system is ready");


	
// 	})


$(function(params) {
	alert("The back is ready.");
	$("h1").click(function() {
		$(this).css("background-color", "red");
	})

	$("p").dblclick(function(){
		$(this).css("font-size", "18px")});

	$("li").hover(function(e) {
		$(this).css("color", "red");
	}, function() {
		$(this).css("color", "black")
	})



})







// var content =  $("#item-list").html();
//
// alert(content);
//
// // Similar to .innerHTML method
// // $(".class").html
//
// // similar to .style method
// //$("#id");.css
//
// //this how we select an element by id
//
// // $("#some-id");
// //



